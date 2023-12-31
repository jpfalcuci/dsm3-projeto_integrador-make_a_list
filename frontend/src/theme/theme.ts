import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'ligth',
  },
  fonts: {
    body: `'Raleway', 'sans-serif'`,
  },
  colors: {
    blue: {
      50: '#7DC4E4',
      400: '#029ECE',
      900: '#27488F',
    },
    white: {
      400: '#D9D9E3',
    },
    orange: {
      100: '#F0CCB6',
    },
    gray: {
      100: "#D9D9E3"
    },
    red: {
      400: '#D23D33'
    }
  },
  components: {
    Drawer: {
      parts: ['dialog', 'header', 'body'],
      variants: {
        primary: {
          dialog: {
            background: 'blue.900',
          },
        },
      },
    },
  },
})
