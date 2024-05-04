import React from "react";
import AboutText from "./AboutText";

import AboutCard from "./AboutCard";
import AboutProgres from "./AboutProgres";

const AboutContent = () => {
  return (
    <div className=" bg-gray-500 max-md:w-[435px] h-[800px] items-center flex max-md:h-[2300px] justify-center ">
      <div className="AboutInfo flex  max-md:flex-col">
        <AboutCard />
        <div className="ps-[50px] max-md:w-[600px] max-md:p-0"> <AboutProgres/>
        <AboutText /></div>
         
      
      </div>
    </div>
  );
};

export default AboutContent;
