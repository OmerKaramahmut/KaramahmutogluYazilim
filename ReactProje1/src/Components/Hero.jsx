import React from "react";
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className="text-white flex justify-center pt-[400px] max-md:w-[430px] bg-gray-900">
      <div className="max-w-[1000px] w-full h-[700px] mx-auto text-center flex flex-col">
        <h1 className="md:text-7xl sm:text-2xl text-4xl text-[#00df9a] p-2 font-sansa">
          Karamahmutoğlu <span className="text-white">Web Tasarım</span>{" "}
        </h1>
        <h3 className="text-center p-2 text-3xl max-md:text-sm font-abc">
          Sizlere özgün web site, analiz ve daha fazlası..
        </h3>
        <div className="text-center">
          <h1 className="pb-2 text-2xl max-md:text-sm font-abc">Sunduğumuz hizmetler...</h1>
        
        <div className="font-abc"><ReactTyped
            strings={[
              "Web Tasarım",
              "WordPress",
              "Siteleriniz analizi", 
              "Danışmanlık",

            ]}
            typeSpeed={40}
            backSpeed={110}
            loop
  
          /></div>  
        </div>
        <div className="text-center mt-4">
          <button className="bg-green-900 p-4 rounded-lg hover:bg-green-600 font-abc">
            Paketlerimiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
