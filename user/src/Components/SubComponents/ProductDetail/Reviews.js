import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import {toast} from "react-toastify"
import {useDispatch, useSelector} from "react-redux"
import { getProduct, rateAProduct } from '../../../features/product/productSlice';
import {useLocation} from "react-router-dom";
import HoriLine from '../../ReusableComponents/HoriLine';

const Reviews = () => {

  const [star , setStar] = useState(null);
  const [comment , setComment] = useState(null);
  const dispatch = useDispatch()
  const location = useLocation()
  const prodId = location.pathname.split("/")[2]
  
  const {gotProduct} = useSelector((state)=> state.product)
  const { Token } = useSelector((state) => state.user);

  const handleRateAProduct = () => {
    if(star === null){
      toast.error("Give the rating in stars");
      return false;
    }
    else if(comment === null){
      toast.error("Give the Comment")
      return false;
    }
    else {
      dispatch(rateAProduct({ body: { star, comment, prodId } , Token: Token}));
      setTimeout(()=>{
          dispatch(getProduct(prodId));
          setComment(null);
          setStar(null);
      },100)
    }

  }
    const renderedCustomerReviewList = gotProduct?.ratings?.map((productReview , index)=>{
        return (
          <div
            // style={{
            //   background:
            //     "linear-gradient(89.14deg, #FFFA84 0.66%, #FFFEDB 99.26%)",
            // }}
            className="bg-[#fff] min-[320px]:w-[280px] sm:w-[300px] h-auto flex flex-col flex-wrap justify-center items-start rounded-[20px] p-4"
            key={index}
          >
            <p className="font-roboto font-bold text-[#0D103C] text-lg p-2">
              {productReview?.postedBy?.firstName + " " +
                productReview?.postedBy?.lastName}
            </p>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={productReview?.star}
              size={28}
              isHalf={true}
              edit={false}
              a11y={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              //   activeColor="#0D103C"
              activeColor="#ffd700"
              classNames="px-2"
            />
            <p className="font-roboto font-medium text-[#0D103C] text-lg p-2">
              {productReview?.comment}
            </p>
          </div>
        );
    })


  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <p className="font-roboto font-bold text-[#FEE77A] text-3xl p-6 text-center">
          Write a Review
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <p className="font-roboto font-bold text-[#FEE77A] text-2xl p-4 text-center">
            Rating :
          </p>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={star}
            onChange={(e) => setStar(e)}
            size={36}
            isHalf={true}
            edit={true}
            a11y={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ECD400"
          />
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="font-roboto font-[400] text-xl rounded-[15px] bg-[#fff] min-[320px]:w-[280px] sm:w-[300px] lg:w-[400px] h-[150px] text-[#0D103C]
            text-start p-4  my-8 "
          id="comment"
          type="text"
          placeholder="Enter Your Comment"
        />
        <button
          onClick={handleRateAProduct}
          style={{
            background: "linear-gradient(180deg, #FFEFEF 0%, #E5FE49 100%)",
          }}
          className="w-[135px] h-[75px] font-roboto font-bold text-2xl text-[#0D103C] rounded-[20px]  px-4 p-4 my-4 align-left"
        >
          Submit
        </button>
        <HoriLine/>
        <p className="font-roboto font-bold text-[#FEE77A] text-3xl p-6 my-4 text-center">
          Customer Reviews
        </p>
        <div className="flex flex-row flex-wrap justify-center items-start p-4">
          {renderedCustomerReviewList}
        </div>
      </div>
    </div>
  );
}

export default Reviews
