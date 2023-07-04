import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CakeTypesItem from './CakeTypesItem'
const CakeTypesList = () => {

  const [typeArray , setTypeArray] = useState()

   const {prodCategories} = useSelector((state)=>state.product)
    
   useEffect(() => {
     let arr = [];
     for (let index = 0; index < 10; index++) {
       let element = prodCategories[index];
       arr.push(element?.subCategoryName);
     }
     setTypeArray(arr);
   }, []);

    const renderedCakeTypesList =
      typeArray &&
      typeArray?.map((category, index) => {
        return (
          <CakeTypesItem key={index} cakeType={category} />
        );
      });
  return (
    <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center mx-16 pl-24 pr-16 py-4 my-4">
    {renderedCakeTypesList}
    </div>
  );
}

export default CakeTypesList
