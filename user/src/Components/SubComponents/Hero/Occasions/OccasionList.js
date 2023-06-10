import React from "react";
import OccasionItem from "./OccasionItem";
import Anniversary from "../../../../images/Anniversary.jpeg";
import Birthday from "../../../../images/Birthday.webp";

const OccasionList = () => {
  const occasionList = [
    {
      occasionName: "BirthDay Cakes",
      image: Anniversary,
    },
    {
      occasionName: "Anniversary Cakes",
      image: Birthday,
    },
    {
      occasionName: "Best Seller Cakes",
      image:
        "https://images.pexels.com/photos/6341564/pexels-photo-6341564.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const renderedOccasionList = occasionList.map((occasion) => {
    return <OccasionItem key={occasion.occasionName} occasion={occasion} />;
  });

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center m-8">
        {renderedOccasionList}
      </div>
    </>
  );
};

export default OccasionList;
