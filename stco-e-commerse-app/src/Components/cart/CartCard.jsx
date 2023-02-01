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
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProductsAction } from "../../Store/products/product.action";
function CartCard({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const store = useSelector(store=>store.product)
  
  const handleChange = (e,id)=>{
    
  }
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
          <Text fontSize={"2xl"} fontWeight="600" py="2">
            ₹ {data.price}
          </Text>
          <Text py="2">{data.description}</Text>
          <Text py="2">{data.category}</Text>
          <Select onChange={(e)=>handleChange(e,data.id)} placeholder="Select option" size={"sm"}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default CartCard;
