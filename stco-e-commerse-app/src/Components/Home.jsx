import {
  Box,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productCategoryAction, productsAction } from "../Store/products/product.action";
import ProductCard from "./ProductCard";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { loading, error, data } = useSelector((store) => store.product);
  let { cateData } = useSelector((store) => store.categoryproduct);
  let product = []

  const handleRadio = (e) => {
    dispatch(productCategoryAction(e.target.value));
  }
  useEffect(() => {
      dispatch(productsAction());
  }, []);

  if(cateData.length!==0){
    data = cateData
  }

  return (
    <>
      {loading && <Heading>...loading</Heading>}
      {error && <Text>...error</Text>}
      <HStack
        justifyContent={"space-between"}
        alignItems="flex-start"
        gap={"40px"}
      >
        <Stack marginTop={"20px"} gap={"20px"} p="30px" borderRadius={"10px"}>
          {data?.map((el, i) => {
            return <ProductCard data={{ ...el }} key={i} />;
          })}
        </Stack>
        <Box>
          <VStack
            justifyContent={"flex-start"}
            alignItems="flex-start"
            height="100%"
            marginTop={"50px"}
            width="200px"
          >
            <Heading fontSize={"lg"}>Filter By Category</Heading>
            <RadioGroup>
              <Radio
                mt={"30px"}
                size="lg"
                name="1"
                value={"women's clothing"}
                colorScheme="green"
                onChange={handleRadio}
              >
                WOMEN'S CLOTHING
              </Radio>
              <Radio
                mt={"30px"}
                size="lg"
                name="2"
                value={"men's clothing"}
                colorScheme="green"
                onChange={handleRadio}
              >
                MEN'S CLOTHING
              </Radio>
              <Radio
                mt={"30px"}
                size="lg"
                name="3"
                value={"jewelery"}
                colorScheme="green"
                onChange={handleRadio}
              >
                JEWELERY
              </Radio>
              <Radio
                mt={"30px"}
                size="lg"
                name="4"
                value={"electronics"}
                colorScheme="green"
                onChange={handleRadio}
              >
                ELECTRONICS
              </Radio>
            </RadioGroup>
          </VStack>
        </Box>
      </HStack>
    </>
  );
};

export default Home;
