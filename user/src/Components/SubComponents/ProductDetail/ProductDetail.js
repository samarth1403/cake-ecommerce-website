import React from "react";
import { useLocation } from "react-router-dom";
import HoriLine from "../../ReusableComponents/HoriLine";
import ShoppingList from "../Shopping/ShoppingList";
import Reviews from "./Reviews";
import SingleProductDetails from "./SingleProductDetails";


const ProductDetail = () => {

  
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <SingleProductDetails />
      <HoriLine/>
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] text-4xl">
        You may also Like
      </p>
      <ShoppingList />
      <HoriLine/>
      <Reviews />
    </div>
  );
};

export default ProductDetail;

