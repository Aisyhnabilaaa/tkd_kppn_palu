import { IoLeafSharp } from "react-icons/io5";

const SultengPage = () => {
  return (
    <div className='hero'>
      <div className='relative flex flex-row justify-between itmes-center p-16 md:px-32 px-5 text-white py-44 rounded-lg'
        style={{
          backgroundImage: `url('src/assets/img/wisatapalu.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className='absolute inset-0 bg-black opacity-40 rounded-lg'></div>

        <div className="items-center justify-center text-center w-full">
          <div className="relative flex items-center justify-center space-x-4 text-center">
            <IoLeafSharp className="text-sky-500 text-6xl" />
            <h1 className="lg:text-5xl text-2xl font-bold">Kota Palu</h1>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
            <p>"Maliu Ntinuvu"</p>
            <p>Kenangan yang memudar</p>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mx-12 my-8">
          <img src="src/assets/img/Lambang_Kota_Palu.png" alt="sigilogo" className="w-36 h-auto" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-center mb-2">Informasi Kota Palu</h1>
            <p className="mb-10 text-center mt-6 mx-12 text-xl text-justify">Kota Palu merupakan pusat pemerintahan, 
            ekonomi, pendidikan, dan kebudayaan di Provinsi Sulawesi Tengah. Terletak di pesisir barat Pulau Sulawesi, 
            kota ini menghadap langsung ke Teluk Palu dan dikelilingi oleh pegunungan, menjadikannya daerah dengan 
            lanskap geografis yang unik dan kontras antara laut dan pegunungan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Kolom Kiri */}
          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Geografis dan Topografi</h2>
            <p></p>
          </div>

          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Mata Pencaharian dan Ekonomi</h2>
            <p>Perekonomian kota ini ditopang oleh sektor perdagangan, jasa, konstruksi, pendidikan, dan pemerintahan. UMKM juga tumbuh cukup pesat, terutama di bidang kuliner, kerajinan tangan, dan fashion. Selain itu, Palu juga memiliki Kawasan Ekonomi Khusus (KEK) Palu, yang ditujukan untuk mengembangkan sektor industri berbasis hasil tambang dan pertanian dari wilayah sekitarnya.</p>
          </div>

          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Sosial dan Budaya</h2>
            <p>Dari segi budaya, masyarakat Kota Palu masih melestarikan tradisi dan adat istiadat Kaili, seperti Upacara Nosu Nosu, Tari Raego, dan berbagai bentuk musik tradisional. Kota ini juga dikenal dengan kulinernya, seperti Kaledo (kaki lembu donggala), Uta Dada, dan Ikan Bakar Palu.</p>
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
              <li><strong>Pantai Talise</strong> – Ikon Kota Palu, terkenal dengan keindahan pantainya dan menjadi lokasi utama Festival Teluk Palu.</li>
              <li><strong>Museum Sulawesi Tengah</strong> – Menyimpan berbagai koleksi sejarah dan budaya Sulawesi Tengah.</li>
              <li><strong>Bukit Doda</strong> – Menawarkan pemandangan Kota Palu dan Teluk Palu dari ketinggian.</li>
              <li><strong>Desa Adat Balaroa</strong> – Menampilkan rumah adat Souraja yang unik.</li>
            </ul>
          </div>
          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Infrastruktur</h2>
            <p>
            Sebagai ibu kota provinsi, Palu memiliki berbagai fasilitas publik yang lengkap, seperti perkantoran 
            pemerintahan, kampus-kampus perguruan tinggi ternama seperti Universitas Tadulako, rumah sakit, pusat 
            perbelanjaan, hotel, dan tempat hiburan. Bandara Mutiara SIS Al-Jufrie menjadi gerbang utama 
            transportasi udara ke dan dari Palu.
            </p>
          </div>
          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Data Statistik</h2>
            <p>Luas Wilayah: 395,06 km<sup>2</sup><br /> Jumlah Penduduk (Estimasi 2023): ± 385.000 jiwa<br /> Kecamatan: 8 <br />Kelurahan: 46 <br />Kepadatan Penduduk (Estimasi 2023): ± 974,5 jiwa/km<sup>2</sup></p>
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