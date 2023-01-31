import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bgColor={"blackAlpha.500"}
      justifyContent="space-between"
      p={"20px"}
      height="200px"
      width={"100%"}
    >
      <VStack justifyContent="center" alignItems={"center"}>
        <Heading size={"md"}>DOWNLOAD OUR APP</Heading>
        <Text textAlign={"center"}>
          Download App for Android and <br /> IOS mobile phone
        </Text>
      </VStack>

      <VStack justifyContent="center" alignItems={"center"}>
        <Heading size={"2xl"}>ECOMMERCE.</Heading>
        <Text>High Quality is our first priority</Text>

        <Text>Copyrights 2021 &copy; MeAbhiSingh</Text>
      </VStack>

      <VStack justifyContent="center" alignItems={"center"}>
        <Heading size={"md"}>Follow Us</Heading>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com">Facebook</a>
      </VStack>
    </Flex>
  );
};

export default Footer;
