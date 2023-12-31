import React, { useState } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

type CategorySelectProps = {
  getCategory: (arg: string) => void
}

export const CategorySelect = ({ getCategory }: CategorySelectProps) => {
  const [selectetCategory, setSelectetCategory] = useState({
    name: '',
    color: '',
  })

  const handleSetCategory = (
    category: React.SetStateAction<{ name: string; color: string }>
  ) => {
    setSelectetCategory(category)
    getCategory(category.name)
  }

  const categories = [
    { name: 'Açougue', color: '#D23D33' },
    { name: 'Hortifruti', color: '#047C52' },
    { name: 'Congelados', color: '#27488F' },
    { name: 'Mercearia', color: '#FF9F0A' },
    { name: 'Laticínios', color: '#C8B100' },
    { name: 'Padaria', color: '#C1A386' },
    { name: 'Bebidas', color: '#55B3DA' },
    { name: 'Perfumaria', color: '#BF5AF2' },
    { name: 'Limpeza', color: '#00D689' },
    { name: 'Pet Shop', color: '#E1289B' },
    { name: 'Farmácia', color: '#6E7972' },
    { name: 'Outros', color: '#734230' },
  ]

  return (
    <>
      <Flex flexDirection="column" w="100%">
        <Text
          paddingLeft="0.5rem"
          fontSize="1.0625rem"
          fontWeight={400}
          color="blue.900"
        >
          Categoria
        </Text>
        <Flex maxW="100%" flexWrap="wrap">
          {categories.map((category) => {
            return (
              <Flex
                key={category.name}
                w="25%"
                paddingY="0.3125rem"
                justifyContent="center"
                alignItems="center"
              >
                <Flex
                  onClick={() => handleSetCategory(category)}
                  justifyContent="space-evenly"
                  alignItems="center"
                  cursor="pointer"
                  h="2.625rem"
                >
                  <Box
                    borderRadius="full"
                    padding=".1rem"
                    border={
                      category.name === selectetCategory.name ? '2px' : 'unset'
                    }
                    borderColor="#27488F4D"
                  >
                    <Flex
                      bg={category.color}
                      borderRadius="full"
                      w="5rem"
                      h="1.5rem"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text color="white" fontSize="0.75rem">
                        {category.name}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}
