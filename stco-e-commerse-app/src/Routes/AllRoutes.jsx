import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import ProductDetail from '../Components/ProductDetail'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detailpage/:id' element={<ProductDetail/>} />
    </Routes>
  )
}

export default AllRoutes