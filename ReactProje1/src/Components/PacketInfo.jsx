import React from "react";

const PacketInfo = () => {
  return (
    <div className="text-white bg-gray-900  h-[500px] max-md:h-[1100px] pt-32 flex flex-wrap px-48 gap-10 justify-center text-start">
      <div className="flex-col flex ">
        <div className="w-[350px]">
          <h1 className="font-bold text-2xl pb-5 font-sansa">Neden Karamahmutoğlu?</h1>
          <p className="font-abc">
            Karamahmutoğlu web tasarım size özgün tasarım, ekonomik paket,
            ücretsiz destek ve canlı yardım, en önemlisi güven sunar.
          </p>
        </div>
      </div>
      <div className="flex-col flex ">
        <div className="w-[350px]">
     
          <h1 className="font-bold text-2xl pb-5 font-sansa">Ücret iadesi</h1>
          <p className="font-abc">
           Ücret iadesi siteyi teslim aldığınız günden itibaren 30 gün içerisinde yapılmaktadır.
          </p>
        </div>
      </div>
      <div className="flex-col flex ">
        <div className="w-[350px]">
          <h1 className="font-bold text-2xl pb-5 font-sansa">Garanti</h1>
          <p className="font-abc">
          Sitelerimiz müşterilerimize 1 yıl garanti ile verilmektedir. 1 yıl boyunca oluşabilecek tüm hatalar tarafımızca karşılanmaktadır.
          </p>
        </div>
      </div>
      <div className="flex-col flex ">
        <div className="w-[350px]">
          <h1 className="font-bold text-2xl pb-5 font-sansa">Canlı yardım</h1>
          <p className="font-abc">
            Destek talebi oluşturarak bizlerle 7/24 iletişime geçebilirsiniz. Tarafınıza dönüşümüz maksimum 12 saat alacaktır.
          </p>
        </div>
      </div>
      <div className="flex-col flex ">
        <div className="w-[350px]">
          <h1 className="font-bold text-2xl pb-5 font-sansa">Ödeme seçenekleri</h1>
          <p className="font-abc">
            Ödemelerinizi KREDİ KARTI veya BANKA KARTI üzerinden yapabilirsiniz.
          </p>
        </div>
      </div>
      <div className="flex-col flex ">
        <div className="w-[350px]">
          <h1 className="font-bold text-2xl pb-5 font-sansa">Güvenlik</h1>
          <p className="font-abc">
           Site güvenliği oluşturabilecek herhangi bir tehditi paketiniz içerisinde yer alan süre boyunca bizler korumaktayız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PacketInfo;
