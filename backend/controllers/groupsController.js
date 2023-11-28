const prisma = require('../prisma/index')
const parserToken = require('../helpers/parserToken')

exports.find = async (req, res, next) => {
    try {
        const { userId } = parserToken(req.headers.authorization)

        const group = await prisma.groups.findMany({
            where: {
                OR: [
                    {
                        created_by_id: userId,
                    },
                    {
                        user_ids: {
                            has: userId
                        }
                    }
                ],
                ...req.query
            },
            select: {
                id: true,
                name: true,
                color: true,
                icon: true,
                updated_at: true,
                created_at: true,
                created_by: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                purchase_list: {
                    where: {
                        delete: false
                    },
                    select: {
                        id: true,
                        name: true,
                        color: true,
                        icon: true,
                        total: true,
                        created_at: true,
                        updated_at: true,
                        shared: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            }
                        }
                    }
                },
                user_list: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            }
        })

        res.status(200).json({
            success: true,
            group
        })
    } catch (error) {
        throw new Error(error)
    }

}

exports.create = async (req, res, next) => {
    try {
        const { name, color, icon } = req.body

        // Check
        if (!name || !color || !icon) return next(new Error('Por favor informe o nome,cor e icone do grupo'));

        const user = parserToken(req.headers.authorization)

        const group = await prisma.groups.create({
            data: {
                name,
                color,
                icon,
                created_by_id: user.userId
            },
        })

        res.status(200).json({
            success: true,
            group
        })
    } catch (error) {
        throw new Error(error)
    }

}

exports.update = async (req, res, next) => {
    try {
        const { id } = req.query
        if (!id) return next(new Error('Informe um id'));

        if (Object.keys(req.body).length == 0) return next(new Error('Nenhum dado informado.'))

        const validFields = ['name', 'color', 'icon'];
        if (!Object.entries(req.body).some(([key, data]) => data !== undefined && data !== null && data !== '' && validFields.includes(key))) {
            return next(new Error('Pelo menos um dos campos válidos deve estar presente no objeto: name, color, icon'))
        }

        const update = await prisma.groups.update({
            where: {
                id,
            },
            data: req.body
        })

        res.status(200).json({
            success: true,
            update
        })

    } catch (error) {
        // Verifica se o erro é devido a um ID inválido
        if (error.message.includes('Malformed ObjectID')) {
            return next(new Error('ID da lista inválido. Verifique se o ID está no formato correto.'))
        }

        // Outros erros
        throw new Error(error)
    }
}

exports.addUsers = async (req, res, next) => {
    try {
        const { id } = req.query
        if (!id) return next(new Error('Informe um id'));

        const { email } = req.body
        if (!email) return next(new Error('Informe o e-mail do usuario.'))

        // Verificar se o usuario é existente
        const { id: user_id } = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        // Verificar se a grupo é existente
        const group = await prisma.groups.findUnique({
            where: {
                id
            },
        })

        const { userId } = parserToken(req.headers.authorization)
        if (userId !== group.created_by_id) return next(new Error('Você não possui permissão para adicionar usuarios ao grupo.'))

        // Verificar se o id do usuario ja esta adicionado ao grupo
        const check = group.user_ids.length > 0 ? group.user_ids.some((item) => item === req.body.user_ids) : false
        if (!check) {
            group.user_ids.push(user_id)
        } else {
            return next(new Error('Usuario ja adicionado.'))
        }

        const update = await prisma.groups.update({
            where: {
                id,
            },
            data: {
                user_ids: group.user_ids
            }
        })

        res.status(200).json({
            success: true,
            update
        })

    } catch (error) {
        // Verifica se o erro é devido a um ID inválido
        if (error.message.includes('Malformed ObjectID')) {
            return next(new Error('ID da lista inválido. Verifique se o ID está no formato correto.'))
        }

        // Outros erros
        throw new Error(error)
    }
}

