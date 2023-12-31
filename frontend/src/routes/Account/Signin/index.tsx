import React from 'react'
import axios from 'axios'
import { useMedia } from 'hooks'
import { UserApi } from 'services/auth-services'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  Link as LinkChakra,
  useToast,
  Box,
  Spinner,
} from '@chakra-ui/react'

export type NewUserProps = {
  name: string
  email: string
  password: string
  confirm_password: string
}

export const SignIn = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { isMobileOrTablet } = useMedia()

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserProps>()

  const onSubmit: SubmitHandler<NewUserProps> = async (data) => {
    try {
      setIsLoading(true)
      const response = await UserApi.newUser(data)

      if (response.success) {
        toast({
          description: `Conta cadastrada com sucesso!`,
          containerStyle: { color: 'white' },
          position: isMobileOrTablet ? 'top' : 'bottom-right',
          isClosable: true,
        })
        navigate('/account')
      }
    } catch (e: unknown) {
      const errorMessage = axios.isAxiosError(e)
        ? e.response?.data?.error
        : 'E-mail ou senha incorretos!'

      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <VStack>
      <Heading
        as="h2"
        color="white.400"
        w="14rem"
        textAlign="center"
        fontSize="2.125rem"
        fontWeight={700}
        lineHeight="2.5rem"
        letterSpacing="0.4px"
      >
        Crie uma nova conta
      </Heading>

      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems="flex-start">
          <Input
            type="text"
            id="name"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            color="white.400"
            placeholder="Nome"
            _placeholder={{ color: 'blue.900' }}
            {...register('name', { required: true })}
          />
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.name ? 'visible' : 'hidden'}
          >
            Nome é obrigatório
          </Text>

          <Input
            type="email"
            id="email"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border={'none'}
            placeholder="E-mail"
            color="white.400"
            _placeholder={{ color: 'blue.900' }}
            {...register('email', { required: true })}
          />
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.email ? 'visible' : 'hidden'}
          >
            E-mail é obrigatório
          </Text>

          <Input
            type="password"
            id="password"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Senha"
            color="white.400"
            _placeholder={{ color: 'blue.900' }}
            {...register('password', { required: true })}
          />
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.password ? 'visible' : 'hidden'}
          >
            Senha é obrigatório
          </Text>

          <Input
            type="password"
            id="confirm_password"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Confirme sua senha"
            color="white.400"
            _placeholder={{ color: 'blue.900' }}
            {...register('confirm_password', { required: true })}
          />
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.confirm_password ? 'visible' : 'hidden'}
          >
            Confirmação de senha é obrigatório
          </Text>

          {isLoading ? (
            <Box
              w="21.5rem"
              h="3rem"
              borderRadius="0.625rem"
              bgColor="white.400"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner
                thickness="3px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.900"
                size="lg"
              />
            </Box>
          ) : (
            <Button
              w="21.5rem"
              h="3rem"
              borderRadius="0.625rem"
              color="blue.900"
              fontSize="md"
              fontWeight={500}
              lineHeight="1.375rem"
              letterSpacing="-0.41px"
              type="submit"
            >
              Criar conta
            </Button>
          )}
        </VStack>
      </FormControl>

      <Text
        m="2.5rem 0 0 0"
        textAlign="center"
        color="white.400"
        fontSize="md"
        fontWeight={400}
        lineHeight="1.375rem"
        letterSpacing="-0.41px"
      >
        Já possui uma conta?{' '}
        <LinkChakra as={Link} to="/account" fontWeight={700}>
          Entrar
        </LinkChakra>
      </Text>
    </VStack>
  )
}
