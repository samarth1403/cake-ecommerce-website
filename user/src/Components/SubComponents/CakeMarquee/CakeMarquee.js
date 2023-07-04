import React from 'react'
import Marquee from "react-fast-marquee";
import Birthday from "../../../images/Birthday.webp";
import Anniversary from "../../../images/Anniversary.jpeg";
import Cake from "../../../images/cake.jpeg";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";

const CakeMarquee = () => {

   const navigate = useNavigate();

   const {products} = useSelector((state)=>{
    return state.product
   })

    const renderedCakeImagesList = products && products?.map((product,index)=>{
        return (
          <div className="m-4" key={index}>
            <Link to={`/product-details/${product?._id}`}>
              <img
                src={product?.images[0]?.url}
                alt="Cake Images Item"
                className="w-[320px] h-[320px] rounded-[50px] cursor-pointer"
              />
            </Link>
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