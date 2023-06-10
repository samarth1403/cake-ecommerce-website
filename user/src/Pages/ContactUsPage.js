import React from 'react'
import HelmetMeta from "../Components/ReusableComponents/HelmetMeta";
import ContactUs from '../Components/SubComponents/ContactUs/ContactUs';
const ContactUsPage = () => {
  return (
    <>
      <HelmetMeta title={"Cake Website - Contact Us"} />
      <ContactUs />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] m-12" />
      </div>
    </>
  );
}

export default ContactUsPage