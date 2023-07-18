import React from "react";
import ButtonRYG from "../../ReusableComponents/ButtonRYG";
import ReactStars from "react-rating-stars-component";
import { AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../features/product/productSlice";
import { ScrollToTop } from "../../ReusableComponents/ScrollToTop";
import { toast } from "react-toastify";

const PopularProduct = ({ shoppingItem }) => {
    const { Token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToWishlist = (prodId) => {
    toast.success("Cake added to your Wishlist");
    dispatch(addToWishlist({ prodId: prodId, Token: Token }));
  };
  return (
    <div
      className="relative flex flex-col flex-no-wrap flex-shrink-0 justify-start items-center w-[240px] sm: h-auto rounded-[15px] mx-8 mb-16 mt-4"
      style={{
        background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
      }}
    >
      <Link
        to={`/product-details/${shoppingItem._id}`}
        onClick={() => ScrollToTop()}
      >
        <img
          src={shoppingItem?.images[0]?.url}
          alt="Shopping Item"
          className="w-[240px] h-[240px] rounded-t-[15px] mb-2"
        />
      </Link>

      <div className="flex flex-col flex-no-wrap">
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
          {shoppingItem.title}
        </p>
        {/* <div className="flex flex-row flex-no-wrap justify-between px-2 pt-3 pb-6">
          <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
            Add to Cart
          </ButtonRYG>
          <ButtonRYG className="px-4 ml-4 py-2 rounded-[12px] ">
            Buy Now
          </ButtonRYG>
        </div> */}
      </div>
      <div className="flex flex-row flex-no-wrap justify-between items-center">
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 m-2">
          Rs.{shoppingItem.price}/-
        </p>
        <ReactStars
          classNames="m-2"
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
          className="absolute top-4 right-4 "
          onClick={() => handleAddToWishlist(shoppingItem._id)}
        >
          <AiFillHeart className="text-3xl text-[#FF0000]" />
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
