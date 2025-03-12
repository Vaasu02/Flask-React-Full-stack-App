import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";
import CreateUserModal from "./CreateUserModal";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navBg = colorMode === "light" ? "gray.200" : "gray.700";

	return (
		<Container maxW={"900px"}>
			<Box px={4} my={4} borderRadius={5} bg={navBg}>
				<Flex h='16' alignItems={"center"} justifyContent={"space-between"}>
					{/* Left side */}
					<Flex
						alignItems={"center"}
						justifyContent={"center"}
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
						<img src='/react.png' alt='React logo' width={50} height={50} />
						<Text fontSize={"40px"}>+</Text>
						<img src='/python.png' alt='Python logo' width={50} height={40} />
						<Text fontSize={"40px"}>=</Text>

						<img src='/explode.png' alt='Explode head' width={45} height={45} />
					</Flex>
					{/* Right side */}
					<Flex gap={3} alignItems={"center"}>
						<Text fontSize={"lg"} fontWeight={500} display={{ base: "none", md: "block" }}>
							BFFship 🔥
						</Text>

						<Button onClick={toggleColorMode} variant="ghost" size="md">
							{colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
						</Button>
						<CreateUserModal />
						
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
};

export default Navbar;