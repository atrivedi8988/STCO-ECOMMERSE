import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCTS_ERROR, GET_SINGLE_PRODUCTS_LOADING, GET_SINGLE_PRODUCTS_SUCCESS } from "./product.task";
import axios from "axios"



// All Product Actions

export const productsAction = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_LOADING});
    try{
        let res = await axios.get("https://fakestoreapi.com/products")
        dispatch({type:GET_PRODUCTS_SUCCESS,payload: res.data})

        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}



// Single Product Actions

export const singleProductsAction = (id)=> async(dispatch)=>{
    dispatch({type: GET_SINGLE_PRODUCTS_LOADING});
    try{
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch({type:GET_SINGLE_PRODUCTS_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_SINGLE_PRODUCTS_ERROR})
    }
}