import React, { useEffect, useState } from "react";
import OccasionItem from "./OccasionItem";
import Anniversary from "../../../../images/Anniversary.jpeg";
import Birthday from "../../../../images/Birthday.webp";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { getAllOccasions } from "../../../../features/occasions/occasionSlice";

const OccasionList = ({images}) => {
  const dispatch = useDispatch();

  const [occasionArray , setOccasionArray] = useState([]);

  const { products } = useSelector((state) => state.product);
  const { occasions } = useSelector((state) => state.occasion);

  useEffect(() => {
    let array = [];
    for (let index = 0; index < occasions?.length; index++) {
      const occ = occasions[index]?.occasionName;
      for (let j = index; j < index + 1; j++) {
        const img = images[j];
        array.push({ image: img, occasionName: occ });
      }
    }
    setOccasionArray(array);
  }, [occasions,images]);

 
  const renderedOccasionList =
    occasionArray?.map((occasion, index) => {
      return <OccasionItem key={index} occasion={occasion} />;
    });

  return (
    <>
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <div className="w-[320px] sm:w-[500px] md:w-[900px] lg:w-[1150px] my-6">
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
    </>
  );
};

export default OccasionList;
