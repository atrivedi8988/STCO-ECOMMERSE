import React from "react";
import playStore from "../images/playstore.png";
import appStore from "../images/Appstore.png";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex border={"1px solid red"} justifyContent="space-between" p={"20px"}>
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
