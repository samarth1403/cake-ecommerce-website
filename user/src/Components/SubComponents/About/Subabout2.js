import React from 'react'
import { Link } from 'react-router-dom';
import { ScrollToTop } from '../../ReusableComponents/ScrollToTop';

const Subabout2 = () => {
  return (
    <div className="bg-[#0D103C]">
      <div
        style={{
          background:
            "linear-gradient(179.96deg, #D9D9D9 0.03%, rgba(217, 217, 217, 0) 112.46%)",
        }}
        className="flex flex-col flex-wrap justify-center items-center w-[360px] sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[100px] md:rounded-br-[100px] px-4 py-8 m-12"
      >
        <p className="font-roboto font-bold leading-normal text-[#0D103C] text-2xl md:text-3xl text-center m-8">
          {" "}
          "Life is short, so let us make it sweeter together."{" "}
        </p>
        <div
          style={{
            background: "linear-gradient(180deg, #FFD976 0%, #FF6464 100%)",
          }}
          className="flex flex-col flex-wrap justify-center items-center w-[260px] sm:w-[400px] md:w-[500px] lg:w-[700px] md:rounded-tl-[100px] md:rounded-br-[100px] rounded-tl-[50px] rounded-br-[50px] px-4 py-8 m-8
        "
        >
          <p className="font-roboto font-bold leading-normal text-[#0D103C] text-2xl md:text-3xl text-center m-8">
            Try the new flavours on the block
          </p>
          <Link to="/shop-page" onClick={() => ScrollToTop()}>
            <button
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] font-roboto font-bold leading-normal text-[#0D103C] text-2xl md:text-3xl text-center m-2 md:mb-36 px-8 py-4 rounded-[20px]"
            >
              Order now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subabout2
