import { IoLeafSharp } from "react-icons/io5";

import { useEffect, useState } from "react";
import axios from "axios";
import RealisasiChart from "../components/RealisasiChart";
import EfisiensiChart from "../components/EfisiensiChart";


import AOS from 'aos';
import 'aos/dist/aos.css';

const PaluPage = () => {
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

    AOS.init({
      duration: 500,
      easting: "ease-in-out",
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
    <div className='hero bg-blue-50 mb-10'>
      <div className="relative flex justify-center items-center px-4 md:px-32 text-white py-32"
        style={{
          backgroundImage: `url('src/assets/img/geo_palu.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-blue-900 opacity-40'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            {/* Teks gambar tengah */}
            <div className="flex flex-col items-center leading-none">
              <div className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-full pt-3 px-4 hover:shadow-lg transition duration-300 mb-2 ">
                <img src="src/assets/logo/Selamat Datang di.png" alt="selamatdatang" className="w-48 mb-3" />
              </div>
              <img src="src/assets/logo/KOTA PALU.png" alt="kotapalu" className="w-auto mt-3" />
            </div>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          {/* <div className=" space-y-1 mt-5">
            <p className="text-sky-400 drop-shadow">"Maliu Ntinuvu"</p>
            <p className="text-sky-400 drop-shadow">Kenangan yang memudar</p>
          </div> */}
        </div>
      </div>


      {/* INFORMASI MENGENAI KOTA PALU */}
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
            Kota Palu
            </h1>
          </div>

          {/* Gambar */}
          <img src="src/assets/img/logokotapalu.png" alt="sulawesi tengah logo" className="w-52 md:w-46 h-auto"/>

          {/* Garis Vertikal / Horizontal */}
          <div className="w-full md:w-8 h-2 md:h-60 bg-blue-500 rounded-full md:my-0 my-2"></div>

          {/* Teks Penjelasan + Desktop Heading */}
          <div className="text-center md:text-left px-2 md:p-4">

            {/* Sekilas Tentang + Kabupaten Sigi (Desktop Only) */}
            <div className="hidden md:block">
              <div className="bg-yellow-200 w-fit md:ml-4 px-4 py-1 rounded-full">
                <h6 className="text-2xl text-amber-600">
                  Sekilas <span className="text-indigo-900">Tentang</span>
                </h6>
              </div>
              <h1 className="text-3xl font-bold text-indigo-800 mt-2">
              Kota Palu
              </h1>
            </div>

            {/* Paragraf Penjelasan */}
            <p className="mt-2 text-justify text-sm md:text-lg mx-2 md:mx-0">
            Kota Palu merupakan pusat pemerintahan, ekonomi, pendidikan, dan kebudayaan di Provinsi Sulawesi Tengah. Terletak di pesisir barat Pulau Sulawesi, kota ini menghadap langsung ke Teluk Palu dan dikelilingi oleh pegunungan, menjadikannya daerah dengan lanskap geografis yang unik dan kontras antara laut dan pegunungan.
            </p>
          </div>
        </div>

        {/* tampilan card */}
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
            {/* Geografis dan Topografi */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-amber-500">Geografis & Topografi</h3>
              <p className="text-sm text-gray-700">
                Kota Palu, ibu kota Sulawesi Tengah, memiliki luas sekitar 395,06 km<sup>2</sup>. Terletak di Teluk Palu dan dibelah Sungai Palu, dikelilingi pegunungan dan lembah dengan topografi bervariasi dari dataran rendah hingga perbukitan, dengan ketinggian antara 0 hingga 700 meter di atas permukaan laut. Posisi strategisnya menjadikan Palu sebagai pusat pemerintahan dan ekonomi regional.
              </p>
            </div>

            {/* Mata Pencaharian dan Ekonomi */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-700">
                Ekonomi Kota Palu didominasi oleh sektor jasa, perdagangan, dan industri pengolahan, dengan kontribusi signifikan dari sektor konstruksi dan pemerintahan. Mayoritas penduduk Kota Palu bekerja di sektor informal, terutama dalam perdagangan dan jasa. UMKM, yang mencakup kuliner, kerajinan, dan perdagangan, memainkan peran penting dan didukung melalui pelatihan serta akses permodalan.
              </p>
            </div>

            {/* Sosial Budaya */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-amber-500">Sosial & Budaya</h3>
              <p className="text-sm text-gray-700">
                Kota Palu kaya akan keberagaman budaya, dengan suku Kaili sebagai suku asli dan suku pendatang seperti Bugis dan Toraja. Masyarakat menjunjung tinggi nilai kekeluargaan, gotong royong, dan toleransi antarumat beragama. Tradisi lokal seperti seni tari, musik lokal, dan upacara adat Kaili masih dilestarikan. menjadikan Kota Palu sebagai tempat yang harmonis dan penuh dengan kekayaan budaya.
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
              Transfer ke daerah merupakan mekanisme pendanaan dari pemerintah pusat ke daerah, mencakup DAU, DAK, DBH, dan Dana Insentif Fiskal untuk pembangunan, infrastruktur, dan pelayanan publik.
            </p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
          Visualisasi Anggaran TKD <br />
          <span className="text-amber-400 mt-2 block">Kota Palu</span>
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
          <p className="mb-4 text-sm">Grafik berikut menampilkan efisiensi penyerapan TKD oleh Pemda Kota Palu.</p>
          <EfisiensiChart data={efisiensiData} isMobile={isMobile} />

        </div>
      </div>
    </div>
  )
}

export default PaluPage