import React, { useState } from 'react';
import Cake from "../../../images/cake.jpeg";
import RadioButton from "../../ReusableComponents/RadioButton";
import ReactStars from "react-rating-stars-component";
import './InnerImageZoom.css';
import InnerImageZoom from "react-inner-image-zoom";
import birthday from '../../../images/Birthday.webp';
import Anniversary from '../../../images/Anniversary.jpeg';

const SingleProductDetails = () => {
  const [productImage , setProductImage] = useState(Cake);

  const handleClick = (image) => {
    setProductImage(image);
  }
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center items-start">
        <div className="flex flex-col flex-wrap justify-center items-center m-8">
          <InnerImageZoom
            src={productImage}
            alt="Cake"
            zoomType="hover"
            className="w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-[40px] mb-8"
          />
          <div className="flex flex-row flex-wrap justify-center items-center">
            <img
              src={birthday}
              alt="Cake"
              className="w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] rounded-[20px] mx-2 cursor-pointer"
              onClick={() => {
                handleClick(birthday);
              }}
            />
            <img
              src={Anniversary}
              alt="Cake"
              className="w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] rounded-[20px] mx-2 cursor-pointer"
              onClick={() => {
                handleClick(Anniversary);
              }}
            />
            <img
              src={Cake}
              alt="Cake"
              className="w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] rounded-[20px] mx-2 cursor-pointer"
              onClick={() => {
                handleClick(Cake);
              }}
            />
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(180deg, #C1FFDE 0%, #0D103C 100%)",
          }}
          className="flex flex-col flex-wrap justify-center items-center lg:items-start w-[360px] sm:w-[550px] p-4 rounded-[75px] my-8"
        >
          <p className="font-roboto font-bold text-[#0D103C] text-2xl text-center mx-8 my-4 mt-6">
            Yummylicious Chocolate Cake
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-2xl mx-8 my-2 ">
            Rs. 599/-
          </p>
          <div className="flex flex-row flex-wrap justify-center md:justify-start items-center m-4">
            {itemWeightList.map((itemWeightItem) => {
              return (
                <button
                  style={{
                    background:
                      "linear-gradient(180deg, #FFEFEF 0%, #AE49FE 100%)",
                  }}
                  className="font-roboto font-bold text-xl text-center m-2 px-4 py-4 rounded-[20px]"
                >
                  {itemWeightItem}
                </button>
              );
            })}
          </div>
          <div className="mx-6">
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4.5}
              size={36}
              isHalf={true}
              edit={false}
              a11y={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ECD400"
            />
          </div>

          <div className="flex flex-row flex-wrap justify-start items-center m-4">
            <RadioButton className="m-2">With Egg</RadioButton>
            <RadioButton className="m-2">Without Egg</RadioButton>
          </div>
          <div className="flex flex-row flex-wrap justify-start items-center mx-4">
            {itemShapeList.map((itemShapeItem) => {
              return <RadioButton className="m-2">{itemShapeItem}</RadioButton>;
            })}
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center m-8">
            <button
              style={{
                background: "linear-gradient(180deg, #FFEFEF 0%, #AE49FE 100%)",
              }}
              className="w-[200px] font-roboto font-bold text-xl text-center rounded-[25px] p-4 m-2"
            >
              Add to Cart
            </button>
            <button
              style={{
                background: "linear-gradient(180deg, #FFEFEF 0%, #E5FE49 100%)",
              }}
              className="w-[200px] font-roboto font-bold text-xl text-center rounded-[25px] p-4 m-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetails;

const itemWeightList = [
  "500 gm",
  "1 Kg",
  "1.5 Kg",
  "2 Kg",
  "2.5 Kg",
  "3 Kg",
  "3.5 Kg",
  "4 Kg",
  "4.5 Kg",
  "5 Kg",
];

const itemShapeList = ["Circular", "Heart Shape", "Square Shape"];
