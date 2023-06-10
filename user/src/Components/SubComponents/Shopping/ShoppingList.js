import React from "react";
import { Link } from "react-router-dom";
import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = () => {
  const shoppingList = [
    {
      cakeImage: Anniversary,
      cakeName: "Dairy Milk Delicious",
      cakePrice: "500",
      cakeRating: "5",
    },
    {
      cakeImage: Birthday,
      cakeName: "Dairy Milk Delicious",
      cakePrice: "600",
      cakeRating: "4",
    },
    {
      cakeImage: Cake,
      cakeName: "Dairy Milk Delicious",
      cakePrice: "700",
      cakeRating: "3",
    },
    {
      cakeImage: Anniversary,
      cakeName: "Dairy Milk Delicious",
      cakePrice: "500",
      cakeRating: "5",
    },
    {
      cakeImage: Birthday,
      cakeName: "Dairy Milk Delicious",
      cakePrice: "600",
      cakeRating: "4",
    },
    {
      cakeImage: Cake,
      cakeName: "Dairy Milk Delicious",
      cakePrice: "700",
      cakeRating: "3",
    },
  ];

  const renderedShoppingList = shoppingList.map((shoppingItem) => {
    return (
      <Link to="/product-details/id:" key={shoppingItem.cakeImage}>
        <ShoppingItem
          shoppingItem={shoppingItem}
        />
      </Link>
    );
  });
  return (
    <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center p-6">
      {renderedShoppingList}
    </div>
  );
};

export default ShoppingList;
