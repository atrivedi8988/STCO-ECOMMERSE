import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { productsReducer, singleProductsReducer } from "./products/product.reducer"



const rootReducer = combineReducers({
    product:productsReducer,
    singleProduct:singleProductsReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
