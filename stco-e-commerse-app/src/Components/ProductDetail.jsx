import React from "react";
import {
  Card,
  CardHeader,
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
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { singleProductsAction } from "../Store/products/product.action";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, singleData } = useSelector(
    (store) => store.singleProduct
  );
  useEffect(() => {
    dispatch(singleProductsAction(id));
  }, []);
  return (
    <Card maxW="xl" margin={"auto"}>
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
              {singleData.rating.rate} 🟌
            </Box>
            &nbsp;&nbsp;{singleData.rating.count} Rating
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
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductDetail;
