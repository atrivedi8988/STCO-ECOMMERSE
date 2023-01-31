import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const category = [
  {
    name: "ELECTRONICS",
    route: "/electronics",
  },
  {
    name: "JEWELERY",
    route: "/jewelery",
  },
  {
    name: "MEN CLOTHES",
    route: "/men's clothing",
  },
  {
    name: "WOMEN CLOTHES",
    route: "women's clothing",
  },
];
function NavbarTitle() {
  return (
    <HStack
      width={"100vw"}
      height="40px"
      bgColor={"rgb(0 51 128)"}
      color="white"
      fontWeight={"500"}
      pl="40px"
      justifyContent="flex-start"
      alignItems={"center"}
      gap="50px"
    >
      {category.map((el,i) => {
        return (
          <Text key={i}>
            <Link to={"/"}>{el.name}</Link>
          </Text>
        );
      })}
    </HStack>
  );
}

export default NavbarTitle;
