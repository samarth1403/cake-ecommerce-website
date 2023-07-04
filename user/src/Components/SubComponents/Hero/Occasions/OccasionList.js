import React, { useEffect, useState } from "react";
import OccasionItem from "./OccasionItem";
import Anniversary from "../../../../images/Anniversary.jpeg";
import Birthday from "../../../../images/Birthday.webp";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { getAllOccasions } from "../../../../features/occasions/occasionSlice";

const OccasionList = () => {
  const dispatch = useDispatch();
  const [imgArray , setImgArray] = useState([]);
  const [occasionArray , setOccasionArray] = useState([]);



  const { products } = useSelector((state) => state.product);
  const { occasions } = useSelector((state) => state.occasion);

  useEffect(() => {
    let images = [];
    for (let index = 0; index < products?.length; index++) {
      const element = products[index];
      images.push(element?.images[0]?.url);
    }
    setImgArray(images);
  }, [products, occasions]);


  useEffect(() => {
    let array = [];
    for (let index = 0; index < occasions?.length; index++) {
      const occ = occasions[index]?.occasionName;
      for (let j = index; j < index + 1; j++) {
        const img = imgArray[j];
        array.push({ image: img, occasionName: occ });
      }
    }
    setOccasionArray(array);
  }, [occasions]);

 
  const renderedOccasionList =
    occasionArray &&
    occasionArray?.map((occasion, index) => {
      return <OccasionItem key={index} occasion={occasion} />;
    });

  return (
    <>
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <div className="w-[360px] sm:w-[500px] md:w-[900px] lg:w-[1150px] my-6">
          <Marquee
            autoFill
            pauseOnHover
            gradient
            gradientColor={[13, 16, 60]}
            gradientWidth={100}
          >
            {renderedOccasionList}
          </Marquee>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center m-8"></div>
    </>
  );
};

export default OccasionList;
