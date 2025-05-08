import React, { useState, useEffect } from "react";

import { IoLeafSharp } from "react-icons/io5";
import axios from "axios";
import RealisasiChart from "../components/RealisasiChart";
import EfisiensiChart from "../components/EfisiensiChart";

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

    fetchData();
  }, [tahun]);

  return (
    <div className='hero bg-gray-50'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44'
        style={{
          backgroundImage: `url('src/assets/img/sulteng_alam.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-blue-900 opacity-30'></div>

        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            {/* Teks gambar tengah */}
            <div className="flex flex-col items-center leading-none">
              <div className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-full pt-3 px-4 hover:shadow-lg transition duration-300 mb-2 ">
                <img src="src/assets/logo/Selamat Datang di.png" alt="selamatdatang" className="w-48 mb-3" />
              </div>
              <img src="src/assets/logo/SULAWESI TENGAH.png" alt="sulawesitengah" className="w-auto" />
            </div>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>

          {/* Deskripsi bawah */}
          <p className="mt-4 text-base">
            Sebuah provinsi di bagian tengah Pulau Sulawesi, Indonesia.
          </p>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
          <img src="src/assets/img/Logo_Provinsi_Sulawesi_Tengah.png" alt="sultenglogo" className="w-28 h-auto" />
          <div className="text-center md:text-left">
            <div className="bg-yellow-200 rounded-tr-full w-96">
              <h6 className="text-2xl text-amber-600 ml-2">Sekilas <span className="text-indigo-900">Tentang</span></h6>
              <h1 className="text-3xl font-bold text-indigo-800 ml-4">Sulawesi Tengah</h1>
            </div>
            <p className="mb-10 text-center mt-3 mx-5 text-lg text-justify">
              Sulawesi Tengah adalah salah satu provinsi di Pulau Sulawesi dengan ibu kota di Kota Palu.
              Memiliki luas wilayah sekitar 61.841 km<sup>2</sup> dan terdiri dari 13 kabupaten serta 1 kota.
              Provinsi ini dikenal sebagai daerah yang kaya akan sumber daya alam dan keanekaragaman budaya.</p>
          </div>
        </div>

        {/* tampilan card */}
        <div className=" ">
          {/* <h2 className="text-white text-5xl text-center mb-12">Ada apa di Kota Palu</h2> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {/* Geografis dan Topografi */}
            <div className="bg-amber-400 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/geo_palu.jpeg" alt="Geografis" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Geografis & Topografi</h3>
              <p className="text-sm text-gray-700">
                Sulawesi Tengah memiliki bentang alam yang bervariasi, mulai dari pegunungan, dataran rendah, hingga garis pantai yang panjang.
              </p>
            </div>

            {/* Mata Pencaharian dan Ekonomi */}
            <div className="bg-blue-500 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/umkm_palu.jpg" alt="Ekonomi" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-200">
                Masyarakat Sulawesi Tengah banyak bergantung pada pertanian, perikanan, pertambangan, serta UMKM dan perdagangan lokal.
              </p>
            </div>

            {/* Sosial Budaya */}
            <div className="bg-amber-400 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="/images/palu3.jpg" alt="Budaya" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Sosial & Budaya</h3>
              <p className="text-sm text-gray-700">
                Masyarakat Sulawesi Tengah terdiri dari berbagai suku seperti Kaili, Bugis, Pamona, dan Balantak.
                Berbagai upacara adat dan tarian tradisional masih dilestarikan, termasuk Mombowa dan Dero.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="p-8 bg-yellow-400 mt-20 drop-shadow-md">
        {/* Teks Judul */}
        <h1 className="font-serif font-bold text-center text-xl text-blue-500">Yuk Tahu!</h1>
        <h1 className="relative font-bold text-4xl text-blue-800 p-2 text-center">
          Transfer ke Daerah Kota Palu
        </h1>
        <hr className="border-t-2 border-blue-300 w-1/2 mx-auto" />

        <div className="flex items-center justify-center space-x-8 mt-5 mx-8">
          {/* Paragraf */}
          <p className=" text-gray-800 text-justify">
            Transfer ke daerah merupakan salah satu mekanisme pendanaan yang diberikan oleh pemerintah pusat kepada pemerintah daerah guna mendukung pelaksanaan pembangunan serta penyelenggaraan pemerintahan daerah. Di Sulawesi Tengah, transfer ke daerah mencakup berbagai jenis pendanaan seperti Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Bagi Hasil (DBH), serta Dana Insentif Fiskal. Dana ini bertujuan untuk meningkatkan kesejahteraan masyarakat, mempercepat pembangunan infrastruktur, serta mendukung pelayanan publik di tingkat provinsi dan kabupaten/kota.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-10 bg-gray-50 min-h-screen pt-14">
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          Visualisasi Anggaran TKD - SULAWESI TENGAH
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
          <RealisasiChart data={realisasiData} />
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Efisiensi Anggaran Tahun {tahun}</h2>
          <p>Efisiensi adalah</p>
          <EfisiensiChart data={efisiensiData} />
        </div>
      </div>
    </div>
  )
}

export default SultengPage