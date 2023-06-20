'use client'

import ContactCards from '@/components/ContactCards'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({ 
  colors: {
    instagramGradient: 'linear-gradient(to top right, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)',
  }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}> 
      <ContactCards/>
    </ChakraProvider>
  )
}