import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import WishListItem from "./WishListItem";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistOfUser } from "../../../features/user/userSlice";

const WishList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlist()
  }, []);

  const getWishlist = () => {
    dispatch(getWishlistOfUser());
  };


  const { gotWishlistOfUser } = useSelector((state) => {
    return state.user;
  });

  const renderedWishList = gotWishlistOfUser?.wishList?.map((wishlistItem) => {
    return (
      <div key={wishlistItem?._id}>
        <WishListItem wishlistItem={wishlistItem} />
      </div>
    );
  });
  return (
    <>
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] f text-5xl m-4">
        {gotWishlistOfUser?.wishList?.length === 0 ? "No Data" : "Your WishList"}
      </p>
      <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center p-6">
        {renderedWishList}
      </div>
    </>
  );
};

export default WishList;
