import React, { useState, useEffect } from "react";

import { IoLeafSharp } from "react-icons/io5";
import axios from "axios";
import RealisasiChart from "../components/RealisasiChart";
import EfisiensiChart from "../components/EfisiensiChart";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SultengPage = () => {
  const [realisasiData, setRealisasiData] = useState([]);
  const [efisiensiData, setEfisiensiData] = useState([]);

  const currentYear = new Date().getFullYear()
  const yearOptions = Array.from({ length: 5 }, (_, i) =>
    String(currentYear - 3 + i)
  )
  const [tahun, setTahun] = useState(String(currentYear))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRealisasi = await axios.get(
          `http://localhost:3000/tkd/realisasi?daerah=Sulawesi Tengah&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `http://localhost:3000/tkd/efisiensi?daerah=Sulawesi Tengah&tahun=${tahun}`
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
      easting: "ease-in-out",
      once: true,
    });

    fetchData();
  }, [tahun]);

  return (
    <div className='hero bg-blue-50'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44'
        style={{
          backgroundImage: `url('src/assets/img/sulteng_alam.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-blue-900 opacity-30'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            {/* Teks gambar tengah */}
            <div className="flex flex-col items-center leading-none">
              <div className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-full pt-3 px-4 hover:shadow-lg transition duration-300 mb-2 ">
                <img src="src/assets/logo/Selamat Datang di.png" alt="selamatdatang" className="w-48 mb-3" />
              </div>
              <img src="src/assets/logo/SULAWESI TENGAH.png" alt="sulawesitengah" className="w-auto mt-3" />
            </div>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row items-center gap-6 mx-10 p-10 rounded-3xl">
          <img src="src/assets/img/sultenglogo.png" alt="sulawesi tengah logo" className="w-80 h-auto" />
          <div className="w-5 h-60 ml-5 rounded-full h-32 bg-blue-500"></div>

          <div className="text-center md:text-left p-5 rounded-2xl">
            <div className="bg-yellow-200 w-52 ml-4 rounded-full">
              <h6 className="text-2xl text-amber-600 ml-2">Sekilas <span className="text-indigo-900">Tentang</span></h6>
            </div>
            <h1 className="text-3xl font-bold ml-4 text-indigo-800 mt-2">Sulawesi Tengah</h1>
            <p className=" text-center mt-3 mx-5 text-lg text-justify">
              Sulawesi Tengah adalah salah satu provinsi di Pulau Sulawesi dengan ibu kota di Kota Palu.
              Memiliki luas wilayah sekitar 61.841 km<sup>2</sup> dan terdiri dari 13 kabupaten serta 1 kota.
              Provinsi ini dikenal sebagai daerah yang kaya akan sumber daya alam dan keanekaragaman budaya.
            </p>
          </div>
        </div>

        {/* tampilan card */}
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
            {/* Geografis dan Topografi */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Geografis & Topografi</h3>
              <p className="text-sm text-gray-700"> Secara geografis, Sulawesi Tengah terletak di tengah Pulau Sulawesi, membentang antara 0°14' LU - 3°17' LS dan 119°21' BT - 124°22' BT. Luas wilayahnya sekitar 61.841,29 km<sup>2</sup>.
                Dalam sudut pandang topografis, Sulawesi Tengah memiliki bentang alam yang bervariasi, mulai dari pegunungan, dataran rendah, hingga garis pantai yang panjang.
              </p>
            </div>

            {/* Mata Pencaharian dan Ekonomi */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-700">
                Perekonomian Sulawesi Tengah didukung oleh sektor pertanian, pertambangan nikel, industri pengolahan, perdagangan, dan jasa. Mayoritas penduduk bekerja di sektor pertanian, disusul perdagangan dan industri. UMKM penopang utama ekonomi daerah dalam bidang olahan hasil pertanian, kerajinan, kuliner, dan jasa.
              </p>
            </div>

            {/* Sosial Budaya */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Sosial & Budaya</h3>
              <p className="text-sm text-gray-700">
                Sulawesi Tengah memiliki keberagaman suku, budaya, dan bahasa daerah yang kaya, di antaranya suku Kaili, Bugis, Balantak, dan Mori. Tradisi lokal, seperti upacara adat dan seni tari, masih dijaga dan dilestarikan. Masyarakatnya menjunjung tinggi nilai kekeluargaan, gotong royong, serta hidup berdampingan secara harmonis dalam keragaman agama dan budaya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-10 bg-gray-50 min-h-screen pt-14 mt-16">
        <div className="flex items-start bg-gray-100 p-10 rounded-xl space-x-8">
          {/* Kiri: Judul dan garis */}
          <div className="w-1/3">
            <div className="text-xl text-blue-500 font-bold mb-2 bg-amber-200 w-32">
              <p className="ml-3">Yuk Tahu!</p>
            </div>
            <h1 className="text-4xl font-bold text-blue-900 leading-tight">Transfer ke Daerah </h1>
            <div className="mt-2 h-1 w-16 bg-blue-400 rounded-full" />
          </div>

          {/* Kanan: Paragraf */}
          <div className="w-2/3">
            <p className="text-gray-700 text-base text-justify">
              Transfer ke daerah merupakan salah satu mekanisme pendanaan yang diberikan oleh pemerintah pusat kepada pemerintah daerah guna mendukung pelaksanaan pembangunan serta penyelenggaraan pemerintahan daerah. Di Sulawesi Tengah, transfer ke daerah mencakup berbagai jenis pendanaan seperti Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Bagi Hasil (DBH), serta Dana Insentif Fiskal. Dana ini bertujuan untuk meningkatkan kesejahteraan masyarakat, mempercepat pembangunan infrastruktur, serta mendukung pelayanan publik di tingkat provinsi dan kabupaten/kota.
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Visualisasi Anggaran TKD <br />
          <span className="text-amber-400 mt-10"> Sulawesi Tengah </span>
        </h1>

        {/* Dropdown Tahun */}
        <div className="flex justify-end mb-4">
          <select
            className="border rounded px-2 py-1"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
          >
            {yearOptions.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Realisasi Tahun {tahun}</h2>
          <p>Grafik berikut menampilkan pagu, realisasi, serta sisa pagu dari masing masing jenis transfer ke daerah pada Pemda Sulawesi Tengah</p>
          <RealisasiChart data={realisasiData} />
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Efisiensi Anggaran Tahun {tahun}</h2>
          <p>Grafik berikut menampilkan seberapa efisien penyerapan Transfer ke Daerah lingkup pemda Provinsi Sulawesi Tengah</p>
          <EfisiensiChart data={efisiensiData} />
        </div>
      </div>
    </div>
  )
}

export default SultengPage