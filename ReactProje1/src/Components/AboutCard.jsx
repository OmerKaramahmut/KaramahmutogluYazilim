import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const AboutCard = () => {
  return (
    <div className="flex justify-start ps-[55px] max-md:w-[550px] max-md:pb-10 max-md:justify-center">
      <div className=" bg-gray-700 shadow-lg shadow-gray-950 w-[300px] h-[520px]  rounded-t-lg items-start m-0 flex-col max-md:w-[400px] max-md:mt-[12px] px-8 ">
        <div className="w-full flex justify-start pt-5 ">
          <div className=" w-48 bg-gray-400 h-[2px]"></div>
        </div>
        <h1 className="text-start text-white font-bold mt-4 text-3xl  font-abc">TASARIM</h1>

        <div className="text-emerald-200 text-start pt-5 w-[85%] font-abc text-sm">
          Tasarımlarımız tamamen özgün ve bize aittir.
        </div>
        <div className="w-full flex justify-start pt-5 ">
          <div className=" w-32 bg-gray-400 h-[2px]"></div>
        </div>
        <h1 className="text-start font-bold text-white mt-5 text-3xl font-abc">GÜVENLİK</h1>
        <div className=" text-emerald-200  text-start pt-5 w-[85%] font-abc text-sm">
          Tüm alışveriş seçeneklerimiz yasalara uygun ve güvenlidir.
        </div>
        <div className="w-full flex justify-start pt-5 ">
          <div className=" w-32 bg-gray-400 h-[2px]"></div>
        </div>
        <h1 className="text-start font-bold text-white mt-5 text-3xl font-abc">PAYLAŞ</h1>
        <div className="text-gray-400   text-start pt-5 w-[85%] flex gap-5 ">
          <FaInstagram size={35} className="hover:text-gray-900 cursor-pointer"/> <FaXTwitter size={35} className="hover:text-gray-900 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
