import { IoLeafSharp } from "react-icons/io5";

import { useEffect, useState } from "react";
import axios from "axios";
import RealisasiChart from "../components/RealisasiChart";
import EfisiensiChart from "../components/EfisiensiChart";

const SigiPage = () => {
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
          `http://localhost:3000/tkd/realisasi?daerah=Kabupaten Sigi&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `http://localhost:3000/tkd/efisiensi?daerah=Kabupaten Sigi&tahun=${tahun}`
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
          backgroundImage: `url('src/assets/img/alamsigi.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-sky-600 opacity-30'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4 text-center">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            <h1 className="lg:text-5xl text-2xl font-bold">Kabupaten Sigi</h1>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          <p>"Mareso Masagena"</p>
          <p>
            Bekerja keras dengan kebersamaan meraih kesuksesan menuju kesejahteraan
          </p>
        </div>
      </div>


      {/* INFORMASI MENGENAI SIGI */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
          <img src="src/assets/img/Logo_sigi.png" alt="sigilogo" className="w-28 h-auto" />
          <div className="text-center md:text-left">
            <div className="bg-yellow-100 rounded-tr-full w-96">
              <h6 className="text-2xl text-amber-400 ml-2">Sekilas <span className="text-blue-800">Tentang</span></h6>
              <h1 className="text-4xl font-bold ml-4">Kabupaten Sigi</h1>
            </div>
            <p className="mb-10 text-center mt-3 mx-5 text-base text-justify">
              Kabupaten Sigi merupakan salah satu kabupaten di Provinsi Sulawesi
              Tengah yang dibentuk pada tahun 2008 sebagai hasil pemekaran dari Kabupaten Donggala. Ibu kotanya terletak di Bora,
              Kecamatan Sigi Biromaru. Kabupaten ini dikenal dengan wilayahnya yang subur, serta kedekatannya dengan Kota Palu.
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
            <div className="bg-amber-400 text-center rounded-xl p-6 shadow-md">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src="src/assets/img/umkm_palu.jpg" alt="Ekonomi" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Ekonomi & UMKM</h3>
              <p className="text-sm text-gray-700">
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
            <h2 className="text-white text-5xl text-center mb-10">Ada apa di Sigi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12">
              <div className="shadow p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Geografis dan Topografi</h2>
                <p>Wilayah Sigi memiliki topografi yang sangat bervariasi, mulai dari dataran rendah hingga pegunungan
                  yang menjulang tinggi. Hal ini menjadikan Kabupaten Sigi memiliki potensi besar di sektor pertanian,
                  perkebunan, dan peternakan. Tanah yang subur membuat komoditas seperti padi, kakao, kopi, dan jagung
                  tumbuh dengan baik. Selain itu, Sigi juga memiliki potensi kehutanan dan hasil hutan non-kayu yang
                  mendukung mata pencaharian sebagian masyarakatnya.</p>
              </div>

              <div className="shadow p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Potensi Komoditas</h2>
                <p>sektor pertanian merupakan tulang punggung utama mata pencaharian masyarakat Sigi. Komoditas
                  pertanian utama meliputi padi, jagung, kakao, dan kopi, yang tumbuh subur berkat tanah yang kaya
                  unsur hara dan sistem irigasi alami dari pegunungan. Selain pertanian, masyarakat juga menggantungkan hidup dari perkebunan, peternakan, serta perikanan air tawar. Industri kecil dan menengah (UMKM) terus tumbuh, terutama di bidang olahan hasil tani dan kerajinan tangan.</p>
              </div>

              <div className="shadow p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Sosial dan Budaya</h2>
                <p>Kabupaten Sigi memiliki jumlah penduduk sekitar 260.000 jiwa (data 2023). Masyarakatnya terdiri
                  dari berbagai suku dan etnis, dengan suku Kaili, Kulavi, dan Topoiyo sebagai penduduk asli. Bahasa
                  daerah seperti Kaili Ledo dan Kulavi masih digunakan di beberapa wilayah, di samping Bahasa Indonesia
                  sebagai bahasa resmi. Mayoritas penduduk menganut agama Islam, namun terdapat juga pemeluk agama
                  Kristen dan Hindu.</p>
              </div>

              <div className="shadow p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Pariwisata</h2>
                <ul className="list-disc pl-5">
                  <li><strong>Taman Nasional Lore Lindu</strong> – kawasan pelestarian alam dengan berbagai flora dan fauna endemik Sulawesi, seperti Anggrek Hitam, Kuskus, Babi Rusa, dan Anoa. Di dalam taman nasional ini juga terdapat Danau Lindu.</li>
                  <li><strong>Desa Pakuli</strong> – Dikenal sebagai tempat penangkaran burung Maleo. Terdapat juga kebun budidaya obat tradisional.</li>
                  <li><strong>Pemandian Air Panas Bora</strong> – Pemandian air panas alami yang menjadi daya tarik wisatawan.</li>
                  <li><strong>Paralayang Wayu</strong> – Lokasi untuk olahraga paralayang dengan pemandangan yang indah.</li>
                  <li><strong>Air Terjun Wera dan Air Terjun Mantikole</strong> – air terjun yang menawarkan keindahan alam.</li>
                  <li><strong>Bukit Sibedi dan Bukit Matantimali</strong> – Destinasi dengan pemandangan perbukitan yang menarik.</li>
                  <li>Beberapa desa wisata rintisan seperti <strong>Kampung Merah Putih, Adat Toro, Air Terjun Panas Lawua, Air Terjun Saulopa, Anggrek Karunia, Bukit Satu Pohon Sibedi, Danau Lindu Tomado, Kain Kulit Kayu Mataue, </strong>dan <strong>Kaluku Tinggu</strong></li>
                </ul>
              </div>
              <div className="shadow p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Infrastruktur</h2>
                <p>
                  Kabupaten Sigi telah memiliki sejumlah sekolah, madrasah, puskesmas, dan rumah sakit, meskipun
                  distribusinya belum merata di seluruh kecamatan. Beberapa daerah pedalaman masih menghadapi tantangan
                  dalam akses pelayanan publik akibat keterbatasan infrastruktur jalan.
                </p>
              </div>
              <div className="shadow p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">Data Statistik</h2>
                <p>Luas: 5.196,02 km <sup>2</sup><br /> Penduduk (2023 est.): ± 266.656 jiwa <br /> Kecamatan: 16 <br /> Desa: 177 </p>
              </div>
            </div>
          </div> */}


        {/* <div className='relative flex flex-row justify-between p-8 md:px-16 px-5 text-white py-20 rounded-lg'>
        <div className='absolute inset-0 bg-sky-300 rounded-lg'></div>

        <div className="relative flex flex-col w-1/2">
          <h1 className="lg:text-5xl text-2xl text-orange-50">SULAWESI TENGAH</h1>
          <p className="mt-4 text-lg font-bold">Sulawesi Tengah: Keindahan Alam dan Keberagaman Budaya dalam Satu Kesatuan</p>
          <p className="mt-4 text-lg text-justify">
            Sulawesi Tengah adalah provinsi terluas di Pulau Sulawesi dengan ibu kota di Palu. Memiliki lanskap yang beragam, dari pegunungan, lembah subur, hingga pantai eksotis. <br />
            Secara ekonomi, daerah ini ditopang oleh pertanian, kehutanan, perikanan, pertambangan, dan perkebunan. Kekayaan sumber daya alamnya menjadikannya salah satu pusat ekonomi di wilayah tengah Indonesia. <br />
            Keberagaman budaya juga menjadi ciri khas Sulawesi Tengah, dengan suku asli seperti Kaili, Pamona, dan Banggai, serta pendatang seperti Bugis, Jawa, dan Tionghoa. Semboyan Nosarara Nosabatutu mencerminkan semangat persatuan dalam keberagaman. <br />
            Dengan keindahan alam dan kekayaan budayanya, Sulawesi Tengah terus berkembang sebagai daerah potensial dalam berbagai sektor.
          </p>
        </div>

        <div className="relative flex justify-end">
          <img src="src/assets/img/sulteng-removebg.png" alt="sulawesi tengah" className="w-96 mt-4" />
        </div>
      </div> */}

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

export default SigiPage