import React from "react";
import { FaInstagram,FaYoutube  } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex justify-evenly py-10 max-md:flex-col max-md:gap-10 max-md:items-center">
        <div className="logo">
          {" "}
          <h1 className="text-green-600 font-bold text-4xl p-5 cursor-default font-sansa">
            Karamahmutoğlu
          </h1>
        </div>
        <div className="flex flex-col text-white ">
          <ul>
            <li className="flex flex-col max-md:items-center font-abc">
              <a className="hover:underline" href="">
                AnaSayfa
              </a>
              <a className="hover:underline" href="">Hakkımda</a>
              <a className="hover:underline" href="">Paketler</a>
              <a className="hover:underline" href="">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white">
          <ul>
          <li className="flex flex-col max-md:items-center font-abc ">
              <a className="hover:underline" href="">
                Canlı Yardım
              </a>
              <a className="hover:underline" href="">Sık sorulan sorular</a>
              <a className="hover:underline" href="">Neden karamahmutoğlu?</a>
              <a className="hover:underline" href="">Ofislerimiz</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white max-md:items-center">
          <ul>
            <li className="flex flex-col">
              <a href="" className="text-3xl hover:scale-150"><FaInstagram/></a>
              <a href="" className="text-3xl hover:scale-150"><FaYoutube/></a>
              <a href="" className="text-3xl hover:scale-150"><FaXTwitter/></a>
              <a href="" className="text-3xl hover:scale-150"><IoMail/></a>
            
            
            </li>
          </ul>
        </div>
      </div>
      <h1 className="flex justify-center text-white">2024 Copyright © Tüm Hakları Saklıdır.</h1>
    </div>
  );
};

export default Footer;
