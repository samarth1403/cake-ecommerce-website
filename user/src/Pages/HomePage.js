import React, { useEffect, useState } from "react";
import Hero from '../Components/SubComponents/Hero/Hero';
import ShoppingList from '../Components/SubComponents/Shopping/ShoppingList';
import SweetTalk from '../Components/SubComponents/SweetTalk/SweetTalk';
import SocialPage from '../Components/SubComponents/SocialPage/SocialPage';
import CakeMarquee from '../Components/SubComponents/CakeMarquee/CakeMarquee';
import HelmetMeta from '../Components/ReusableComponents/HelmetMeta';
import PopularProductList from '../Components/SubComponents/PopularProducts/PopularProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOccasions } from '../features/occasions/occasionSlice';
import { getAllprodCategories, getAllProducts } from "../features/product/productSlice";
import { getCart, getWishlistOfUser } from "../features/user/userSlice";
import HoriLine from "../Components/ReusableComponents/HoriLine";

const HomePage = () => {

  const dispatch = useDispatch();
  const {Token} = useSelector((state)=>state.user)
  const { products } = useSelector((state) => state.product);
  const { occasions } = useSelector((state) => state.occasion);

    const [imgArray, setImgArray] = useState([]);
    useEffect(() => {
    dispatch(getAllOccasions())
    dispatch(getAllProducts())
    dispatch(getAllprodCategories())
    
    if(Token !== undefined){
      console.log(Token);
      dispatch(getCart({ Token: Token }));
      dispatch(getWishlistOfUser({Token:Token}))
    }
  }, []);

    useEffect(() => {
      let images = [];
      for (let index = 0; index < products?.length; index++) {
        const element = products[index];
        images.push(element?.images[0]?.url);
      }
      setImgArray(images);
    
    }, [products,occasions]);
  
  return (
    <>
      <HelmetMeta title={"Cake Website - Home"} />
      <Hero images={imgArray} />
      <HoriLine />
      <PopularProductList />
      <CakeMarquee />
      {/* <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
      <ShoppingList /> */}
      <HoriLine />
      <SweetTalk />
      <SocialPage />
      <HoriLine />
    </>
  );
}

export default HomePage