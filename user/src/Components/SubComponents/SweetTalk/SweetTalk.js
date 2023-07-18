import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade , Autoplay , Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] min-[320px]:text-3xl sm:text-4xl ">
          A Little Sweet Talk
        </p>
      </div>
      <Swiper
        effect={"cards"}
        pagination={{ clickable: true }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "rgb(255, 255, 0)",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-size": "6px",
        }}
      >
        {sweetTalkList.map((sweetTalk, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-row flex-wrap justify-center items-center">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
                  }}
                  className="flex flex-row flex-wrap justify-center items-center min-[320px]:w-[260px] sm:w-[500px] h-auto min-[320px]:p-8 sm:p-16 my-12 min-[320px]:rounded-[10px] sm:rounded-[30px] "
                >
                  <p className="font-roboto font-bold leading-[150%] text-[#0D103C] min-[320px]:text-lg sm:text-2xl text-center">
                    {sweetTalk}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const sweetTalkList = [
  "\"Life is full of sweet moments, a delicious cake would make them even sweeter.\"",
  "\"Cake is meant to be shared, and so is happiness. Let's celebrate this moment together, slice by slice.\"",
  "\"A cake is made complete with candles, and Your life is complete with you !\"",
  "\"This cake represents all the sweetness in the world, and you are the sweetest part of Your Dear Ones !\"",
  "\"Life is like a cake, and you're the cherry on top. Let's add some more sweetness to this celebration!\"",
  "\"Just like this cake, you make every moment delicious. Let's savor the sweetness together!\"",
];
