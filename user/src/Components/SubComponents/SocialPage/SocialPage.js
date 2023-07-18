import React from "react";
import SocialBox from "../../ReusableComponents/SocialBox";
import InstagramC from "../../../images/InstaC.svg";
import FacebookC from "../../../images/FacebookC.svg";
import PinterestC from "../../../images/PinterestC.svg";
import YoutubeC from "../../../images/YoutubeC.svg";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../ReusableComponents/ScrollToTop";

const SocialPage = () => {
 
  const navigate = useNavigate()

  const handleClick = () => {
     navigate("/");
     ScrollToTop();
  }
  return (
    <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center min-[320px]:p-4 sm:px-32 sm:py-16">
      <p className="font-roboto font-bold leading-normal text-[#FFE04E] text-3xl text-center p-6">
        Follow Us On
      </p>
      <SocialBox className="m-2" onClick={handleClick}>
        <img
          src={InstagramC}
          alt="Instagram Icon"
          className="w-[50px] h-[50px]"
        />
      </SocialBox>
      <SocialBox className="m-2" onClick={handleClick}>
        <img
          src={FacebookC}
          alt="Facebook Icon"
          className="w-[50px] h-[50px]"
        />
      </SocialBox>
      <SocialBox className="m-2" onClick={handleClick}>
        <img
          src={PinterestC}
          alt="Pinterest Icon"
          className="w-[50px] h-[50px]"
        />
      </SocialBox>
      <SocialBox className="m-2" onClick={handleClick}>
        <img src={YoutubeC} alt="Youtube Icon" className="w-[50px] h-[50px]" />
      </SocialBox>
      <p className=" font-roboto font-bold leading-normal text-[#FFE04E] text-2xl p-4">
        @SamarthIkkalaki
      </p>
    </div>
  );
  
};

export default SocialPage;
