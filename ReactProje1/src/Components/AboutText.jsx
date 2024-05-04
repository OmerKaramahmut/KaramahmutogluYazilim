import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

const AboutText = () => {
  return (
    <div className="flex pt-[45px] gap-10 max-md:flex-col">
      <div class="flex justify-center  gap-x-16 text-white">
        <div class="w-[300px] h-[340px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden w-full h-full bg-gray-700 shadow-gray-900 shadow-xl">
              <div className="w-full flex flex-col justify-center pt-5 items-start h-full px-8">
                <div className=" w-48 bg-gray-400 h-[2px]"></div>
                <div>
                  <p className="text-white text-4xl flex-col pt-5 ps-5 font-sansa">
                    Öğrenim
                    <div>
                      <span className="ps-5">Hayatı</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-700 overflow-hidden shadow-gray-900 shadow-xl">
              <div class="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
                <h1 class="text-3xl font-semibold">Öğrenim Hayatı</h1>
                <p className="text-white pt-10 -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-100 font-abc">
                  Lise öğrenimimi Çatalca Çok Programlı Anadolu lisesi Web tasarım
                  bölümünde lisans öğrenimimi ise Kocaeli Üniversitesi Bilgisayar
                  Programcılığı bölümünde tamamladım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="  flex justify-center  gap-x-16 text-white">
        <div class="w-[300px] h-[340px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden  w-full h-full bg-gray-700 shadow-gray-900 shadow-xl">
              <div className="w-full flex flex-col justify-center pt-5 items-start h-full px-8">
                <div className=" w-48 bg-gray-400 h-[2px]"></div>
                <div>
                  <p className="text-white text-4xl flex-col pt-5 ps-5 font-sansa">
                    İş
                    <div>
                      <span className="ps-5">Deneyimleri</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-700 overflow-hidden shadow-gray-900 shadow-xl">
              <div class="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
                <h1 class="text-3xl font-semibold pt-5">İş deneyimleri</h1>

                <p className="text-white pt-10 -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-100 font-abc">
                  2017 Yılında Akbank şirketinde stajımı tamamladım. Staj
                  sonrası aile şirketinde çalışıp 2023 yılından itibaren kendimi
                  Front-end Dev. olarak geliştirmekteyim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div class="  flex justify-center  text-white">
        <div class="w-[300px] h-[340px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden  w-full h-full bg-gray-700 shadow-gray-900 shadow-xl ">
              <div className="w-full flex flex-col justify-center pt-5 items-start h-full px-8">
                <div className=" w-48 bg-gray-400 h-[2px]"></div>
                <div>
                  <p className="text-white text-4xl flex-col pt-5 ps-5 font-sansa">
                    Bildiği
                    <div>
                      <span className="ps-5">Diller</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-700 overflow-hidden shadow-gray-900 shadow-xl">
              <div class="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
                <h1 class="text-3xl font-semibold">Bildiği Diller</h1>

                <p className="text-white pt-10 -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-100 font-abc">
                  Hazırladığım projeleri HTML / CSS / JS dilleri ile yazmaktayım
                  kütüphane olarak Boostrap & TailwindCSS / React
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
