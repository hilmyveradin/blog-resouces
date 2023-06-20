'use client'

import ContactCards from '@/components/ContactCards'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider> 
      <ContactCards/>
    </ChakraProvider>
  )
}

