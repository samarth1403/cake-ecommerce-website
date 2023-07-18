import React from 'react'
import Marquee from "react-fast-marquee";
import Birthday from "../../../images/Birthday.webp";
import Anniversary from "../../../images/Anniversary.jpeg";
import Cake from "../../../images/cake.jpeg";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { ScrollToTop } from '../../ReusableComponents/ScrollToTop';

const CakeMarquee = () => {

   const {products} = useSelector((state)=>{
    return state.product
   })

    const renderedCakeImagesList = products?.map((product,index)=>{
        return (
          <Link
            className="m-4"
            key={product?._id}
            to={`/product-details/${product?._id}`}
            onClick={() => ScrollToTop()}
          >
            <img
              src={product?.images[0]?.url}
              alt="Cake Images Item"
              className="min-[320px]:w-[200px] min-[320px]:h-[200px]  min-[320px]:rounded-[25px] sm:w-[240px] sm:h-[240px] sm:rounded-[50px] cursor-pointer"
            />
          </Link>
        );
    })
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] min-[320px]:text-3xl sm:text-4xl ">
        Our Specials
      </p>
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <div className="w-[320px] sm:w-[500px] md:w-[900px] lg:w-[1150px] my-6">
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
    </div>
  );
}

export default CakeMarquee