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
          `http://localhost:3000/tkd/realisasi?daerah=Parigi Moutong&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `http://localhost:3000/tkd/efisiensi?daerah=Parigi Moutong&tahun=${tahun}`
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
    <div className='hero bg-blue-50'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44'
        style={{
          backgroundImage: `url('src/assets/img/sulteng_alam.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

<div className='absolute inset-0 bg-sky-600 opacity-30'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4 text-center">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            <h1 className="lg:text-5xl text-2xl font-bold">Kabupaten Parigi Moutong</h1>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          <p>"Songu Lara Mombangu"</p>
          <p>Keluh kesah yang membangkitkan semangat</p>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
          <img src="src/assets/img/Lambang_Kabupaten_Parigi_Moutong.png" alt="sigilogo" className="w-28 h-auto" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-center mb-2">Informasi Kabupaten Parigi Moutong</h1>
            <p className="mb-10 text-center mt-6 mx-12 text-lg text-justify">Kabupaten Parigi Moutong merupakan
              salah satu daerah administratif di Provinsi Sulawesi Tengah yang memiliki posisi strategis di pesisir
              utara Pulau Sulawesi. Ibu kota kabupatennya berada di Parigi. Kabupaten ini secara resmi terbentuk
              pada tahun 2002 melalui pemekaran dari wilayah Kabupaten Donggala.
            </p>
          </div>
        </div>

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
                Parigi Moutong memiliki luas sekitar 6.231 km2 dengan bentangan wilayah dari pesisir Teluk Tomini hingga pegunungan di selatan. Kondisi geografisnya beragam sumber daya alam dan pemandangan indah (pantai, sungai, hutan tropis).
              </p>
            </div>

            {/* Mata Pencaharian dan Ekonomi */}
            <div className="bg-amber-400 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/umkm_palu.jpg" alt="Ekonomi" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-700">
                Ekonomi Parigi Moutong bertumpu pada pertanian dan perkebunan (kelapa, kakao, cengkeh, jagung) serta perikanan laut di Teluk Tomini, dengan kontribusi dari peternakan, kehutanan, UMKM, dan perdagangan.
              </p>
            </div>

            {/* Sosial Budaya */}
            <div className="bg-blue-500 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="/images/palu3.jpg" alt="Budaya" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Sosial & Budaya</h3>
              <p className="text-sm text-gray-200">
                Parigi Moutong memiliki 23 kecamatan dari Moutong hingga Sausu, dihuni sekitar 450 ribu jiwa (2023) dengan beragam etnis (Kaili, Tolitoli, Tomini, Bugis) yang hidup harmonis, menggunakan Bahasa Indonesia namun melestarikan bahasa daerah (Kaili, Tomini).
              </p>
            </div>
          </div>
        </div>



        {/* <div className="w-full bg-blue-900 py-10">
          <h2 className="text-white text-5xl text-center mb-10">Ada apa di Parigi Moutong</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12">
            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Geografis dan Topografi</h2>
              <p>Kabupaten Parigi Moutong memiliki luas wilayah sekitar 6.231 km<sup>2</sup>, membentang sepanjang garis pantai
                Teluk Tomini. Wilayah ini mencakup kombinasi antara dataran rendah pesisir, perbukitan, hingga
                pegunungan di bagian selatan. Kondisi geografis ini menjadikan kabupaten ini kaya akan sumber daya
                alam dan pemandangan alam yang indah, termasuk pantai, sungai, dan kawasan hutan tropis.</p>
            </div>

            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Mata Pencaharian dan Ekonomi</h2>
              <p>Perekonomian Kabupaten Parigi Moutong didominasi oleh sektor pertanian dan perkebunan. Komoditas
                unggulan mencakup kelapa, kakao, cengkeh, dan jagung. Selain itu, sektor perikanan laut menjadi
                penggerak ekonomi utama di wilayah pesisir, terutama di Teluk Tomini yang kaya akan hasil laut.
                Aktivitas peternakan, kehutanan, serta sektor UMKM dan perdagangan juga tumbuh secara bertahap.</p>
            </div>

            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Sosial dan Budaya</h2>
              <p>Parigi Moutong terdiri dari 23 kecamatan, yang tersebar dari wilayah barat (Moutong) hingga
                wilayah timur (Sausu). Jumlah penduduknya mencapai sekitar 450.000 jiwa (data 2023), dengan komposisi
                etnis yang cukup beragam. Suku Kaili, Tolitoli, Tomini, dan Bugis merupakan sebagian besar dari
                populasi lokal, dan mereka hidup berdampingan secara harmonis. Bahasa Indonesia digunakan sebagai
                bahasa pengantar, namun bahasa daerah seperti Kaili dan Tomini masih dipertahankan di berbagai komunitas.</p>
            </div>

            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Pariwisata</h2>
              <ul className="list-disc pl-5">
                <li><strong>Pantai Mosing</strong> – Pantai dengan pasir putih dan air laut yang jernih</li>
                <li><strong>Danau Parigi</strong> – Danau air tawar yang terletak tidak jauh dari ibu kota kabupaten</li>
                <li><strong>Air Terjun Bidadari</strong> – Air terjun dengan pemandangan alam yang asri</li>
                <li><strong>Bukit Mandiangin</strong> – Menawarkan pemandangan Teluk Tomini yang indah</li>
                <li><strong>Wisata Bahari di sepanjang pesisir Teluk Tomini</strong> – Potensi untuk diving, snorkeling, dan wisata pantai lainnya</li>
              </ul>
            </div>
            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Infrastruktur</h2>
              <p>
                Kabupaten Parigi Moutong terus mengalami perkembangan. Jalan penghubung antar kecamatan dan akses ke
                wilayah pedalaman telah diperbaiki secara bertahap. Beberapa proyek nasional juga telah menjangkau
                wilayah ini, termasuk pembangunan pelabuhan dan peningkatan layanan transportasi laut.
              </p>
            </div>
            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Data Statistik</h2>
              <p>Luas: 6.231,85 km<sup>2</sup><br /> Penduduk (2023): ± 457.031 jiwa<br /> Kecamatan: 23 <br />Desa/Kelurahan: 283</p>
            </div>
          </div>
        </div> */}


        <div className="p-8 bg-yellow-400 mt-20 drop-shadow-md">
          {/* Teks Judul */}
          <h1 className="font-serif font-bold text-center text-xl text-blue-500">Yuk Tahu!</h1>
          <h1 className="relative font-bold text-4xl text-blue-800 p-2 text-center">
            Transfer ke Daerah Sulawesi Tengah
          </h1>
          <hr class="border-t-2 border-gray-300 w-1/2 mx-auto " />

          <div className="flex items-center justify-center space-x-8 mt-5 mx-8">
            {/* Paragraf */}
            <p className=" text-gray-500 text-justify">
              Transfer ke daerah merupakan salah satu mekanisme pendanaan yang diberikan oleh pemerintah pusat kepada pemerintah daerah guna mendukung pelaksanaan pembangunan serta penyelenggaraan pemerintahan daerah. Di Sulawesi Tengah, transfer ke daerah mencakup berbagai jenis pendanaan seperti Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Bagi Hasil (DBH), serta Dana Insentif Fiskal. Dana ini bertujuan untuk meningkatkan kesejahteraan masyarakat, mempercepat pembangunan infrastruktur, serta mendukung pelayanan publik di tingkat provinsi dan kabupaten/kota.
            </p>
          </div>
        </div>

        <div className="p-6 space-y-10 bg-gray-50 min-h-screen pt-14">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Visualisasi Anggaran TKD - PARIGI MOUTONG
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
            <h2 className="text-xl font-semibold mb-2">Efisiensi Anggaran Tahun {tahun}</h2>
            <EfisiensiChart data={efisiensiData} />
          </div>

          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Realisasi Tahun {tahun}</h2>
            <RealisasiChart data={realisasiData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SultengPage