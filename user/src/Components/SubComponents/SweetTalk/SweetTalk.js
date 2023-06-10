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
        <p className="text-[#FEE77A] font-roboto font-bold text-4xl">
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
          "--swiper-pagination-bullet-size":"10px",
          "--swiper-pagination-bullet-inactive-color":"#fff",
          "--swiper-pagination-bullet-inactive-size":"6px",
        }}
      >
        {sweetTalkList.map((sweetTalk) => {
          return (
            <SwiperSlide>
              <div className="flex flex-row flex-wrap justify-center items-center">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
                  }}
                  className="flex flex-row flex-wrap justify-center items-center w-[600px] h-auto p-16 m-16 rounded-[30px] "
                >
                  <p className="font-roboto font-bold leading-[150%] text-[#0D103C] text-2xl text-center">
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
