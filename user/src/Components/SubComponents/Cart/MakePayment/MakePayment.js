import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from '../../../../features/user/userSlice';

const MakePayment = () => {

    const [totalCost , setTotalCost] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCart())
    }, []);

    const {gotCart} = useSelector((state)=>{
      return state.user
    })

    useEffect(() => {
      let totalPrice = 0;
      for (let index = 0; index < gotCart?.length; index++) {
        totalPrice += Number(
          gotCart[index].price * gotCart[index].weight * gotCart[index].quantity
        );
      }
      setTotalCost(totalPrice)
    }, [gotCart]);

    const renderedOrderSummaryList = gotCart?.map((item)=>{
        return (
          <div className='mb-6'>
            <div className="flex flex-row flex-wrap justify-between items-center mx-2">
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-2">
                {item?.productId?.title}
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-8">
                Rs. {item?.price * item?.quantity}/-
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center mx-2">
              <div className="flex flex-col">
                <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
                  Qty : {item?.quantity}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
                  Veg : {item?.veg}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
                  Shape : {item?.shape}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
                  color : {item?.color?.colorName}
                </p>
              </div>
              <img
                src={item?.productId?.images[0]?.url}
                alt="product"
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>
        );
    })
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C58AFF 0.02%, #E1C6FC 100%)",
          }}
          className="w-[360px] sm:w-[500px] md:w-[600px] rounded-[50px] m-4 p-4 m-8 p-6"
        >
          <p className="font-roboto font-bold text-[#0D103C] text-3xl text-left m-6">
            Order Summary
          </p>
          {renderedOrderSummaryList}
          <div className="flex flex-col flex-no-wrap justify-center items-center m-4">
            <p className="font-roboto font-bold text-[#0D103C] text-xl text-center m-4 ">
              -----------------------------------------------------------------------
            </p>
            <div className="flex flex-row flex-no-wrap justify-evenly items-center">
              <p className="font-roboto font-bold text-[#0D103C] text-3xl mr-16 sm:mr-24 m-2 ">
                Total Cost
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-3xl ml-16 sm:ml-24 m-2">
                Rs {totalCost} /-
              </p>
            </div>
            <Link to="/cart-page/congratulation">
              <button className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]">
                Proceed to Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </>
  );
}

export default MakePayment

const orderSummaryList = [
  { itemName: "Yummylicious Delicious Cake", itemQuantity: 1, itemPrice: 599 },
  { itemName: "Yummylicious Delicious Cake", itemQuantity: 1, itemPrice: 599 },
];
