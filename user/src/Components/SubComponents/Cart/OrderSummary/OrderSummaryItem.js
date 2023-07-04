import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductFromCart,
  getCart,
  updateQuantityFromCart,
} from "../../../../features/user/userSlice";
import minusIcon from "../../../../images/minusIcon.svg";
import plusIcon from "../../../../images/plusIcon.svg";

const OrderSummaryItem = ({ productInCart }) => {
  const [quantityFromCart, setQuantityFromCart] = useState(
    productInCart?.quantity
  );
  const { Token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDeleteProductFromCart = (id) => {
    dispatch(deleteProductFromCart({ cartProductId: id, Token: Token }));
    setTimeout(() => {
      dispatch(getCart({ Token: Token }));
    }, 100);
  };
  useEffect(() => {
    if (quantityFromCart !== productInCart?.quantity) {
      UpdateProductQuantityFromCart();
    }
  }, [quantityFromCart]);
  const UpdateProductQuantityFromCart = () => {
    dispatch(
      updateQuantityFromCart({
        body: {
          cartProductId: productInCart?._id,
          quantityFromCart: quantityFromCart,
        },
        Token: Token,
      })
    );
    setTimeout(() => {
      dispatch(getCart({ Token: Token }));
    }, 100);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C58AFF 0.02%, #E1C6FC 100%)",
      }}
      className="flex flex-row flex-wrap justify-center lg:justify-between items-center w-[400px] sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-[50px] m-4 p-4"
    >
      <img
        src={productInCart?.productId?.images[0]?.url}
        alt="Anniversary Cake"
        className="w-[230px] h-[230px] rounded-[30px] mt-2 mb-2"
      />
      <div className="flex flex-col flex-wrap justify-center items-start m-2">
        <p className="font-roboto font-bold text-[#0D103C] text-xl mx-4">
          {productInCart?.productId?.title}
        </p>
        <div className="flex flex-row justify-start items-center mx-4 my-2">
          <p className="font-roboto font-bold text-[#0D103C] text-xl">
            Quantity :
          </p>
          <img
            src={minusIcon}
            className="cursor-pointer"
            alt="Minus Icon"
            onClick={() => setQuantityFromCart(quantityFromCart - 1)}
          />
          <input
            id="quantity"
            onChange={(e) => {
              setQuantityFromCart(parseInt(e.target.value));
            }}
            value={quantityFromCart}
            className="w-[60px] h-[60px] sm:w-[75px] sm:h-[55px] m-2 rounded-[10px] bg-[#17F0BC] font-roboto font-bold text-2xl text-center"
          />
          <img
            src={plusIcon}
            className="cursor-pointer"
            alt="Plus Icon"
            onClick={() => setQuantityFromCart(quantityFromCart + 1)}
          />
        </div>
        <div className="flex flex-col justify-center items-start m-4">
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Color : {productInCart?.color?.colorName}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Weight : {productInCart?.weight} Kg
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Eggless : {productInCart?.veg === true ? "True" : "False"}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Shape : {productInCart?.shape}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-roboto font-bold text-[#0D103C] text-2xl mb-4">
          Rs. {productInCart?.price * productInCart?.weight * quantityFromCart}
          /-
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-xl line-through mb-4">
          Rs.{" "}
          {(
            productInCart?.price * productInCart?.weight * quantityFromCart +
            productInCart?.price *
              productInCart?.weight *
              quantityFromCart *
              0.1
          ).toFixed(2)}
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg mb-4">
          (10 % Off)
        </p>
        <button
          onClick={() => handleDeleteProductFromCart(productInCart?._id)}
          className="bg-[#0D103C] font-roboto font-bold text-[#fff] text-xl px-4 py-2 mx-4 mt-8 mb-4 rounded-[10px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
