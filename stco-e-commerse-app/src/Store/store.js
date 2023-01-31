import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { categoryProductsReducer, productsReducer, singleProductsReducer } from "./products/product.reducer"



const rootReducer = combineReducers({
    product:productsReducer,
    singleProduct:singleProductsReducer,
    categoryproduct:categoryProductsReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
