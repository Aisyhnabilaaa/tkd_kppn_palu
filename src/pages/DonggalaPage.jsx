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

    fetchData();
  }, [tahun]);

  return (
    <div className='hero bg-blue-50'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44'
        style={{
          backgroundImage: `url('src/assets/img/donggala.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-sky-600 opacity-30'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4 text-center">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            <h1 className="lg:text-5xl text-2xl font-bold">Kabupaten Donggala</h1>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          <p>"Roso, Risi, Rasa"</p>
          <p>Kuat, berwibawa, dan penuh kesadaran</p>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
          <img src="src/assets/img/Lambang_Kabupaten_Donggala.png" alt="sigilogo" className="w-28 h-auto" />
          <div className="text-center md:text-left">
            <div className="bg-yellow-100 rounded-tr-full w-96">
              <h6 className="text-2xl text-amber-400 ml-2">Sekilas <span className="text-blue-800">Tentang</span></h6>
              <h1 className="text-3xl font-bold ml-4">Kabupaten Donggala</h1>
            </div>
            <p className="mb-10 text-center mt-3 mx-5 text-base text-justify">
              Kabupaten Donggala merupakan salah
              satu kabupaten tertua di Provinsi Sulawesi Tengah, yang memiliki sejarah panjang dan peran penting
              dalam perkembangan wilayah ini. Ibu kota kabupatennya adalah Banawa, yang terletak di pesisir barat
              Teluk Palu. Kabupaten ini berbatasan langsung dengan Kota Palu di sebelah timur, serta Kabupaten
              Parigi Moutong dan Sigi di sisi lainnya.
            </p>
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
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Geografis & Topografi</h3>
              <p className="text-sm text-gray-700">
                Donggala, kabupaten di Sulawesi Tengah, termasuk yang terluas, terpadat, dan paling banyak penduduknya keempat di provinsi sulawesi tengah. Letaknya mengelilingi Kota Palu dan berbatasan dengan beberapa kabupaten lain di sekitarnya.
              </p>
            </div>

            {/* Mata Pencaharian dan Ekonomi */}
            <div className="bg-blue-500 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/umkm_palu.jpg" alt="Ekonomi" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-200">
                Ekonomi Donggala terutama ditopang oleh pertanian (padi, jagung, kakao, kelapa, cengkeh), perikanan (hasil laut), perkebunan, kehutanan, dan UMKM.
              </p>
            </div>

            {/* Sosial Budaya */}
            <div className="bg-amber-400 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="/images/palu3.jpg" alt="Budaya" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Sosial & Budaya</h3>
              <p className="text-sm text-gray-700">
                Donggala dulunya adalah pusat pemerintahan kolonial dan pelabuhan dagang, yang jejaknya masih terlihat pada bangunan tua dan pelabuhan lama. Kabupaten ini juga kaya akan tradisi adat, seperti upacara Kaili, musik, dan tarian tradisional.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-full bg-blue-900 py-10">
          <h2 className="text-white text-5xl text-center mb-10">Ada apa di Donggala</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12">
            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Geografis dan Topografi</h2>
              <p></p>
            </div>

            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Mata Pencaharian dan Ekonomi</h2>
              <p>Perekonomian Donggala mayoritas bergerak di sektor pertanian, perikanan, dan perkebunan. Hasil utama dari sektor pertanian mencakup padi, jagung, kakao, kelapa, dan cengkeh. Sedangkan wilayah pesisirnya mengandalkan hasil laut dari penangkapan dan budidaya ikan. Selain itu, sektor kehutanan dan UMKM juga ikut menopang ekonomi masyarakat.</p>
            </div>

            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Sosial dan Budaya</h2>
              <p>Donggala memiliki peran penting sebagai bekas pusat pemerintahan kolonial dan pelabuhan dagang pada masa lalu. Bangunan-bangunan tua dan pelabuhan lama menjadi saksi sejarah masa penjajahan Belanda. Selain itu, Donggala juga masih melestarikan berbagai tradisi adat, seperti upacara adat Kaili, musik tradisional, serta tari-tarian daerah.</p>
            </div>

            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Pariwisata</h2>
              <ul className="list-disc pl-5">
                <li><strong>Pantai Tanjung Karang</strong> – Pantai dengan pasir putih dan air laut yang jernih</li>
                <li><strong>Pantai Boneoge</strong> – Danau air tawar yang terletak tidak jauh dari ibu kota kabupaten</li>
                <li><strong>Air Terjun Bidadari</strong> – Air terjun dengan pemandangan alam yang asri</li>
                <li><strong>Bukit Mandiangin</strong> – Menawarkan pemandangan Teluk Tomini yang indah</li>
                <li><strong>Wisata Bahari di sepanjang pesisir Teluk Tomini</strong> – Potensi untuk diving, snorkeling, dan wisata pantai lainnya</li>
              </ul>
            </div>
            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Infrastruktur</h2>
              <p>
                Donggala memiliki sejumlah sekolah dari jenjang dasar hingga menengah, serta fasilitas kesehatan seperti puskesmas dan rumah sakit daerah di Banawa. Meski begitu, beberapa wilayah terpencil masih memerlukan peningkatan infrastruktur dan layanan publik.
              </p>
            </div>
            <div className="shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Data Statistik</h2>
              <p>Luas Wilayah: 4.208,43 km<sup>2</sup><br /> Jumlah Penduduk (Estimasi 2023): ± 310.000 jiwa<br /> Kecamatan: 16 <br />Desa/Kelurahan: 167 <br />Kepadatan Penduduk (Estimasi 2023): ± 73,7 jiwa/km<sup>2</sup></p>
            </div>
          </div>
        </div> */}


        <div className="p-8 bg-blue-500 mt-20 drop-shadow-md">
          {/* Teks Judul */}
          <h1 className="font-serif font-bold text-center text-xl text-yellow-200">Yuk Tahu!</h1>
          <h1 className="relative font-bold text-4xl text-yellow-400 p-2 text-center">
            Transfer ke Daerah Sulawesi Tengah
          </h1>
          <hr class="border-t-2 border-gray-300 w-1/2 mx-auto " />

          <div className="flex items-center justify-center space-x-8 mt-8">
            {/* Paragraf */}
            <p className=" text-gray-200 text-justify">
              Transfer ke daerah merupakan salah satu mekanisme pendanaan yang diberikan oleh pemerintah pusat kepada pemerintah daerah guna mendukung pelaksanaan pembangunan serta penyelenggaraan pemerintahan daerah. Di Sulawesi Tengah, transfer ke daerah mencakup berbagai jenis pendanaan seperti Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Bagi Hasil (DBH), serta Dana Insentif Fiskal. Dana ini bertujuan untuk meningkatkan kesejahteraan masyarakat, mempercepat pembangunan infrastruktur, serta mendukung pelayanan publik di tingkat provinsi dan kabupaten/kota.
            </p>
          </div>
        </div>

        <div className="p-6 space-y-10 bg-gray-50 min-h-screen pt-14">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Visualisasi Anggaran TKD - Donggala
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