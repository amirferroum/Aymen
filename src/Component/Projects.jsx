import React from "react";
import Proj from "./proj";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Projects = () => {
  const sliderData = [
    {
      url: "https://aymensaadali.github.io/imgs/pjt%201.jpg",
      head: "sketching and design",
    },

    {
      url: "https://aymensaadali.github.io/imgs/pjt%202.jpg",
      head: "ui design",
    },
    {
      url: "https://aymensaadali.github.io/imgs/pjt%203.jpg",
      head: "design for eshopping mobile application",
    },
    {
      url: "https://aymensaadali.github.io/imgs/pjt%204.jpg",
      head: "design of business card 01",
    },
    {
        url: "https://aymensaadali.github.io/imgs/pjt%205.jpg",
        head: "design for a business card 02",
      },
  
      {
        url: "https://aymensaadali.github.io/imgs/pjt%206.jpg",
        head: "cv design 01",
      },
      {
        url: "https://aymensaadali.github.io/imgs/pjt%207.jpg",
        head: "cv design 02",
      },
      {
        url: "https://aymensaadali.github.io/imgs/pjt%208.jpg",
        head: "social media advertisment of gduila",
      },
      {
        url: "https://aymensaadali.github.io/imgs/pjt%209.jpg",
        head: "social media advertisment of candia",
      },
  
      {
        url: "https://aymensaadali.github.io/imgs/pjt%2010.jpg",
        head: "social media advertisment of a mobile application",
      },
      {
        url: "https://aymensaadali.github.io/imgs/pjt%2011.jpg",
        head: "UI Design",
      },
      {
        url: "https://aymensaadali.github.io/imgs/pjt%2012.jpg",
        head: "logo design for my instagram page",
      },
    
  ];

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  return (
    <div className=" bg-[#17181d] relative">
      <div className="max-w-[1240px] mx-auto py-16 px-4 ">
        <h1 className="text-center py-16 text-5xl text-[#6c2d7e]  w-full">
          Projects
        </h1>

        <div className="absolute right-16 top-52 ">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft className="text-[#6c2d7e]" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight className="text-[#6c2d7e]" />
          </button>
        </div>
       
          <div id="content" className="p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide ">
            {sliderData.map((item, index) => (
              <div>
                <Proj url={item.url} head={item.head} />
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default Projects;
