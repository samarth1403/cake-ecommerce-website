import React from 'react';
import CakeTypesList from './CakeTypes/CakeTypesList';
import OccasionList from './Occasions/OccasionList';

const Hero = ({images}) => {
  
    return (
      <>
        <div className="flex flex-row flex-wrap justify-center items-center px-16 py-8 mx-16">
          <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] f text-5xl ">
            " Let our cakes be the icing on the cake of your happiness. "
          </p>
        </div>
        <OccasionList images={images}/>
        <CakeTypesList />
      </>
    );
};

export default Hero;