import React, { useState, useEffect } from "react";
import Cake from "../../../images/cake.jpeg";
import RadioButton from "../../ReusableComponents/RadioButton";
import ReactStars from "react-rating-stars-component";
import "./InnerImageZoom.css";
import InnerImageZoom from "react-inner-image-zoom";
import birthday from "../../../images/Birthday.webp";
import Anniversary from "../../../images/Anniversary.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/product/productSlice";
import minusIcon from "../../../images/minusIcon.svg";
import plusIcon from "../../../images/plusIcon.svg";
import {toast} from "react-toastify";
import { addToCart, getCart } from "../../../features/user/userSlice";
import { ScrollToTop } from "../../ReusableComponents/ScrollToTop";

const SingleProductDetails = () => {
  const {Token } = useSelector((state)=>state.user);

  const [alreadyAddedToCart , setAlreadyAddedToCart] = useState(false);
  const [weight, setWeight] = useState(1);
  const [color, setColor] = useState(1);
  const [veg, setVeg] = useState(true);
  const [shape, setShape] = useState("circular");
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];

  const getSingleProduct = () => {
    dispatch(getProduct(productId));
  };

  useEffect(() => {
    getSingleProduct();
    setFlag(false);
    dispatch(getCart());
  }, [productId]);

  const { gotProduct } = useSelector((state) => {
    return state.product;
  });

  const { gotCart } = useSelector((state)=>{
    return state.user;
  })

  useEffect(()=>{
    for (let index = 0; index < gotCart?.length; index++) {
      if(productId === gotCart[index]?.productId?._id){
        setAlreadyAddedToCart(true);
      }
      else {
        setAlreadyAddedToCart(false);
      }
    }
  },[productId])

  const [productImage, setProductImage] = useState();
  const [flag, setFlag] = useState(false);

  const handleClick = (image) => {
    setProductImage(image);
    setFlag(true);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        body: {
          productId: gotProduct?._id,
          weight,
          color,
          quantity,
          shape,
          veg,
          price: gotProduct?.price,
        },
        Token: Token,
      })
    );
    
    setTimeout(()=>{
       ScrollToTop();
       dispatch(getCart({Token:Token}))
    },100)
  }

  const handleBuyNow = () => {
    dispatch(
      addToCart({
        body: {
          productId: gotProduct?._id,
          weight,
          color,
          quantity,
          shape,
          veg,
          price: gotProduct?.price,
        },
        Token: Token,
      })
    );
    setTimeout(() => {
      navigate("/cart-page");
       ScrollToTop();
      dispatch(getCart({Token:Token}));
    }, 100);
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center items-start">
        <div className="flex flex-col flex-wrap justify-center items-center m-8">
          <InnerImageZoom
            src={flag === false ? gotProduct?.images[0]?.url : productImage}
            alt="Cake"
            zoomType="hover"
            className="w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-[40px] mb-8"
          />
          {/* <div className="flex flex-row flex-wrap justify-center items-center">
            <img
              src={gotProduct?.images[0]?.url}
              alt="Cake"
              className="w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] rounded-[20px] mx-2 cursor-pointer"
              onClick={() => {
                handleClick(gotProduct?.images[0]?.url);
              }}
            />
            <img
              src={gotProduct?.images[1]?.url}
              alt="Cake"
              className="w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] rounded-[20px] mx-2 cursor-pointer"
              onClick={() => {
                handleClick(gotProduct?.images[1]?.url);
              }}
            />
          </div> */}
        </div>
        <div
          style={{
            background: "linear-gradient(180deg, #C1FFDE 0%, #0D103C 100%)",
          }}
          className="flex flex-col flex-wrap justify-center items-center lg:items-start w-[360px] sm:w-[550px] p-4 rounded-[75px] my-8"
        >
          <p className="font-roboto font-bold text-[#0D103C] text-3xl text-center mx-8 my-4 mt-6">
            {gotProduct?.title}
          </p>
          <div className="flex flex-row flex-wrap justify-between items-center my-2">
            <p className="font-roboto font-bold text-[#0D103C] text-xl mx-8 my-2 ">
              Category : {gotProduct?.category}
            </p>
            <p className="font-roboto font-bold text-[#0D103C] text-xl mx-8 my-2 ">
              Sub Category : {gotProduct?.subCategory}
            </p>
          </div>
          {/* <div className="flex flex-row flex-wrap justify-center items-center">
            <p className="font-roboto font-bold text-[#0D103C] text-xl mx-8 my-2 ">
              # {gotProduct?.tags}
            </p>
          </div>
          <ReactStars
                count={5}
                value={gotProduct?.totalRating}
                size={24}
                isHalf={true}
                edit={false}
                a11y={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ECD400"
              /> */}

          {alreadyAddedToCart === false ? (
            <>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center">
                <p className="font-roboto font-bold text-xl ml-8 my-2 mr-4">
                  Enter Weight :
                </p>
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                  type="number"
                  className="font-roboto font-bold text-xl text-center m-2 px-4 py-4 rounded-[20px] w-[60px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFEFEF 0%, #AE49FE 100%)",
                  }}
                />{" "}
                <p className="font-roboto font-bold text-xl mx-4 my-2">Kg</p>
              </div>
              <div>
                <p className="font-roboto font-bold text-xl ml-8 my-2 ">
                  Select Color :
                </p>
                <div className="flex flex-row flex-wrap justify-start items-center mx-6 my-2">
                  {gotProduct?.color?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row flex-no-wrap justify-center items-center mr-4"
                      >
                        <input
                          onChange={() => setColor(item?._id)}
                          type="radio"
                          id={item?.colorName}
                          name="color"
                          value={color}
                          className="mx-1 text-2xl cursor-pointer"
                        />
                        <label
                          htmlFor={item?.colorName}
                          className="font-roboto font-bold text-xl mx-4 my-2 cursor-pointer"
                        >
                          <div
                            style={{
                              backgroundColor: `${item?.colorName}`,
                              width: "30px",
                              height: "30px",
                              borderRadius: "5px",
                            }}
                          ></div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-start items-center m-4">
                <input
                  onChange={() => setVeg(true)}
                  type="radio"
                  id="withoutEgg"
                  name="veg"
                  value={veg}
                  className="mx-2 text-2xl cursor-pointer"
                />
                <label
                  htmlFor="withoutEgg"
                  className="font-roboto font-bold text-xl mx-2 my-2 cursor-pointer"
                >
                  Without Egg
                </label>
                <input
                  onChange={() => setVeg(false)}
                  type="radio"
                  id="withEgg"
                  name="veg"
                  value={veg}
                  className="mx-2 text-2xl cursor-pointer"
                />
                <label
                  htmlFor="withEgg"
                  className="font-roboto font-bold text-xl mx-2 my-2 cursor-pointer"
                >
                  With Egg
                </label>
              </div>
              <div className="flex flex-row flex-wrap justify-start items-center mx-4 my-2">
                {itemShapeList.map((item, index) => {
                  return (
                    <div key={index} className="mr-1">
                      <input
                        onChange={() => setShape(item)}
                        type="radio"
                        id={item}
                        name="shape"
                        value={shape}
                        className="mx-2 text-2xl cursor-pointer"
                      />
                      <label
                        htmlFor={item}
                        className="font-roboto font-bold text-xl mx-2 my-2 cursor-pointer"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
              {alreadyAddedToCart === false && (
                <div className="flex flex-row justify-center items-center mx-4 my-4">
                  <p className="font-roboto font-bold text-xl mx-6">
                    Quantity :
                  </p>
                  <img
                    src={minusIcon}
                    alt="Minus Icon"
                    className="ml-2 cursor-pointer"
                    onClick={() => setQuantity(quantity - 1)}
                  />
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    id="quantity"
                    className="w-[50px] h-[50px] sm:w-[75px] sm:h-[55px] m-2 rounded-[10px] bg-[#17F0BC] font-roboto font-bold text-2xl text-center"
                  />
                  <img
                    onClick={() => setQuantity(quantity + 1)}
                    src={plusIcon}
                    alt="Minus Icon"
                    className=" cursor-pointer"
                  />
                </div>
              )}
              <p className="font-roboto font-bold  text-3xl mx-8 mt-6 ">
                {`Price  :  Rs. ${gotProduct?.price * quantity * weight} /-`}
              </p>
            </>
          ) : (
            <p className="font-roboto font-bold text-xl ml-8 my-2 ">
              Product is Present in Cart
            </p>
          )}

          <div className="flex flex-row flex-wrap justify-center items-center m-8">
            <button
              style={{
                background: "linear-gradient(180deg, #FFEFEF 0%, #AE49FE 100%)",
              }}
              className="w-[200px] font-roboto font-bold text-xl text-center rounded-[25px] p-4 m-2"
              onClick={() =>
                {alreadyAddedToCart ? navigate("/cart-page") : handleAddToCart();}
              }
            >
              {alreadyAddedToCart === false ? "Add To Cart" : "Go to Cart"}
            </button>
            {/* <button
              style={{
                background: "linear-gradient(180deg, #FFEFEF 0%, #E5FE49 100%)",
              }}
              className="w-[200px] font-roboto font-bold text-xl text-center rounded-[25px] p-4 m-2"
              onClick={() =>
               { alreadyAddedToCart ? navigate("/cart-page") : handleBuyNow();}
              }
            >
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;

const itemWeightList = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

const itemShapeList = ["Circular", "Heart Shape", "Square Shape"];
