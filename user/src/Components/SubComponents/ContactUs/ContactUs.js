import React from 'react'
import Input from '../../ReusableComponents/Input';
import { MdLocationOn } from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdAccessTimeFilled } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121656.25694454425!2d75.83621473255504!3d17.661615749898672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d082b54ac5d5%3A0x3c719de6c83710d0!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1686163072031!5m2!1sen!2sin"
        className="border-0 w-[360px] h-[260px] sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[450px] m-8"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location"
      ></iframe>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] m-12" />
      </div>
      <div className="w-[360px] sm:w-[500px] md:w-[700px] lg:w-[900px] flex flex-row flex-wrap justify-center lg:justify-between items-start">
        <div className="flex flex-col flex-no-wrap justify-center items-center">
          <p className="font-roboto font-bold text-[#fff] text-3xl mx-2 my-8">
            Contact Us
          </p>

          <div
            style={{
              background: "linear-gradient(180deg, #FFD976 0%, #FF6464 100%)",
            }}
            className="flex flex-col flex-no-wrap justify-center items-center w-[360px] lg:w-[450px] rounded-[30px] p-8 m-4"
          >
            <Input
              className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
              id="name"
              type="text"
              placeholder="Name"
            />
            <Input
              className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
              id="email"
              type="text"
              placeholder="Email"
            />
            <Input
              className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4 m-4"
              id="phoneNumber"
              type="number"
              placeholder="Phone Number"
            />
            <textarea
              className="font-roboto font-[400] text-xl rounded-[15px] bg-[#0D103C] w-[300px] lg:w-[400px] h-[150px] text-[#fff]
            text-start p-4 m-4"
              id="comment"
              type="text"
              placeholder="Comment"
            />
            <button
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[135px] h-[75px] font-roboto font-bold text-2xl text-[#0D103C] rounded-[20px]  px-4 mx-4 mt-4 mb-8 align-left"
            >
              Send
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-no-wrap justify-center items-center">
          <p className="font-roboto font-bold text-[#fff] text-3xl mx-2 my-8">
            Get In Touch With Us
          </p>
          <div
            style={{
              background: "linear-gradient(180deg, #FFD976 0%, #FF6464 100%)",
            }}
            className="flex flex-col flex-no-wrap justify-center items-center w-[360px] rounded-[30px] p-8 m-4"
          >
            <div className="w-[300px] flex flex-row flex-wrap justify-start items-start">
              <MdLocationOn className="text-[#0D103C] w-[40px] h-[40px] m-2 mr-4 my-4" />
              <a href="/">
                <p className="w-[200px] font-roboto font-bold text-lg text-[#0D103C] my-4 mx-2">
                  9th Floor, Tower 2, Phoenix Fountainhead, 207, Nagar Rd,
                  Clover Park, Viman Nagar, Pune, Maharashtra 411014
                </p>
              </a>
            </div>
            <div className="w-[300px] flex flex-row flex-wrap justify-start items-start">
              <BsFillTelephoneFill className="text-[#0D103C] w-[35px] h-[35px] m-2 mr-4 my-4" />
              <a href="tel:7499355194">
                <p className="w-[200px] font-roboto font-bold text-lg text-[#0D103C] my-4 mx-4">
                  7499355194
                </p>
              </a>
            </div>
            <div className="w-[300px]  flex flex-row flex-wrap justify-start items-start">
              <FiMail className="text-[#0D103C] w-[40px] h-[40px] m-2 mr-4 my-4" />
              <a href="mailto:samarthikkalaki@gmail.com">
                <p className="w-[200px] font-roboto font-bold text-lg text-[#0D103C] my-4 mx-2">
                  samarthikkalaki@gmail.com
                </p>
              </a>
            </div>
            <div className="w-[300px] flex flex-row flex-wrap justify-start items-start">
              <MdAccessTimeFilled className="text-[#0D103C] w-[40px] h-[40px] m-2 mr-4 my-4" />
              <p className="w-[200px] font-roboto font-bold text-lg text-[#0D103C] my-4 mx-2">
                Monday-Friday : From 10 AM To 8 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs