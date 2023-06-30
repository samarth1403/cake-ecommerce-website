import React from 'react'
import Marquee from "react-fast-marquee";
import Birthday from "../../../images/Birthday.webp";
import Anniversary from "../../../images/Anniversary.jpeg";
import Cake from "../../../images/cake.jpeg";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CakeMarquee = () => {

   const navigate = useNavigate();

   const {products} = useSelector((state)=>{
    return state.product
   })

    const renderedCakeImagesList = products && products?.map((product)=>{
        return (
          <div className="m-4" key={product}>
            <img
              onClick={()=>{navigate(`/product-details/${product._id}`)}}
              src={product?.images[0]?.url}
              alt="Cake Images Item"
              className="w-[320px] h-[320px] rounded-[50px] cursor-pointer"
            />
          </div>
        );
    })
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] text-5xl ">
        Our Specials
      </p>
      <div className="w-[360px] sm:w-[500px] md:w-[700px] lg:w-[1100px] m-12">
        <Marquee
          autoFill
          pauseOnHover
          gradient
          gradientColor={[13, 16, 60]}
          gradientWidth={100}
        >
          {renderedCakeImagesList}
        </Marquee>
      </div>
    </div>
  );
}

export default CakeMarquee