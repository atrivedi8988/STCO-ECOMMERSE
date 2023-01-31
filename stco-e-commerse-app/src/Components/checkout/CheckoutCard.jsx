import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Button,
    Text,
    Heading,
    Box,
    ButtonGroup,
    HStack,
    Flex,
  } from "@chakra-ui/react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CheckoutCard({data}) {
  const navigate = useNavigate()
    const [quant,setQuant] = useState(1)
    let cartArray = JSON.parse(localStorage.getItem("cart"))
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={data.image}
        alt={data.title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{data.title}</Heading>
          <Box color={"gray"}>
            <Box
              fontSize={"12px"}
              color={"white"}
              fontWeight="600"
              width={"40px"}
              p="3px"
              borderRadius={"50px"}
              bgColor={"green"}
              display="inline-block"
            >
              {data.rating.rate} 🟌
            </Box>
              &nbsp;&nbsp;{data.rating.count} Rating
          </Box>
          <Text fontSize={"2xl"} fontWeight="600" py="2">₹ {data.price}</Text>
          <Text py="2">{data.description}</Text>
          <Text py="2">{data.category}</Text>
          <Flex direction={"row"} gap={"10px"}>
            <Button disabled={quant===1} onClick={()=>setQuant(prev=>prev-1)} >-</Button>
            <Button>{quant}</Button>
            <Button onClick={()=>setQuant(prev=>prev+1)}>+</Button>
          </Flex>
        </CardBody>

        <CardFooter gap={"30px"}>
          <Button variant="ghost" colorScheme="blue" onClick={()=>{
              cartArray = cartArray.filter((el)=>el.id!==data.id)
              localStorage.setItem("cart",JSON.stringify(cartArray));
              alert("remove from the cart")
              window.location.reload()
          }}>
            Remove Cart
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={()=>{
            navigate("/order")
            localStorage.removeItem("cart")
          }}>
           Make Payemet
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default CheckoutCard