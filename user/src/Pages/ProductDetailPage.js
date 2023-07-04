import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
const ProductDetailPage = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>
      <Outlet />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
    </div>
  );
}

export default ProductDetailPage