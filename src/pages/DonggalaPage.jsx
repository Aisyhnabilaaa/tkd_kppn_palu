import { IoLeafSharp } from "react-icons/io5";

import { useEffect, useState } from "react";
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
  const [tahun, setTahun] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRealisasi = await axios.get(
          `http://localhost:3000/tkd/realisasi?daerah=Kabupaten Donggala&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `http://localhost:3000/tkd/efisiensi?daerah=Kabupaten Donggala&tahun=${tahun}`
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
          backgroundImage: `url('src/assets/img/donggala.jpg')`,
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
              <img src="src/assets/logo/KABUPATEN DONGGALA.png" alt="sulawesitengah" className="w-auto mt-3" />
            </div>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          {/* <p>"Roso, Risi, Rasa"</p>
          <p>Kuat, berwibawa, dan penuh kesadaran</p> */}
        </div>
      </div>


      {/* INFORMASI MENGENAI DONGGALA */}
      <div className="container mx-auto px-4 py-8">
        {/* <div className="flex flex-col md:flex-row items-center gap-6 mx-10 mb-10 bg-gray-200 drop-shadow-xl p-10 rounded-3xl" data-aos="fade-up" data-aos-duration="1000">
          <img src="src/assets/img/logo_donggala.png" alt="donggalalogo" className="w-72 h-auto" />
          <div className="text-center md:text-left bg-white p-5 rounded-2xl">
            <div className="bg-yellow-200 w-52 ml-4 rounded-full">
              <h6 className="text-2xl text-amber-600 ml-2">Sekilas <span className="text-indigo-900">Tentang</span></h6>
            </div>
            <h1 className="text-3xl font-bold ml-4 text-indigo-800 mt-2">Kabupaten Donggala</h1>
            <p className="mb-10 text-center mt-3 mx-5 text-lg text-justify">
              Kabupaten Donggala merupakan salah
              satu kabupaten tertua di Provinsi Sulawesi Tengah, yang memiliki sejarah panjang dan peran penting
              dalam perkembangan wilayah ini. Ibu kota kabupatennya adalah Banawa, yang terletak di pesisir barat
              Teluk Palu. Kabupaten ini berbatasan langsung dengan Kota Palu di sebelah timur, serta Kabupaten
              Parigi Moutong dan Sigi di sisi lainnya.
            </p>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
          <img
            src="src/assets/img/logo_donggala.png"
            alt="sulawesi tengah logo"
            className="w-64 md:w-72 h-auto"
          />
          <div className="w-full md:w-5 md:h-60 bg-blue-500 rounded-full md:my-0"></div>
          <div className="text-center md:text-left p-4">
            <div className="bg-yellow-200 w-fit mx-auto md:ml-4 px-4 rounded-full">
              <h6 className="text-xl md:text-2xl text-amber-600">Sekilas <span className="text-indigo-900">Tentang</span></h6>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-800 mt-2">Kabupaten Donggala</h1>
            <p className="mt-3 text-justify text-sm md:text-lg mx-2">
            Kabupaten Donggala merupakan salah satu kabupaten tertua di Provinsi Sulawesi Tengah, yang memiliki sejarah panjang dan peran penting dalam perkembangan wilayah ini. Ibu kota kabupatennya adalah Banawa, yang terletak di pesisir barat Teluk Palu. Kabupaten ini berbatasan langsung dengan Kota Palu di sebelah timur, serta Kabupaten Parigi Moutong dan Sigi di sisi lainnya.
            </p>
          </div>
        </div>

        {/* tampilan card */}
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
            {/* Geografis dan Topografi */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              {/* <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/geo_palu.jpeg" alt="Geografis" className="object-cover w-full h-full" />
              </div> */}
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Geografis & Topografi</h3>
              <p className="text-sm text-gray-700">
                Kabupaten Donggala memiliki luas sekitar 5.275 km<sup>2</sup> dengan kondisi geografis yang bervariasi, mulai dari pesisir pantai hingga wilayah pegunungan. Topografinya bervariasi, terdiri dari daerah pantai, dataran rendah, perbukitan, hingga pegunungan. Keanekaragaman kondisi geografis ini menjadikan Donggala memiliki potensi sumber daya alam yang kaya, baik di sektor kelautan, pertanian, maupun kehutanan.
              </p>
            </div>

            {/* Mata Pencaharian dan Ekonomi */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              {/* <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/umkm_palu.jpg" alt="Ekonomi" className="object-cover w-full h-full" />
              </div> */}
              <h3 className="text-xl font-semibold mb-2 text-amber-500">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-700">
                Ekonomi Donggala ditopang oleh sektor perikanan dan kelautan yang kaya, menjadikan mayoritas penduduk berprofesi sebagai nelayan dan pembudidaya hasil laut. Pariwisata bahari dan alam memiliki potensi besar, didukung pantai indah dan bawah laut menarik. UMKM, terutama pengolahan hasil laut dan kerajinan, turut berkontribusi pada ekonomi lokal.
              </p>
            </div>

            {/* Sosial Budaya */}
            <div className="bg-white text-justify rounded-xl p-6 shadow-md border-l-4 border-blue-800">
              {/* <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="/images/palu3.jpg" alt="Budaya" className="object-cover w-full h-full" />
              </div> */}
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Sosial & Budaya</h3>
              <p className="text-sm text-gray-700">
                Kabupaten Donggala memiliki kehidupan sosial budaya yang beragam, didominasi oleh suku Kaili dan etnis lainnya yang hidup berdampingan. Tradisi dan adat istiadat masih dijaga, terutama dalam upacara adat dan kegiatan masyarakat. Budaya maritim juga kuat mewarnai kehidupan sosial, khususnya di wilayah pesisir.
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
          <span className="text-amber-400 mt-2 block">Kabupaten Donggala</span>
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
          <p className="mb-4 text-sm">Grafik berikut menampilkan efisiensi penyerapan TKD oleh Pemda Kabupaten Donggala.</p>
          <EfisiensiChart data={efisiensiData} isMobile={isMobile} />
        </div>
      </div>
    </div>
  )
}

export default SultengPage