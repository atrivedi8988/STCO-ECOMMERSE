import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CheckoutCard from './CheckoutCard'

function CheckoutPage() {
    let cartArray = JSON.parse(localStorage.getItem("cart"))
  return (
    <VStack alignItems={"flex-start"} gap={"30px"} p="30px" mt="30px" mb={"500px"}>
    {
        cartArray?.map((el)=>{
            return <CheckoutCard data={{...el}}/>
        })
    }
    </VStack>
  )
}

export default CheckoutPage