import React from 'react';
import HelmetMeta from '../Components/ReusableComponents/HelmetMeta';
import About from '../Components/SubComponents/About/About';

const AboutPage = () => {
  return (
    <>
      <HelmetMeta title={"Cake Website - About"}/>
      <About />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
    </>
  );
}

export default AboutPage