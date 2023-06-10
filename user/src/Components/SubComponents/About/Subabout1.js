import React from 'react'
import Birthday from '../../../images/Birthday.webp';
import Anniversary from '../../../images/Anniversary.jpeg';
import Cake from '../../../images/cake.jpeg';

const Subabout1 = () => {
  return (
    <div className="bg-[#0D103C]">
      <div
        style={{
          background:
            "linear-gradient(179.96deg, #D9D9D9 0.03%, rgba(217, 217, 217, 0) 112.46%)",
        }}
        className="flex flex-col flex-wrap justify-center items-center w-[360px] sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[100px] md:rounded-br-[100px] px-4 py-8 m-12 "
      >
        <div className="flex flex-row flex-no-wrap justify-center items-center m-2">
          <div
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 0%, #FDFFA1 51.29%, #FCFF73 100%)",
            }}
            className="flex flex-row flex-wrap justify-center items-center w-[200px] sm:w-[350px] md:w-[400px] lg:w-[460px] rounded-l-[20px]"
          >
            <p className="font-roboto font-bold text-center text-sm sm:text-md md:text-lg lg:text-2xl m-2 md:m-4 lg:m-6 ">
              Indulge in a slice of happiness with our heavenly cakes, where
              every bite is a sweet symphony of flavors.{" "}
            </p>
          </div>
          <img
            src={Birthday}
            alt="Birthday Cake"
            className="w-[140px] rounded-[20px] md:w-[160px] lg:w-[220px] h-[140px] md:h-[160px] lg:h-[220px] mt-2 mb-4"
          />
        </div>
        <div className="flex flex-row flex-no-wrap justify-center items-center mx-4 my-8">
          <img
            src={Anniversary}
            alt="Anniversary Cake"
            className="w-[150px] rounded-[20px] md:w-[160px] lg:w-[220px] h-[150px] md:h-[160px] lg:h-[220px] mt-2 mb-4"
          />
          <div
            style={{
              background:
                "linear-gradient(90deg, #FCFF73 0%, #FDFFA1 50.52%, #FFFFFF 100%)",
            }}
            className="flex flex-row flex-wrap justify-center items-center w-[200px] sm:w-[350px] md:w-[400px] lg:w-[460px] rounded-r-[20px]"
          >
            <p className="font-roboto font-bold text-center text-sm sm:text-md md:text-lg lg:text-2xl mx-1 my-1 md:m-4 lg:m-6 ">
              Once you taste our creations, you'll be craving for more, making
              your celebrations truly unforgettable.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-no-wrap justify-center items-center mx-4 my-8">
          <div
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 0%, #FDFFA1 51.29%, #FCFF73 100%)",
            }}
            className="flex flex-row flex-wrap justify-center items-center w-[200px] sm:w-[350px] md:w-[400px] lg:w-[460px] rounded-l-[20px]"
          >
            <p className="font-roboto font-bold text-center text-sm sm:text-md md:text-lg lg:text-2xl m-2 md:m-4 lg:m-6 ">
              Order now & let us whisk you away into a world of delectable
              delights!
            </p>
          </div>
          <img
            src={Cake}
            alt="Cake"
            className="w-[140px] rounded-[20px] md:w-[160px] lg:w-[220px] h-[140px] md:h-[160px] lg:h-[220px] mt-2 mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Subabout1
