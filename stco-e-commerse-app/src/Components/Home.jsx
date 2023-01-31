import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { productsAction } from "../Store/products/product.action";
import ProductCard from "./ProductCard";



const Home = () => {
  const dispatch = useDispatch()
  const {loading,error,data} = useSelector(store=>store.product)
  useEffect(()=>{
    dispatch(productsAction())
  },[])
 return (
    <>
    {loading&&<Text>...loading</Text>}
    {error&&<Text>...error</Text>}
    {
        data?.map((el,i)=>{
            return <ProductCard data={{...el}} key={i} />
        })
    }
    </>
 )
};

export default Home;
