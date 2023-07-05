import React from 'react'
import Subabout1 from './Subabout1';
import Subabout2 from './Subabout2';

const About = () => {
  return (
    <div className="bg-[#0D103C]">
      <div className="flex flex-col flex-wrap justify-center items-center m-4">
        <p className="font-roboto font-bold text-[#fff] text-5xl m-4">
          About Us
        </p>
        <div className="flex flex-row flex-wrap justify-center items-start">
          <div className="flex flex-col flex-wrap justify-center items-center">
            <div
              style={{
                background: "linear-gradient(180deg, #FFE77A 0%, #FC9866 100%)",
              }}
              className="flex flex-col flex-wrap justify-center items-center w-[360px] sm:w-[500px] md:w-[700px] h-auto rounded-[30px] m-8"
            >
              <p className="font-roboto font-bold text-[#0D103C] text-justify text-lg sm:text-xl m-8 sm:m-12">
                Welcome to [Cake Vendor's Name], your ultimate destination for
                all things sweet and delicious! We are a passionate team of
                skilled bakers and confectionery artists dedicated to creating
                mouthwatering cakes that make your special moments truly
                memorable.
              </p>
            </div>
            <p className="font-roboto font-bold text-[#FEE77A] text-4xl m-6 sm:m-8">
              Our Story
            </p>
            <div
              style={{
                background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
              }}
              className="flex flex-col flex-wrap justify-center items-center w-[360px] sm:w-[500px] md:w-[700px] h-auto rounded-[30px] m-8"
            >
              <p className="font-roboto font-bold text-[#0D103C] text-justify text-lg sm:text-xl m-8 sm:m-12">
                With a heart full of dreams and a determination to turn our
                passion into a business, we started a small cake venture from
                our home kitchen. As our delectable creations began to captivate
                taste buds and spread joy, our business grew, and we opened a
                charming bakery. With each cake we baked, our love and talent
                continued to flourish, making our business a beloved destination
                for sweet indulgence and celebrations.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col flex-wrap justify-center items-center w-[360px] h-auto rounded-[30px] ml-2 mt-2">
            <img
              src={Birthday}
              alt="Birthday Cake"
              className="w-[240px] h-[240px] rounded-[30px] mt-2 mb-4"
            />
            <img
              src={Cake}
              alt="Cake"
              className="w-[240px] h-[240px] rounded-[30px] mt-2 mb-4"
            />
            <img
              src={Anniversary}
              alt="Anniversary Cake"
              className="w-[240px] h-[240px] rounded-[30px] mt-2 mb-4"
            />
          </div> */}
        </div>
        <div className="flex justify-center">
          <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] m-12" />
        </div>
        <Subabout1 />
        <Subabout2 />
      </div>
    </div>
  );
}

export default About
