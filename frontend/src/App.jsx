import { Button, Container, Stack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '@/components/Navbar'


const App = () => {

  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}>
      </Container>
    </Stack>
  )
}

export default App
