import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CakeTypesItem from "./CakeTypesItem";
const CakeTypesList = () => {
  const [typeArray, setTypeArray] = useState();

  const { prodCategories } = useSelector((state) => state.product);
  console.log(prodCategories);
  useEffect(() => {
    let arr = [];
    if (prodCategories?.length !== 0) {
      for (let index = 0; index < 8; index++) {
        if (prodCategories[index] === undefined) {
          let element =
            prodCategories[index]
          if (element !== undefined) {
            arr.push(element?.subCategoryName);
          }
        }
      }
    }
    setTypeArray(arr);
  }, [prodCategories]);
  console.log(typeArray);

  const renderedCakeTypesList = typeArray?.map((category, index) => {
    return <CakeTypesItem key={index} cakeType={category} />;
  });
  return (
    <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center min-[320px]:px-8 sm:px-16 sm:pl-24 sm:pr-16 py-4 my-4">
      {renderedCakeTypesList}
    </div>
  );
};

export default CakeTypesList;
