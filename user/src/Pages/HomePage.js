import React from 'react'
import Hero from '../Components/SubComponents/Hero/Hero';
import ShoppingList from '../Components/SubComponents/Shopping/ShoppingList';
import SweetTalk from '../Components/SubComponents/SweetTalk/SweetTalk';
import SocialPage from '../Components/SubComponents/SocialPage/SocialPage';
import CakeMarquee from '../Components/SubComponents/CakeMarquee/CakeMarquee';
import HelmetMeta from '../Components/ReusableComponents/HelmetMeta';

const HomePage = () => {
  return (
    <>
      <HelmetMeta title={"Cake Website - Home"} />
      <Hero />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
      <CakeMarquee />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
      <ShoppingList />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
      <SweetTalk />
      <SocialPage />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
    </>
  );
}

export default HomePage