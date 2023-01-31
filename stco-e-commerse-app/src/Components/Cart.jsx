import React from "react";
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Cart({ data }) {
  const navigate = useNavigate()
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      onClick={()=>navigate(`/detailpage/${data.id}`)}
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
        </CardBody>
{/* 
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter> */}
      </Stack>
    </Card>
  );
}

export default Cart;
