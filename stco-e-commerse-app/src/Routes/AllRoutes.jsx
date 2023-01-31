import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/cart/Cart'
import CheckoutPage from '../Components/checkout/CheckoutPage'
import Home from '../Components/Home'
import Order from '../Components/Order'
import ProductDetail from '../Components/ProductDetail'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detailpage/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/order' element={<Order/>} />
    </Routes>
  )
}

export default AllRoutes