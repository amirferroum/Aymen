import React from "react";
import Aboutdiv from "./Aboutdiv";
import { FcAbout } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { BiSolidBrain } from "react-icons/bi";
import { AiFillExclamationCircle } from "react-icons/ai";
const AboutMe = () => {
  
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 ">
      <h1 className="text-center py-16 text-5xl text-[#6c2d7e]">Who Am I</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <Aboutdiv
          icon={<AiFillExclamationCircle className="icons " size={100} />}
        />
        <Aboutdiv icon={<MdCastForEducation className="icons" size={100} /> } />
        <Aboutdiv icon={<BiSolidBrain className="icons" size={100} />} />
      </div>
    </div>
  );
};

export default AboutMe;
