import { IoLeafSharp } from "react-icons/io5";

import { useEffect, useState } from "react";
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
  const [tahun, setTahun] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRealisasi = await axios.get(
          `http://localhost:3000/tkd/realisasi?daerah=Kota Palu&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `http://localhost:3000/tkd/efisiensi?daerah=Kota Palu&tahun=${tahun}`
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
          backgroundImage: `url('src/assets/img/wisatapalu.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-black opacity-40'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4 text-center">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            <h1 className="lg:text-5xl text-2xl font-bold">Kota Palu</h1>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          <div className=" space-y-1">
            <p className="text-sky-400 drop-shadow">"Maliu Ntinuvu"</p>
            <p className="text-sky-400 drop-shadow">Kenangan yang memudar</p>
          </div>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">

        <div className=" ">
          <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
            <img src="src/assets/img/Lambang_Kota_Palu.png" alt="sigilogo" className="w-32 h-auto" />
            <div className="text-center md:text-left">
              <div className="bg-yellow-100 rounded-tr-full w-96">
                <h6 className="text-2xl text-amber-400 ml-2">Sekilas <span className="text-blue-800">Tentang</span></h6>
                <h1 className="text-5xl font-bold ml-4">Kota Palu</h1>
              </div>
              <p className="mb-10 text-center mt-3 mx-5 text-lg text-justify">
                Kota Palu merupakan pusat pemerintahan,
                ekonomi, pendidikan, dan kebudayaan di Provinsi Sulawesi Tengah. Terletak di pesisir barat Pulau Sulawesi,
                kota ini menghadap langsung ke Teluk Palu dan dikelilingi oleh pegunungan, menjadikannya daerah dengan
                lanskap geografis yang unik dan kontras antara laut dan pegunungan.
              </p>
            </div>
          </div>

          {/* tampilan card */}
          <div className=" ">
            {/* <h2 className="text-white text-5xl text-center mb-12">Ada apa di Kota Palu</h2> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
              {/* Geografis dan Topografi */}
              <div className="bg-blue-500 text-center rounded-xl p-6 shadow-md">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src="src/assets/img/geo_palu.jpeg" alt="Geografis" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">Geografis & Topografi</h3>
                <p className="text-sm text-gray-200">
                  Kota Palu terletak di teluk yang diapit oleh pegunungan dan memiliki topografi yang unik berbentuk huruf U.
                </p>
              </div>

              {/* Mata Pencaharian dan Ekonomi */}
              <div className="bg-amber-400 text-center rounded-xl p-6 shadow-md">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src="src/assets/img/umkm_palu.jpg" alt="Ekonomi" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Ekonomi & UMKM</h3>
                <p className="text-sm text-gray-700">
                  Ekonomi ditopang oleh sektor perdagangan, jasa, pendidikan, serta UMKM seperti kuliner dan kerajinan.
                </p>
              </div>

              {/* Sosial Budaya */}
              <div className="bg-blue-500 text-center rounded-xl p-6 shadow-md">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src="/images/palu3.jpg" alt="Budaya" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">Sosial & Budaya</h3>
                <p className="text-sm text-gray-200">
                  Tradisi Kaili seperti Tari Raego dan makanan khas Kaledo masih dilestarikan oleh masyarakat Palu.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="p-8 bg-blue-500 mt-20 drop-shadow-md">
          {/* Teks Judul */}
          <h1 className="font-serif font-bold text-center text-xl text-yellow-100">Yuk Tahu!</h1>
          <h1 className="relative font-bold text-4xl text-yellow-300 p-2 text-center">
            Transfer ke Daerah Kota Palu
          </h1>
          <hr className="border-t-2 border-yellow-300 w-1/2 mx-auto" />

          <div className="flex items-center justify-center space-x-8 mt-5 mx-8">
            {/* Paragraf */}
            <p className=" text-gray-100 text-justify">
              Transfer ke daerah merupakan salah satu mekanisme pendanaan yang diberikan oleh pemerintah pusat kepada pemerintah daerah guna mendukung pelaksanaan pembangunan serta penyelenggaraan pemerintahan daerah. Di Sulawesi Tengah, transfer ke daerah mencakup berbagai jenis pendanaan seperti Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Bagi Hasil (DBH), serta Dana Insentif Fiskal. Dana ini bertujuan untuk meningkatkan kesejahteraan masyarakat, mempercepat pembangunan infrastruktur, serta mendukung pelayanan publik di tingkat provinsi dan kabupaten/kota.
            </p>
          </div>
        </div>

        {/* GRAFIK TKD PALU */}
        <div className="p-6 space-y-10 bg-gray-50 min-h-screen pt-14">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Visualisasi Anggaran TKD - KOTA PALU
          </h1>

          {/* Dropdown Tahun */}
          <div className="flex justify-end mb-4">
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

          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Realisasi Tahun {tahun}</h2>
            <RealisasiChart data={realisasiData} />
          </div>

          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Efisiensi Anggaran Tahun {tahun}</h2>
            <EfisiensiChart data={efisiensiData} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default SultengPage