exports.removeUsers = async (req, res, next) => {
    try {
        const { id } = req.query
        if (!id) return next(new Error('Informe um id'));

        const { user_id } = req.body
        if (!user_id) return next(new Error('Informe o id do usuário.'))

        // Verificar se a grupo é existente
        const grupo = await prisma.groups.findUnique({
            where: {
                id,
            },
        })

        const { userId } = parserToken(req.headers.authorization)
        if (userId !== grupo.created_by_id && userId !== user_id) return next(new Error('Você não possui permissão para compartilhar esta lista.'))

        // Verificar se o id do usuario ja esta adicionado ao grupo
        const index = grupo.user_ids.findIndex((item) => item === req.body.user_id)
        if (index !== -1) {
            grupo.user_ids.splice(index, 1)
            req.body.user_id = grupo.user_ids
        } else {
            return next(new Error('Usuário inválido.'))
        }

        const update = await prisma.groups.update({
            where: {
                id,
            },
            data: {
                user_ids: req.body.user_id
            }
        })

        res.status(200).json({
            success: true,
            update
        })
    } catch (error) {
        // Verifica se o erro é devido a um ID inválido
        if (error.message.includes('Malformed ObjectID')) {
            return next(new Error('ID da lista inválido. Verifique se o ID está no formato correto.'))
        }

        // Outros erros
        throw new Error(error)
    }
}

exports.addPurchaseList = async (req, res, next) => {
    try {
        const { id } = req.query
        if (!id) return next(new Error('Informe um id'));

        const { purchase_list_ids } = req.body
        if (!purchase_list_ids) return next(new Error('Informe o id da lista.'))

        // Verificar se o grupo é existente
        const group = await prisma.groups.findUnique({
            where: {
                id
            },
        })

        const { userId } = parserToken(req.headers.authorization)
        if (userId !== group.created_by_id) return next(new Error('Você não possui permissão para adicionar listas ao grupo.'))

        // Verificar se o id da lista ja esta adicionada ao grupo
        const check = group.purchase_list_ids.length > 0 ? group.purchase_list_ids.some((item) => item !== req.body.purchase_list_ids) : true
        if (check) {
            group.purchase_list_ids.push(req.body.purchase_list_ids)
            req.body.purchase_list_ids = group.purchase_list_ids
        } else {
            return next(new Error('Lista ja adicionada.'))
        }

        const update = await prisma.groups.update({
            where: {
                id,
            },
            data: {
                purchase_list_ids: req.body.purchase_list_ids
            }
        })

        res.status(200).json({
            success: true,
            update
        })

    } catch (error) {
        // Verifica se o erro é devido a um ID inválido
        if (error.message.includes('Malformed ObjectID')) {
            return next(new Error('ID da lista inválido. Verifique se o ID está no formato correto.'))
        }

        // Outros erros
        throw new Error(error)
    }
}

exports.removePurchaseList = async (req, res, next) => {
    try {
        const { id } = req.query
        if (!id) return next(new Error('Informe um id'));

        const { purchase_list_ids } = req.body
        if (!purchase_list_ids) return next(new Error('Informe o id da lista.'))

        // Verificar se o grupo é existente
        const group = await prisma.groups.findUnique({
            where: {
                id
            },
        })

        const { userId } = parserToken(req.headers.authorization)
        if (userId !== group.created_by_id) return next(new Error('Você não possui permissão para remover a listas do grupo.'))

        // Verificar se o id da lista ja esta adicionada ao grupo
        const index = group.purchase_list_ids.find((item) => item !== req.body.purchase_list_ids)
        if (index !== -1) {
            group.purchase_list_ids.splice(index, 1)
            req.body.purchase_list_ids = group.purchase_list_ids
        } else {
            return next(new Error('Lista ja adicionada.'))
        }

        const update = await prisma.groups.update({
            where: {
                id,
            },
            data: {
                purchase_list_ids: req.body.purchase_list_ids
            }
        })

        res.status(200).json({
            success: true,
            update
        })

    } catch (error) {
        // Verifica se o erro é devido a um ID inválido
        if (error.message.includes('Malformed ObjectID')) {
            return next(new Error('ID da lista inválido. Verifique se o ID está no formato correto.'))
        }

        // Outros erros
        throw new Error(error)
    }
}

exports.destroy = async (req, res, next) => {
    try {
        const { id } = req.query
        // Check
        if (!id) return next(new Error('Informe o id do grupo'));

        // Verificar se o grupo é existente
        const { created_by_id } = await prisma.groups.findUnique({
            where: {
                id
            }
        })

        const { userId } = parserToken(req.headers.authorization)
        if (userId !== created_by_id) return next(new Error('Você não possui permissão para adicionar listas ao grupo.'))

        await prisma.groups.delete({
            where: {
                id
            }
        })

        res.status(200).json({
            success: true,
            message: 'Grupo deletado.'
        })
    } catch (error) {
        // Verifica se o erro é devido a um ID inválido
        if (error.message.includes('Malformed ObjectID')) {
            return next(new Error('ID do grupo inválido. Verifique se o ID está no formato correto.'))
        }

        // Outros erros
        throw new Error(error)
    }

}