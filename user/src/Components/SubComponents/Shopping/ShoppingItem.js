import React from "react";
import ButtonRYG from '../../ReusableComponents/ButtonRYG';
import ReactStars from "react-rating-stars-component";
import { AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getProduct } from "../../../features/product/productSlice";
import {toast} from "react-toastify";
import { ScrollToTop } from "../../ReusableComponents/ScrollToTop";

const ShoppingItem = ({ shoppingItem }) => {
  const {Token} = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleAddToWishlist = (prodId) => {
     toast.success("Cake added to your Wishlist");
     dispatch(addToWishlist({prodId:prodId,Token:Token}));
  }
  const handleClick = (id) => {
    navigate(`/product-details/${shoppingItem._id}`);
    dispatch(getProduct(id));
  }


  return (
    <div className="px-6">
      <div
        className="relative flex flex-col flex-no-wrap flex-shrink-0 justify-start items-center w-[260px] h-auto rounded-[33px] mb-16 mt-4"
        style={{
          background: "linear-gradient(180deg, #FAFAFA 46.2%, #101567 100%)",
        }}
      >
        <img
          onClick={() => {
            handleClick(shoppingItem?._id);
            ScrollToTop();
          }}
          src={shoppingItem?.images[0]?.url}
          alt="Shopping Item"
          className="w-[260px] h-[260px] rounded-t-[33px] mb-2 cursor-pointer"
        />
        <div className="flex flex-col flex-no-wrap">
          <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
            {shoppingItem?.title}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 m-1">
            Rs.{shoppingItem?.price}/-
          </p>
          <div className="flex flex-row flex-no-wrap justify-between items-center mx-2">
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={shoppingItem?.totalRating}
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
              onClick={() => handleAddToWishlist(shoppingItem?._id)}
            >
              <AiFillHeart className="text-3xl text-[#FF0000]" />
            </button>
          </div>
          <div className="flex flex-row flex-no-wrap justify-between px-2 pt-3 pb-6">
            <Link
              to={`/product-details/${shoppingItem?._id}`}
              onClick={() => ScrollToTop()}
            >
              <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
                Add to Cart
              </ButtonRYG>
            </Link>
            <Link
              to={`/product-details/${shoppingItem?._id}`}
              onClick={() => ScrollToTop()}
            >
              <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
                Buy Now
              </ButtonRYG>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
