import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClickNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-around items-center  h-22  max-md:w-[430px] fixed top-0 left-0 w-full bg-gray-900  z-50">
      <div className="logo">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-default font-sansa">
          Karamahmutoğlu
        </h1>
      </div>

      <ul className="hidden md:flex font-abc">
        <li className="p-4 hover:underline">
          <a href="">AnaSayfa</a>
        </li>
        <li className="p-4 hover:underline">
          <a href="">Hakkımda</a>
        </li>
        <li className="p-4 hover:underline">
          <a href="">Paketler</a>
        </li>
        <li className="p-4 hover:underline">
          <a href="">İletişim</a>
        </li>
      </ul>
      <div onClick={handleClickNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] ease-in-out duration-500 "
            : "fixed left-[-200%]"
        }
      >
        <ul className="pt-20 bg-gray-700 p-5 flex flex-col justify-center">
          <li className="p-4 mb-1 rounded-r-lg border-b-2">AnaSayfa</li>
          <li className="p-4 mb-1 rounded-r-lg border-b-2">Ben kimim?</li>
          <li className="p-4 mb-1  rounded-r-lg border-b-2">Paketler</li>
          <li className="p-4 mb-1  rounded-r-lg border-b-2">İletişim</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
