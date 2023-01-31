import { Box } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";

function Cart() {
  let cartArray = JSON.parse(localStorage.getItem("cart"))
  return <Box height={"500px"}>{
    cartArray?.map((el)=>{
        return <CartCard data={{...el}}/>
    })
  }</Box>;
}

export default Cart;
