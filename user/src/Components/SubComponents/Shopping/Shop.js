import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllprodCategories } from "../../../features/product/productSlice";
import Dropdown from "../../ReusableComponents/Dropdown";

const Shop = () => {

  const { products, prodCategories } = useSelector((state) => state.product);
  const dispatch = useDispatch()

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    dispatch(getAllprodCategories())
  },[])

  useEffect(() => {
    let category = [];
    for (let index = 0; index < prodCategories?.length; index++) {
      const element = prodCategories[index];
      category.push(element.categoryName);
    }
    setCategories(category);
  }, [prodCategories]);



  // const renderedShopByCategoryList = shopByCategoryList.map((shopByCategoryItem) => {
  //     return <Dropdown key={shopByCategoryItem} shopByCategoryItem={shopByCategoryItem}/>;
  //   })

  
  return (
    <div className="flex flex-row flex-wrap justify-center items-center px-8 pb-4">
      {categories &&
        [...new Set(categories)]?.map((category) => {
          return (
            <Dropdown shopByCategoryItem={category} category={category}/>
          );
        })}

      {/* <Dropdown shopByCategoryItem="Cakes by Flavour" list={cakesByFlavour} />
      <Dropdown shopByCategoryItem="Theme Cakes" list={themeCakes} />
      <Dropdown shopByCategoryItem="Cakes by Occasion" list={cakesByOccasion} /> */}
    </div>
  );
};

export default Shop;
