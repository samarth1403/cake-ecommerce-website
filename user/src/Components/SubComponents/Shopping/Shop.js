import React from "react";
import Dropdown from "../../ReusableComponents/Dropdown";

const Shop = () => {
  const cakesByType = [
    "All Cakes",
    "Best Seller Cakes",
    "Photo Cakes",
    "Pinata Cakes",
    "Heart Shape Cakes",
    "Kids Cakes",
    "Premium Cakes",
    "Fondant Cakes",
    "Eggless Cakes",
    "Midnight Cakes",
    "CupCakes",
    "Half Cake",
    "Pastry",
  ];

  const cakesByFlavour = [
    "Truffle Cakes",
    "Chocolate Cakes",
    "Rasmalai Cakes",
    "Red Velvet Cakes",
    "Black Forest Cakes",
    "Butter Scotch Cakes",
    "Pineapple Cakes",
    "Vanilla Cakes",
    "Strawberry Cakes",
    "Fruit Cakes",
  ];

  const themeCakes = [
    " Superhero Cakes",
    "Designer Cakes",
    "Alphabet Cakes",
    "Number Cakes",
    "Car Cakes",
    "Cartoon Cakes",
    "Unicorn Cakes",
    "Barbie Doll Cakes",
    "Wedding Cakes",
    "Tier Cakes",
  ];

  const cakesByOccasion = [
    " Birthday Cakes",
    "Anniversary Cakes",
    "First Birthday Cakes",
    "First Anniversary Cakes",
    "25th Anniversary Cakes",
  ];
  // const renderedShopByCategoryList = shopByCategoryList.map((shopByCategoryItem) => {
  //     return <Dropdown key={shopByCategoryItem} shopByCategoryItem={shopByCategoryItem}/>;
  //   })
  return (
    <div className="flex flex-row flex-wrap justify-center items-center m-8">
      <Dropdown shopByCategoryItem="Cakes by Type" list={cakesByFlavour} />
      <Dropdown shopByCategoryItem="Cakes by Flavour" list={cakesByFlavour} />
      <Dropdown shopByCategoryItem="Theme Cakes" list={themeCakes}/>
      <Dropdown shopByCategoryItem="Cakes by Occasion" list={cakesByOccasion}/>
    </div>
  );
};

export default Shop;
