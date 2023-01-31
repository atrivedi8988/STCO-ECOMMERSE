import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { singleProductsAction } from "../Store/products/product.action";

function ProductDetail() {
    let cartArray = JSON.parse(localStorage.getItem("cart"))||[]
    const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, singleData } = useSelector(
    (store) => store.singleProduct
  );
  const {rate,count} = singleData.rating || ""
  useEffect(() => {
    dispatch(singleProductsAction(id));
  }, [id]);
  return (
    <Card maxW="xl" margin={"auto"} mb="300px">
      <CardBody>
        <Image
          src={singleData.image}
          alt={singleData.title}
          borderRadius="lg"
          width={"15rem"}
          margin="auto"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{singleData.title}</Heading>
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
              {rate} 🟌
            </Box>
            &nbsp;&nbsp;{count} Rating
          </Box>
          <Text>{singleData.description}</Text>
          <Text>{singleData.category}</Text>
          <Text color="blue.600" fontSize="2xl">
            {singleData.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={()=>navigate("/checkout")} variant="ghost" colorScheme="blue">
            Checkout Page
          </Button>
          <Button onClick={()=>{
            cartArray.push(singleData)
            localStorage.setItem("cart",JSON.stringify(cartArray));
            alert("added to the cart")
          }} variant="solid" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductDetail;
