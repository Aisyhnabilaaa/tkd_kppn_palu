import { IoLeafSharp } from "react-icons/io5";

const SigiPage = () => {
  return (
    <div className='hero bg-blue-50'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44 rounded-lg'
        style={{
          backgroundImage: `url('src/assets/img/alamsigi.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-sky-600 opacity-30 rounded-lg'></div>

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
      <div className="container mx-auto py-8 text-justify">
        <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
          <img src="src/assets/img/Logo_sigi.png" alt="sigilogo" className="w-28 h-auto" />
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-center mb-2">Informasi Kabupaten Sigi</h1>
            <p className="mb-10 text-center mt-6 mx-12 text-xl text-justify">Kabupaten Sigi merupakan salah satu kabupaten di Provinsi Sulawesi
              Tengah yang dibentuk pada tahun 2008 sebagai hasil pemekaran dari Kabupaten Donggala. Ibu kotanya terletak di Bora,
              Kecamatan Sigi Biromaru. Kabupaten ini dikenal dengan wilayahnya yang subur, serta kedekatannya dengan Kota Palu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Kolom Kiri */}
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

          {/* <div className="flex justify-center items-start order-1 md:order-2">
      <img
        src="src/assets/img/sulteng-removebg.png"
        alt="Sulawesi Tengah"
        className="w-52 h-auto mt-4"
      />
    </div> */}

          {/* Kolom Kanan (1, 2, 3, 4) */}
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
      </div>


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

      <div className="p-16 bg-gray-50">
        {/* Teks Judul */}
        <h1 className="relative font-bold text-4xl text-cyan-800 p-6 text-center"
        >
          Transfer ke Daerah Sulawesi Tengah
        </h1>
        <hr class="border-t-2 border-gray-300 w-1/2 mx-auto " />

        <div className="flex items-center justify-center space-x-8 mt-8">
          {/* Paragraf */}
          <p className=" text-gray-500 text-justify">
            Transfer ke daerah merupakan salah satu mekanisme pendanaan yang diberikan oleh pemerintah pusat kepada pemerintah daerah guna mendukung pelaksanaan pembangunan serta penyelenggaraan pemerintahan daerah. Di Sulawesi Tengah, transfer ke daerah mencakup berbagai jenis pendanaan seperti Dana Alokasi Umum (DAU), Dana Alokasi Khusus (DAK), Dana Bagi Hasil (DBH), serta Dana Insentif Fiskal. Dana ini bertujuan untuk meningkatkan kesejahteraan masyarakat, mempercepat pembangunan infrastruktur, serta mendukung pelayanan publik di tingkat provinsi dan kabupaten/kota.
          </p>
        </div>
      </div>



    </div>
  )
}

export default SigiPage