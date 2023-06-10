import React from 'react'

const OccasionItem = ({occasion}) => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #00FFE0 0%, #DBFFFB 100%)",
        }}
        className="w-[340px] h-[200px] rounded-tr-[50.9338px] rounded-bl-[50.9338px] my-8 mx-6"
      >
        <div className="flex flex-row flex-wrap justify-between items-start m-2">
          <div>
            <p className="w-[120px] font-roboto font-bold leading-normal text-[#0D103C] text-2xl mx-4 my-2">
              {occasion.occasionName}
            </p>
            <hr className="w-[120px] h-px bg-gray-500 border-0 dark:bg-gray-500 mx-4 my-4" />
            <button className='bg-[#0D103C] font-roboto font-bold leading-normal text-[#fff] text-center text-sm rounded-[10px] mx-4 px-4 py-2'>Shop Now</button>
          </div>

          <img
            src={occasion.image}
            alt="occasion cake"
            className="bg-[#0D103C] w-[150px] h-[150px] rounded-tr-[35.9338px] rounded-bl-[35.9338px] m-2"
          />
        </div>
      </div>
    </>
  );
}

export default OccasionItem
