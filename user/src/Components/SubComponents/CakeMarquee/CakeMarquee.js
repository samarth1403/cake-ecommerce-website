import React from 'react'
import Marquee from "react-fast-marquee";
import Birthday from "../../../images/Birthday.webp";
import Anniversary from "../../../images/Anniversary.jpeg";
import Cake from "../../../images/cake.jpeg";

const CakeMarquee = () => {
    const cakeImagesList = [
      Birthday,
      Anniversary,
      Cake,
      Birthday,
      Anniversary,
      Cake,
      Birthday,
      Anniversary,
      Cake,
    ];

    const renderedCakeImagesList = cakeImagesList.map((cakeImagesItem)=>{
        return <div className='m-4' key={cakeImagesItem}>
            <img src={cakeImagesItem} alt="Cake Images Item" className='w-[320px] h-[320px] rounded-[50px]'/>
        </div>
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