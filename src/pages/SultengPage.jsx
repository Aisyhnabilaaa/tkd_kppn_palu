import React, { useState, useEffect } from "react";
import { IoLeafSharp } from "react-icons/io5";
import axios from "axios";
import RealisasiChart from "../components/RealisasiChart";
import EfisiensiChart from "../components/EfisiensiChart";
import AOS from "aos";
import "aos/dist/aos.css";

const SultengPage = () => {
  const [realisasiData, setRealisasiData] = useState([]);
  const [efisiensiData, setEfisiensiData] = useState([]);

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 5 }, (_, i) =>
    String(currentYear - 3 + i)
  );
  const [tahun, setTahun] = useState(String(currentYear));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRealisasi = await axios.get(
          `https://charttkd-production.up.railway.app/tkd/realisasi?daerah=Sulawesi Tengah&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `https://charttkd-production.up.railway.app/tkd/efisiensi?daerah=Sulawesi Tengah&tahun=${tahun}`
        );

        const cleaned = resRealisasi.data.map((item) => ({
          ...item,
          pagu: Number(item.pagu),
          realisasi: Number(item.realisasi),
          persentase: Number(item.persentase),
          sisa_pagu: Number(item.sisa_pagu),
        }));

        setRealisasiData(cleaned);
        setEfisiensiData(resEfisiensi.data);
      } catch (err) {
        console.error("Gagal fetch data:", err);
      }
    };

    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });

    fetchData();
  }, [tahun]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero bg-blue-50 mb-10">
      {/* Header Section */}
      <div
        className="relative flex justify-center items-center px-4 md:px-32 text-white py-32"
        style={{
          backgroundImage: `url('src/assets/img/sulteng_alam.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        <div className="relative text-center w-full">
          <div className="flex items-center justify-center space-x-4">
            <IoLeafSharp className="text-sky-500 text-4xl md:text-6xl" />
            <div className="flex flex-col items-center leading-none">
              <div className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-full pt-2 px-3 hover:shadow-lg transition duration-300 mb-2">
                <img
                  src="src/assets/logo/Selamat Datang di.png"
                  alt="selamatdatang"
                  className="w-36 md:w-48 mb-2"
                />
              </div>
              <img
                src="src/assets/logo/SULAWESI TENGAH.png"
                alt="sulawesitengah"
                className="w-auto mt-2"
              />
            </div>
            <IoLeafSharp className="text-sky-500 text-4xl md:text-6xl scale-x-[-1]" />
          </div>
        </div>
      </div>

      {/* Sekilas Tentang */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 p-4 md:p-10 mb-5 md:mb-1">
          {/* Sekilas Tentang & Kabupaten Sigi (Mobile Only) */}
          <div className="block md:hidden text-center mb-2">
            <div className="bg-yellow-200 w-fit mx-auto px-4 py-1 rounded-full">
              <h6 className="text-base text-amber-600">
                Sekilas <span className="text-indigo-900">Tentang</span>
              </h6>
            </div>
            <h1 className="text-lg font-bold text-indigo-800 mt-1">
              Sulawesi Tengah
            </h1>
          </div>

          {/* Gambar */}
          <img src="src/assets/img/sultenglogo.png" alt="sulawesi tengah logo" className="w-52 md:w-64 h-auto"/>

          {/* Garis Vertikal / Horizontal */}
          <div className="w-full md:w-8 h-2 md:h-60 bg-blue-500 rounded-full md:my-0 my-2"></div>

          {/* Teks Penjelasan + Desktop Heading */}
          <div className="text-center md:text-left px-2 md:p-4">

            {/* Sekilas Tentang + prov sulteng (Desktop Only) */}
            <div className="hidden md:block">
              <div className="bg-yellow-200 w-fit md:ml-4 px-4 py-1 rounded-full">
                <h6 className="text-2xl text-amber-600">
                  Sekilas <span className="text-indigo-900">Tentang</span>
                </h6>
              </div>
              <h1 className="text-3xl font-bold text-indigo-800 mt-2">
                Sulawesi Tengah
              </h1>
            </div>

            {/* Paragraf Penjelasan */}
            <p className="mt-2 text-justify text-sm md:text-lg mx-2 md:mx-0">
            Sulawesi Tengah adalah salah satu provinsi di Pulau Sulawesi dengan ibu kota di Kota Palu. Provinsi ini resmi dibentuk pada 13 April 1964 melalui Undang-Undang Nomor 13 Tahun 1964. Sulawesi Tengah dikenal sebagai daerah yang kaya akan sumber daya alam serta keanekaragaman budaya.
            </p>
          </div>
        </div>


        {/* Card Info */}
        <div className=" " data-aos="fade-up" data-aos-duration="1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-blue-800 text-justify">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">Geografis & Topografi</h3>
              <p className="text-sm text-gray-700">
                Secara geografis, Sulawesi Tengah terletak di tengah Pulau Sulawesi, membentang antara 0°14' LU - 3°17' LS dan 119°21' BT - 124°22' BT. Luas wilayahnya sekitar 61.841,29 km<sup>2</sup>.
                Dalam sudut pandang topografis, Sulawesi Tengah memiliki bentang alam yang bervariasi, mulai dari pegunungan, dataran rendah, hingga garis pantai yang panjang.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-blue-800 text-justify">
              <h3 className="text-lg md:text-xl font-semibold text-amber-400 mb-2">Perekonomi</h3>
              <p className="text-sm text-gray-700">
                Perekonomian Sulawesi Tengah didukung oleh sektor pertanian, pertambangan nikel, industri pengolahan, perdagangan, dan jasa. Mayoritas penduduk bekerja di sektor pertanian, disusul perdagangan dan industri. UMKM penopang utama ekonomi daerah dalam bidang olahan hasil pertanian, kerajinan, kuliner, dan jasa.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border-l-4 border-blue-800 text-justify">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">Sosial & Budaya</h3>
              <p className="text-sm text-gray-700">
                Sulawesi Tengah memiliki keberagaman suku, budaya, dan bahasa daerah yang kaya, di antaranya suku Kaili, Bugis, Balantak, dan Mori. Tradisi lokal, seperti upacara adat dan seni tari, masih dijaga dan dilestarikan. Masyarakatnya menjunjung tinggi nilai kekeluargaan, gotong royong, serta hidup berdampingan secara harmonis dalam keragaman agama dan budaya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transfer ke Daerah */}
      <div className="px-4 sm:px-6 md:px-10 pt-14 mt-2 space-y-10 bg-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-100 p-6 md:p-10 rounded-xl">
          <div className="md:w-1/3 w-full">
            <div className="text-lg text-blue-500 font-bold mb-2 bg-amber-200 w-fit px-3">
              <p>Yuk Tahu!</p>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900">Transfer ke Daerah</h1>
            <div className="mt-2 h-1 w-16 bg-blue-400 rounded-full" />
          </div>
          <div className="md:w-2/3 w-full">
            <p className="text-gray-700 text-justify text-sm md:text-base">
            Transfer ke daerah adalah dana dari pemerintah pusat (APBN) yang dialokasikan kepada pemerintah daerah untuk membiayai urusan pemerintahan daerah. Dana ini mendukung desentralisasi fiskal dan pemerataan pembangunan di Indonesia. Jenis-jenis dana transfer meliputi: Dana Bagi Hasil (DBH), Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Insentif Daerah sebagai penghargaan kinerja daerah, serta dana desa.
            </p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
          Visualisasi Anggaran TKD <br />
          <span className="text-amber-400 mt-2 block">Sulawesi Tengah</span>
        </h1>

        {/* Dropdown Tahun */}
        <div className="flex justify-end px-4">
          <select
            className="border rounded px-2 py-1"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
          >
            {yearOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Chart Realisasi */}
        <div className="bg-white rounded-2xl shadow p-4 mx-2 md:mx-0">
          <h2 className="text-xl font-semibold mb-2">Realisasi Tahun {tahun}</h2>
          <p className="mb-4 text-sm">Grafik berikut menampilkan pagu, realisasi, serta sisa pagu dari masing-masing jenis transfer ke daerah.</p>
          <RealisasiChart data={realisasiData} isMobile={isMobile} />
        </div>

        {/* Chart Efisiensi */}
        <div className="bg-white rounded-2xl shadow p-4 mx-2 md:mx-0">
          <h2 className="text-xl font-semibold mb-2">Efisiensi Anggaran Tahun {tahun}</h2>
          <p className="mb-4 text-sm">Grafik berikut menampilkan efisiensi penyerapan TKD oleh Pemda Sulawesi Tengah.</p>
          <EfisiensiChart data={efisiensiData} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default SultengPage;
