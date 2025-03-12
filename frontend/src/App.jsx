import {Container, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '@/components/Navbar'
import UserGrid from '@/components/UserGrid';

const App = () => {

  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}>
				<Text
					fontSize={{ base: "3xl", md: "5xl" }}
					fontWeight={"bold"}
					letterSpacing={"2px"}
					textTransform={"uppercase"}
					textAlign={"center"}
					mb={8}
				>
					<Text as={"span"}>
						My Besties
					</Text>
					🚀
			  </Text>

        <UserGrid />

			</Container>
      
    </Stack>
  )
}

export default App
