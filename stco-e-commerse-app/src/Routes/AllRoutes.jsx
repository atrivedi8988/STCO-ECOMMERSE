import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Home from '../Components/Home'
import ProductDetail from '../Components/ProductDetail'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detailpage/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Cart/>} />
    </Routes>
  )
}

export default AllRoutes