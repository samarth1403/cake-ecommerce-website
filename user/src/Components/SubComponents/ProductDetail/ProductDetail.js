import React from "react";
import { useLocation } from "react-router-dom";
import ShoppingList from "../Shopping/ShoppingList";
import Reviews from "./Reviews";
import SingleProductDetails from "./SingleProductDetails";


const ProductDetail = () => {

  
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <SingleProductDetails />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] text-4xl m-2">
        You may also Like
      </p>
      <ShoppingList />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
      <Reviews />
    </div>
  );
};

export default ProductDetail;

