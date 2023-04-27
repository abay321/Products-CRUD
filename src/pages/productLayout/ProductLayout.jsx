import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductNavigate from '../../components/ProductNavigate/ProductNavigate'

function ProductLayout() {
  return (
    <>
    {/* <ProductNavigate /> */}
    <Outlet />
    </>
  )
}

export default ProductLayout