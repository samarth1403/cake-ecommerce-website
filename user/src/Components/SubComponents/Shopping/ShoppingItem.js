import React from "react";
import ButtonRYG from '../../ReusableComponents/ButtonRYG';
import ReactStars from "react-rating-stars-component";
import {AiOutlineHeart} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist, getProduct } from "../../../features/product/productSlice";

const ShoppingItem = ({ shoppingItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleAddToWishlist = (prodId) => {
     dispatch(addToWishlist(prodId));
  }
  const handleClick = (id) => {
    navigate(`/product-details/${shoppingItem._id}`);
    dispatch(getProduct(id));
  }
  return (
    <div
      className="relative flex flex-col flex-no-wrap flex-shrink-0 justify-start items-center w-[310px] h-auto rounded-[33px] mx-8 mb-16 mt-4"
      style={{
        background: "linear-gradient(180deg, #FAFAFA 46.2%, #101567 100%)",
      }}
    >
      <img
        onClick={() => handleClick(shoppingItem._id)}
        src={shoppingItem?.images[0]?.url}
        alt="Shopping Item"
        className="w-[310px] h-[310px] rounded-t-[33px] mb-2 cursor-pointer"
      />
      <div className="flex flex-col flex-no-wrap">
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
          {shoppingItem.title}
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 m-1">
          Rs.{shoppingItem.price}/-
        </p>
        <div className="flex flex-row flex-no-wrap justify-between items-center mx-2">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={shoppingItem.totalRating}
            size={24}
            isHalf={true}
            edit={false}
            a11y={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ECD400"
          />
          <button
            className="absolute top-4 right-4"
            onClick={() => handleAddToWishlist(shoppingItem._id)}
          >
            <AiOutlineHeart className="text-4xl" />
          </button>
        </div>
        <div className="flex flex-row flex-no-wrap justify-between px-2 pt-3 pb-6">
          <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
            Add to Cart
          </ButtonRYG>
          <ButtonRYG className="px-4 ml-4 py-2 rounded-[12px] ">
            Buy Now
          </ButtonRYG>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
