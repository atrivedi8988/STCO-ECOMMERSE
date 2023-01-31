import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const date = Date();
  const navigate = useNavigate()
  return (
    <VStack
      justifyContent={"center"}
      gap={"5px"}
      mt={"100px"}
      textAlign="center"
      mb={"180px"}
    >
      <Heading>Your Order is successfully confirmed</Heading>
      <Text>Order Date is {date}</Text>
      <Button width={"10%"} onClick={()=>{
        navigate("/")
      }}>
        Go to shop
      </Button>
    </VStack>
  );
}

export default Order;
