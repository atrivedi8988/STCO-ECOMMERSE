import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Cart() {
  const { loading, error, data } = useSelector((store) => store.cart);
  return <>{
    data?.map((el)=>{
        return <ProductCard data={{...el}}/>
    })
  }</>;
}

export default Cart;
