import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS } from "./cart.task";




export const cartAction = (data)=> async(dispatch)=>{
    dispatch({type: GET_CART_LOADING});
    try{
        dispatch({type:GET_CART_SUCCESS,payload: data})
        return data
    }catch(e){
        dispatch({type:GET_CART_ERROR})
    }
}