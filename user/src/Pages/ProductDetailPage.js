import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import HoriLine from '../Components/ReusableComponents/HoriLine';
const ProductDetailPage = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>
      <Outlet />
      <HoriLine/>
    </div>
  );
}

export default ProductDetailPage