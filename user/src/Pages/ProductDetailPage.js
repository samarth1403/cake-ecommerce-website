import React from 'react'
import { Outlet } from 'react-router-dom'
const ProductDetailPage = () => {
  return (
    <>
      <Outlet />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
    </>
  );
}

export default ProductDetailPage