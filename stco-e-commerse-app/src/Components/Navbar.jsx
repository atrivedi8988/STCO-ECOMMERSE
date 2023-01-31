import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

// React icons
import { BsCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        border={"1px solid red"}
        width="100vw"
        height={"100px"}
        bgColor="red.600"
        color={"white"}
        fontWeight="500"
        p={"0px 20px 0px 20px"}
      >
        <Box></Box>
        {/* // Store, contatct-us and buyingGuide */}
        <HStack justifyContent={"flex-end"} alignItems="center">
          <MdLocationOn /> <Text> Find a store |</Text>
          <Text>Buying Guides |</Text>
          <Text>Contact us</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
        >
          {/* // Logo of the Website */}
          <Box onClick={()=>navigate("/")} border={"3px solid white"} p="10px">
            <Heading>E-COMMERSE</Heading>
          </Box>

          {/* // Searching Input Box */}
          <Box width={"40%"}>
            <Input
              type={"text"}
              placeholder="Find your favourite products"
              bgColor="whiteAlpha.900"
              borderRadius={"50px"}
            />
          </Box>

          {/* // Pincode, Login and Cart button */}

          <HStack justifyContent={"center"} alignItems="center">
            <Text>Select your PIN Code |</Text>
            <BsCartFill />
            <Text onClick={()=>navigate("/cart")}>Cart |</Text>
            <CgProfile />
            <Text>Login</Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
