import React from "react";
import WebDesign from "../assets/webdesign.jpg";
import { ReactTyped } from "react-typed";

const Packet = () => {
  return (
    <div className="flex-col  bg-gray-900 max-md:h-[1900px]">
      <div className="flex justify-around max-md:flex-col max-md:items-center">
        <div className="text-white m-36 text-2xl ">
          <h3 className="pb-10 font-bold text-[#00df9a] font-sansa">
            Karamahmutoğlu <span className="text-white">Web Tasarım</span>
          </h3>
          <h1 className=" text-7xl pb-10 font-abc">
            Özgün ve güvenilir hizmet
          </h1>
          <p className="text-3xl font-abc">
            <ReactTyped
              strings={[
                "Kendinize özgü , güvenilir , ekonomik ve şık siteler..",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[400px] h-[400px] rounded-full"
            src={WebDesign}
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-700 h-[650px] flex justify-center gap-10 max-md:gap-3 ">
        <div className="bg-gray-700 w-[300px] h-[550px] max-md:w-[125px] max-md:h-[650px] text-white mt-[-25px] border-r-2 border-b-2 border-white shadow-2xl shadow-slate-400">
          <h1 className=" text-center text-4xl mt-3 font-bold max-md:text-lg font-sansa">
            Ekonomik Plan
          </h1>
          <h3 className="ms-3 mt-3 text-xl max-md:text-sm font-abc">
            15GB depolama alanı
          </h3>
          <h3 className="ms-3 mt-3 text-xl max-md:text-sm font-abc">
            2 Website
          </h3>
          <h3 className="ms-3 mt-3 text-xl max-md:text-sm font-abc">
            Telefon ve tablet için uygun
          </h3>
          <h3 className="ms-3 mt-3 text-xl max-md:text-sm font-abc">
            1 Yıl ücretsiz domain
          </h3>
          <h3 className="ms-3 mt-3 text-xl max-md:text-sm font-abc">
            Ücretsiz SSL
          </h3>
          <h3 className="ms-3 mt-4 text-xl max-md:text-sm font-abc">
            1 Ay ücretsiz site analizi
          </h3>
          <p className="mt-10  max-md:pt-[120px] text-2xl text-center text-blue-300 max-md:text-sm">
            ₺ 5000{" "}
          </p>
          <div className="flex justify-center items-center h-[110px]">
            {" "}
            <button className="bg-green-600 p-5 w-[200px] max-md:w-[100px] max-md:h-[70px]  max-md:text-sm text-xl border-r-4 border-b-4 border-green-700 hover:bg-green-800">
              SATIN AL
            </button>
          </div>
        </div>
        <div className="bg-gray-700 w-[300px] h-[590px]  max-md:w-[125px] max-md:h-[690px] text-white  mt-[-65px]  border-r-2 border-b-2 border-white shadow-2xl shadow-white">
          <h1 className="mt-[-22px] text-white text-3xl text-center bg-red-300 ms-14 w-48 max-md:w-32 p-3 border-r-2 border-b-2 border-red-200 max-md:ms-0 max-md:text-sm">
            Önerilen
          </h1>
          <h1 className=" text-center text-4xl mt-5 font-bold max-md:text-lg font-sansa">
            Yarı-Pro Plan
          </h1>
          <h3 className="ms-3 mt-3 text-md max-md:text-sm font-abc">
            30GB depolama alanı
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-sm font-abc">
            3 Website
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-sm font-abc">
            Telefon ve tablet için uygun
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-sm font-abc">
            3 Yıl ücretsiz domain
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-sm font-abc">
            Ücretsiz SSL
          </h3>
          <h3 className="ms-3 mt-4 text-md max-md:text-sm font-abc">
            3 Ay ücretsiz site analizi
          </h3>
          <h3 className="ms-3 mt-4 text-md max-md:text-sm font-abc">
            Web site güvenlik hizmeti
          </h3>
          <h3 className="ms-3 mt-4 text-md max-md:text-sm font-abc">
            Reklam & Sponsorluk
          </h3>
          <p className="mt-8 max-md:mt-9  text-2xl text-center text-blue-300 max-md:text-sm">
            ₺ 10000{" "}
          </p>
          <div className="flex justify-center items-center h-[110px]">
            {" "}
            <button className="bg-green-600 p-5 w-[200px] max-md:w-[100px] max-md:h-[70px]  max-md:text-sm text-xl border-r-4 border-b-4 border-green-700 hover:bg-green-800">
              SATIN AL
            </button>
          </div>
        </div>
        <div className="bg-gray-700 w-[300px] h-[550px] max-md:w-[125px] max-md:h-[650px] text-white   mt-[-25px] border-r-2 border-b-2 border-white shadow-2xl shadow-slate-400">
          <h1 className=" text-center text-4xl mt-5 font-bold max-md:text-lg font-sansa">
            Pro Plan
          </h1>
          <h3 className="ms-3 mt-3 text-md max-md:text-xs font-abc">
            100GB depolama alanı
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-xs font-abc">
            5 Website
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-xs font-abc">
            Telefon ve tablet için uygun
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-xs font-abc">
            5 Yıl ücretsiz domain
          </h3>
          <h3 className="ms-3 mt-3 text-md max-md:text-xs font-abc">
            Ücretsiz SSL
          </h3>
          <h3 className="ms-3 mt-4 text-md max-md:text-xs font-abc">
            Ücretsiz site analizi
          </h3>
          <h3 className="ms-3 mt-4 text-md max-md:text-xs font-abc">
            Web site güvenlik hizmeti
          </h3>
          <h3 className="ms-3 mt-4 text-md max-md:text-xs font-abc">
            Reklam & Sponsorluk
          </h3>
          <p className="mt-8 text-2xl text-center text-blue-300 max-md:text-sm max-md:mt-[98px] ">
            ₺ 20000{" "}
          </p>
          <div className="flex justify-center items-center h-[110px]">
            <button className="bg-green-600 p-5 w-[200px] max-md:w-[100px] max-md:h-[70px]  max-md:text-sm text-xl border-r-4 border-b-4 border-green-700 hover:bg-green-800  ">
              SATIN AL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packet;
