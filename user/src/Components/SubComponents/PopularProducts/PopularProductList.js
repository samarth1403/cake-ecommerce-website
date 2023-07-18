import React, { useEffect } from "react";

import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import ShoppingItem from "../Shopping/ShoppingItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/product/productSlice";
import PopularProduct from "./PopularProduct";

const PopularProductList = () => {

  const { products } = useSelector((state) => {
    return state.product;
  });

  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] min-[320px]:text-3xl sm:text-4xl ">
        Our Popular Products
      </p>
      <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center min-[320px]:px-2 sm:px-16 pt-16">
        {products?.map((shoppingItem, index) => {
          return (
            shoppingItem.tags === "popular" && (
              <PopularProduct
                key={shoppingItem?._id}
                shoppingItem={shoppingItem}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default PopularProductList;
