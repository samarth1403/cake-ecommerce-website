import React, { useEffect } from "react";

import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import ShoppingItem from "./ShoppingItem";
import {useDispatch, useSelector} from "react-redux";
import { getAllProducts } from "../../../features/product/productSlice";

const ShoppingList = () => {

  const dispatch = useDispatch();
  const {products} = useSelector((state)=>{return state.product})

  useEffect(()=>{
    getProducts();
  },[])

  const getProducts = () => {
    dispatch(getAllProducts());
  }

  // const shoppingList = [
  //   {
  //     cakeImage: Anniversary,
  //     cakeName: "Dairy Milk Delicious",
  //     cakePrice: "500",
  //     cakeRating: "5",
  //   },
  //   {
  //     cakeImage: Birthday,
  //     cakeName: "Dairy Milk Delicious",
  //     cakePrice: "600",
  //     cakeRating: "4",
  //   },
  //   {
  //     cakeImage: Cake,
  //     cakeName: "Dairy Milk Delicious",
  //     cakePrice: "700",
  //     cakeRating: "3",
  //   },
  //   {
  //     cakeImage: Anniversary,
  //     cakeName: "Dairy Milk Delicious",
  //     cakePrice: "500",
  //     cakeRating: "5",
  //   },
  //   {
  //     cakeImage: Birthday,
  //     cakeName: "Dairy Milk Delicious",
  //     cakePrice: "600",
  //     cakeRating: "4",
  //   },
  //   {
  //     cakeImage: Cake,
  //     cakeName: "Dairy Milk Delicious",
  //     cakePrice: "700",
  //     cakeRating: "3",
  //   },
  // ];

  const renderedShoppingList = products?.map((shoppingItem) => {
    return (
      <div key={shoppingItem._id}>
        <ShoppingItem shoppingItem={shoppingItem} />
      </div>
    );
  });
  return (
    <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center p-6">
      {renderedShoppingList}
    </div>
  );
};

export default ShoppingList;
