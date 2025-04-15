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
            <h1 className="lg:text-5xl text-2xl font-bold">SULAWESI TENGAH</h1>
            <IoLeafSharp className="text-sky-500 text-6xl scale-x-[-1]" />
          </div>
          <p>Sebuah provinsi di bagian tengah Pulau Sulawesi, Indonesia.</p>
        </div>
      </div>


      {/* INFORMASI MENGENAI SULAWESI TENGAH */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-2">Informasi Sulawesi Tengah</h1>
        <p className="mb-10 text-center mt-6 mx-12">Sulawesi Tengah adalah salah satu provinsi di Pulau Sulawesi dengan ibu kota di Kota Palu.
          Memiliki luas wilayah sekitar 61.841 km<sup>2</sup> dan terdiri dari 13 kabupaten serta 1 kota.
          Provinsi ini dikenal sebagai daerah yang kaya akan sumber daya alam dan keanekaragaman budaya.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Kolom Kiri */}
          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Geografis dan Topografi</h2>
            <p>Sulawesi Tengah memiliki bentang alam yang bervariasi, mulai dari pegunungan, dataran rendah, hingga garis pantai yang panjang.
              Wilayah ini juga memiliki danau besar seperti Danau Poso dan kawasan konservasi seperti Taman Nasional Lore Lindu.
              Iklimnya tropis dengan musim hujan dan kemarau.</p>
          </div>

          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Mata Pencaharian dan Ekonomi</h2>
            <ul className="list-disc pl-5">
              <li>Pertanian: kakao, padi, kelapa</li>
              <li>Perikanan: tangkap & budidaya</li>
              <li>Pertambangan: nikel, emas</li>
              <li>UMKM dan perdagangan lokal</li>
            </ul>
          </div>

          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Sosial dan Budaya</h2>
            <p>Masyarakat Sulawesi Tengah terdiri dari berbagai suku seperti Kaili, Bugis, Pamona, dan Balantak.
              Bahasa daerah masih aktif digunakan dalam kehidupan sehari-hari.
              Berbagai upacara adat dan tarian tradisional masih dilestarikan, termasuk Mombowa dan Dero.</p>
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
              <li><strong>Taman Nasional Lore Lindu</strong> – rumah bagi berbagai spesies endemik</li>
              <li><strong>Danau Poso</strong> – danau tektonik yang indah dan dalam</li>
              <li><strong>Pusentasi</strong> – sumur laut unik di Donggala</li>
              <li><strong>Pantai Tanjung Karang</strong> – pantai pasir putih yang cocok untuk snorkeling</li>
            </ul>
          </div>
          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Infrastruktur dan Transportasi</h2>
            <p>
              Akses transportasi cukup baik melalui Bandara Mutiara SIS Al-Jufrie di Palu dan pelabuhan Pantoloan.
              Jalan antar kabupaten sebagian besar sudah terhubung dan terus diperbaiki.
            </p>
          </div>
          <div className="shadow p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Data Statistik</h2>
            <p>Jumlah penduduk: 3,0 juta (2023)<br /> IPM: 70,21 (2023)<br /> PDRB per kapita: Rp 47 juta</p>
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