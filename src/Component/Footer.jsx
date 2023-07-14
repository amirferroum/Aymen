import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import {
    BsFillTelephoneFill,
  } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[80px] bg-[#17181d] flex justify-between items-center px-8">
      <div className="flex">
        <h3 className="text-white">copyrights @</h3>
        <h3 className="text-[#6c2d7e]">Aymen Saadali</h3>
      </div>
      <div className="flex">
      <BsFillTelephoneFill size={30} className="icons mr-4" />
        <h3 className="text-white">+213780590221</h3>
      </div>

      <div className="flex ">
        <FaFacebook className="icons" />
        <FaYoutube className="icons mx-8" />
        <FaInstagram className="icons" />
      </div>
      
    </div>
  );
};

export default Footer;
