import React from "react";
import FooterSignup from "./FooterSignup";
import InstagramW from "../../images/InstagramW.svg";
import FacebookW from "../../images/FacebookW.svg";
import PinterestW from "../../images/PinterestW.svg";
import YoutubeW from "../../images/YoutubeW.svg";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../ReusableComponents/ScrollToTop";

const Footer = () => {
  const renderedShoppingItemCakeList = shoppingItemCakeList.map(
    (shoppingItemCakeItem , index) => {
      return (
        <Link key={index} to="/shop-page" onClick={()=>ScrollToTop()}>
          <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
            {shoppingItemCakeItem}
          </p>
        </Link>
      );
    }
  );

  const renderedAboutItemList = aboutItemList.map((aboutItem, index) => {
    return (
      <Link to="/" key={index} onClick={()=>ScrollToTop()}>
        <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
          {aboutItem}
        </p>
      </Link>
    );
  });

  const renderedPolicyItemList = policyItemList.map((policyItem,index) => {
    return (
      <Link
        to="/under-construction-page"
        key={index}
        onClick={() => ScrollToTop()}
      >
        <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
          {policyItem}
        </p>
      </Link>
    );
  });
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-start">
        {/* SHOP */}
        <div className="my-4 mx-8">
          <p className="font-roboto font-bold text-[#FFE04E] text-2xl m-1.5">
            SHOP
          </p>
          <div className="flex flex-col flex-wrap justify-start items-start">
            {renderedShoppingItemCakeList}
          </div>
        </div>
        {/* ABOUT */}
        <div className="my-4 mx-8">
          <p className="font-roboto font-bold text-[#FFE04E] text-2xl m-1.5">
            ABOUT
          </p>
          <div className="flex flex-col flex-wrap justify-start items-start mb-4">
            <Link to="/about-page" onClick={() => ScrollToTop()}>
              <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
                Us
              </p>
            </Link>
            <Link to="/contact-us-page" onClick={() => ScrollToTop()}>
              <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
                Contact Us
              </p>
            </Link>
            <Link to="/under-construction-page" onClick={() => ScrollToTop()}>
              <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
                FAQ
              </p>
            </Link>
            <Link to="/under-construction-page" onClick={() => ScrollToTop()}>
              <p className="font-roboto font-[500] text-[#fff] text-lg m-1.5">
                Customer Reviews
              </p>
            </Link>
          </div>
          <p className="font-roboto font-bold text-[#FFE04E] text-2xl m-1.5">
            POLICY
          </p>
          <div className="flex flex-col flex-wrap justify-start items-start">
            {renderedPolicyItemList}
          </div>
        </div>
        {/* <div className="my-4 mx-8">
          <div className="flex flex-col flex-wrap justify-start items-start">
            <p className="font-roboto font-bold text-[#FFE04E] text-2xl m-1.5">
              ADDRESS :
            </p>

            <div className="flex flex-col flex-wrap justify-start items-start mb-4">
              <a
                href="https://www.google.com/maps/place/Phoenix+Fountainhead/@18.561895,73.9143073,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c141117e8ea1:0xcc485d0fa68e7bc1!8m2!3d18.561895!4d73.916496!16s%2Fg%2F11btrrgvt2?entry=ttu"
                target="_blank"
              >
                <p className="font-roboto font-[500] text-[#fff] text-lg m-4">
                  9th Floor, Tower 2, Phoenix Fountainhead, 207, Nagar Rd,
                  Clover Park, Pune, Maharashtra 411014
                </p>
              </a>
            </div>
            <p className="font-roboto font-bold text-[#FFE04E] text-2xl m-1.5">
              CONTACT US :
            </p>
            <div className="flex flex-col flex-wrap justify-start items-start">
              <a href="tel:7499355194">
                <p className="font-roboto font-[500] text-[#fff] text-lg mx-4 my-2">
                  +91 7499355194
                </p>
              </a>
              <a href="mailto:samarthikkalaki@gmail.com">
                <p className="font-roboto font-[500] text-[#fff] text-lg mx-4 my-2">
                  samarthikkalaki@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col flex-wrap justify-center items-center">
          <div className="flex flex-col flex-wrap  min-[320px]:justify-center sm:justify-start items-start mb-4 px-8">
            <div className="flex flex-col flex-no-wrap justify-center items-start w-[260px]">
              <p className="font-roboto font-bold text-[#FFE04E] text-2xl p-4">
                CONTACT US :
              </p>
              <a href="tel:7499355194">
                <p className="font-roboto font-[500] text-[#fff] text-lg px-4 my-2">
                  +91 7499355194
                </p>
              </a>
              <a href="mailto:samarthikkalaki@gmail.com">
                <p className="font-roboto font-[500] text-[#fff] text-lg px-4 my-2">
                  samarthikkalaki@gmail.com
                </p>
              </a>
            </div>
          </div>
          <FooterSignup />
        </div>
        <div className="flex flex-col flex-no-wrap justify-center items-start w-[260px]">
          <p className="font-roboto font-bold text-[#FFE04E] text-2xl p-4">
            ADDRESS :
          </p>
          <a
            href="https://www.google.com/maps/place/Phoenix+Fountainhead/@18.561895,73.9143073,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c141117e8ea1:0xcc485d0fa68e7bc1!8m2!3d18.561895!4d73.916496!16s%2Fg%2F11btrrgvt2?entry=ttu"
            target="_blank"
          >
            <p className="font-roboto font-[500] text-[#fff] text-lg p-4">
              9th Floor, Tower 2, Phoenix Fountainhead, 207, Nagar Rd, Clover
              Park, Pune, Maharashtra 411014
            </p>
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <div className="flex flex-row flex-no-wrap justify-center items-center my-4">
          <Link to="/" onClick={() => ScrollToTop()}>
            <img
              src={InstagramW}
              alt="Instagram Icon"
              className="w-[60px] h-[60px] px-2"
            />
          </Link>
          <Link to="/" onClick={() => ScrollToTop()}>
            <img
              src={FacebookW}
              alt="Facebook Icon"
              className="w-[60px] h-[60px] px-2"
            />
          </Link>
          <Link to="/" onClick={() => ScrollToTop()}>
            <img
              src={PinterestW}
              alt="Pinterest Icon"
              className="w-[60px] h-[60px] px-2"
            />
          </Link>
          <Link to="/" onClick={() => ScrollToTop()}>
            <img
              src={YoutubeW}
              alt="Youtube Icon"
              className="w-[60px] h-[60px] px-2"
            />
          </Link>
        </div>
      </div>
      <p className="font-roboto font-bold leading-normal text-[#FFE04E] text-3xl text-center py-8 px-4">
        " Celebrate your life and all the moments that make it special. "
      </p>
    </>
  );
};

export default Footer;

const shoppingItemCakeList = [
  "Pinata Cakes",
  "Chocolate Cakes",
  "Vanilla Cakes",
  "Black Forest Cakes",
  "ButterScotch Cakes",
  "Red Velvet Cakes",
  "Fruit Cakes",
];

const aboutItemList = ["Us", "FAQ", "Contact Us", "Customer Reviews"];

const policyItemList = [
  "Refund Policy",
  "Privacy Policy",
  "Cancellation Policy",
  "Payment & Security",
  "T & C",
];
