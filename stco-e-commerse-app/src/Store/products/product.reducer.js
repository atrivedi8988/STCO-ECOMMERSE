import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCTS_ERROR, GET_SINGLE_PRODUCTS_LOADING, GET_SINGLE_PRODUCTS_SUCCESS } from "./product.task";


// Reducer inital data 

let initState = {
    loading: false,
    error: false,
    data: [],
    singleData:{}
  };


  // All Product Reducer 

  export const productsReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_PRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_PRODUCTS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_PRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
  
      default: {
        return state;
      }
    }
  };


  // Single Product Reducer

  export const singleProductsReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_SINGLE_PRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_SINGLE_PRODUCTS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_SINGLE_PRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          singleData: payload,
        };
      }
  
      default: {
        return state;
      }
    }
  };