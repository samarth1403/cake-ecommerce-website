import React from 'react'
import ButtonRYG from "../../ReusableComponents/ButtonRYG";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {addToWishlist} from '../../../features/product/productSlice'
import { getWishlistOfUser } from "../../../features/user/userSlice";
import { toast } from 'react-toastify';
import { ScrollToTop } from '../../ReusableComponents/ScrollToTop';
const WishListItem = ({ wishlistItem }) => {

  const dispatch = useDispatch()
  const { Token } = useSelector((state) => state.user);
  const { res } = useSelector((state) => state.product);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist({prodId:id, Token:Token}));
    toast.success("Removed From Your Wishlist");
    setTimeout(() => {
      if(Token !== undefined){
        dispatch(getWishlistOfUser({ Token: Token }));
      }
    }, 100);
  }
  return (
    <div
      className="relative flex flex-col flex-no-wrap flex-shrink-0 justify-start items-center w-[260px] h-auto rounded-[33px] mb-16 mt-4"
      style={{
        background: "linear-gradient(180deg, #FAFAFA 46.2%, #101567 100%)",
      }}
    >
      <button
        onClick={() => removeFromWishlist(wishlistItem._id)}
        className="btn-close absolute top-4 right-4"
      >
        <AiFillCloseCircle className="text-4xl text-red-500" />
      </button>
      <Link to={`/product-details/${wishlistItem._id}`} onClick={()=>ScrollToTop()}>
        <img
          src={wishlistItem?.images[0]?.url}
          alt="Shopping Item"
          className="w-[260px] h-[260px] rounded-t-[33px] mb-2"
        />
      </Link>

      <div className="flex flex-col flex-no-wrap">
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
          {wishlistItem.title}
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 m-1">
          Rs.{wishlistItem.price}/-
        </p>
        <div className="mx-2">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={wishlistItem.totalRating}
            size={24}
            isHalf={true}
            edit={false}
            a11y={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ECD400"
          />
        </div>
        <div className="flex flex-row flex-no-wrap justify-between px-2 pt-3 pb-6">
          <Link to={`/product-details/${wishlistItem?._id}`} onClick={()=>ScrollToTop()}>
            <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
              Add to Cart
            </ButtonRYG>
          </Link>
          <Link to={`/product-details/${wishlistItem?._id}`} onClick={()=>ScrollToTop()}>
            <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
              Buy Now
            </ButtonRYG>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListItem