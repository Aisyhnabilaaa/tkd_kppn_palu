import { IoLeafSharp } from "react-icons/io5";

const SultengPage = () => {
  return (
    <div className='hero'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44 rounded-lg'
        style={{
          backgroundImage: `url('src/assets/img/sulteng_alam.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-sky-600 opacity-30 rounded-lg'></div>

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
          <img src="src/assets/img/Lambang_Kabupaten_Parigi_Moutong.png" alt="sigilogo" className="w-36 h-auto" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-center mb-2">Informasi Kabupaten Parigi Moutong</h1>
            <p className="mb-10 text-center mt-6 mx-12 text-xl text-justify">Kabupaten Parigi Moutong merupakan 
            salah satu daerah administratif di Provinsi Sulawesi Tengah yang memiliki posisi strategis di pesisir 
            utara Pulau Sulawesi. Ibu kota kabupatennya berada di Parigi. Kabupaten ini secara resmi terbentuk 
            pada tahun 2002 melalui pemekaran dari wilayah Kabupaten Donggala.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Kolom Kiri */}
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

      <div className="p-16">
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

export default SultengPage