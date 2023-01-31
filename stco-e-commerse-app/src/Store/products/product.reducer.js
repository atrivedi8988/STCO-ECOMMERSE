import { GET_CATE_PRODUCTS_ERROR, GET_CATE_PRODUCTS_LOADING, GET_CATE_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCTS_ERROR, GET_SINGLE_PRODUCTS_LOADING, GET_SINGLE_PRODUCTS_SUCCESS } from "./product.task";


// Reducer inital data 

let initState = {
    loading: false,
    error: false,
    data: [],
    singleData:{},
    cateData :[]
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

  // product category by action

  
  export const categoryProductsReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_CATE_PRODUCTS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_CATE_PRODUCTS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_CATE_PRODUCTS_SUCCESS: {
        console.log(payload)
        return {
          ...state,
          loading: false,
          error: false,
          cateData: payload,
        };
      }
  
      default: {
        return state;
      }
    }
  };