import React from 'react';
import CakeTypesList from './CakeTypes/CakeTypesList';
import OccasionList from './Occasions/OccasionList';

const Hero = ({images}) => {
  
    return (
      <>
        <div className="flex flex-row flex-wrap justify-center items-center px-16 py-4">
          <p className="leading-snug ont-roboto sm:font-bold text-center items-center text-[#FEE77A] min-[320px]:text-3xl min-[320px]:font-medium min-[320px]:leading-relaxed sm:text-5xl sm:leading-relaxed">
            " Let our cakes be the icing on the cake of your happiness. "
          </p>
        </div>
        <OccasionList images={images} />
        <CakeTypesList />
      </>
    );
};

export default Hero;