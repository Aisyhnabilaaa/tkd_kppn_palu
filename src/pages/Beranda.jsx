import { FaChartSimple, FaChartPie } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Beranda = () => {
    const navigate = useNavigate();
    return (
        <div className="beranda pd-10 rounded-lg">
            <div className="relative flex flex-row justify-between items-center p-5 md:px-32 px-5 text-white py-40 rounded-lg"
                style={{
                    backgroundImage: `url('src/assets/KPPN.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"

                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-80 rounded-lg"></div>

                {/* Konten */}

                <div className="grid grid-cols-2 gap-12 items-center">
                    <div></div>
                    <div className=" relative text-right max-w-[600px]">
                        <h1 className="lg:text-4xl text-2xl">Selamat Datang di Situs</h1>
                        <h3 className="mt-2 text-4xl  lg:text-5xl font-bold leading-loose">
                            Transfer ke Daerah Lingkup KPPN Palu
                        </h3>
                        <a href="#" className="mt-4 inline-block bg-sky-900 hover:bg-sky-800 transition-all py-2 px-4 text-white shadow rounded">
                            Tentang Kami <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                </div>

                {/* Gelombang kecil SVG */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1440 320" className="w-full h-auto">
                    </svg>
                </div>
            </div>


            <div className="p-16">
                {/* Teks Judul */}
                <h1 className="relative font-bold text-5xl text-cyan-800 p-6 text-center"
                >
                    Tentang Transfer ke Daerah
                </h1>
                <hr class="border-t-2 border-gray-300 w-1/2 mx-auto " />

                <div className="flex items-center justify-center mb-10 space-x-8 mt-10">
                    <FaChartSimple className="text-sky-500 text-6xl" />
                    {/* Paragraf */}
                    <p className="max-w-lg text-gray-500 text-justify">
                        Situs ini menyediakan informasi mengenai alokasi dan realisasi dana transfer ke daerah di wilayah Sulawesi Tengah yang meliputi Palu, Donggala, Parigi Moutong, Sigi, dan satu daerah lainnya. Anda dapat mengakses data keuangan daerah, profil masing-masing daerah, serta dokumen terkait kebijakan transfer ke daerah.
                    </p>

                    {/* Ikon Pie Chart */}
                    <FaChartPie className="text-sky-500 text-6xl" />
                </div>
            </div>

            <div>
                <h1 className="font-bold text-5xl text-center  text-cyan-800 mb-5">Daftar Pemerintah Daerah</h1>
                <p className="text-center">Silahkan pilih untuk mengakses info tiap pemerintah daerah</p>
                <div className="grid gris-cols-1 md:grid-cols-3 gap-6 p-6">
                    {[
                        {
                            title: "Sulawesi Tengah",
                            description: "Provinsi yang terletak di jantung Pulau Sulawesi, Indonesia, yang menawarkan lanskap alam yang memukau, mulai dari pegunungan yang menjulang tinggi, lembah yang hijau subur, hingga garis pantai yang indah. ",
                            bgImage: "/src/assets/img/sultengpeta.jpeg",
                            logo: "src/assets/img/Logo_Provinsi_Sulawesi_Tengah.png",
                            link: "/sulteng" 
                        },
                        {
                            title: "Kota Palu",
                            description: " Ibu kota Provinsi Sulawesi Tengah, terletak di Teluk Palu, dengan Sungai Palu yang membelah kota. Merupakan pusat pemerintahan, ekonomi, dan pendidikan di Sulawesi Tengah.",
                            bgImage: "/src/assets/img/palugubernur.jpg",
                            logo: "/src/assets/img/Lambang_Kota_Palu.png",
                            link: "/Palu"
                        },
                        {
                            title: "Parigi Moutong",
                            description: " Parigi Moutong adalah salah satu daerah di Sulawesi Tengah yang menerima transfer ke daerah. Daerah ini memiliki potensi ekonomi dari sektor perikanan dan pertanian.",
                            bgImage: "/src/assets/img/kantor-bupati-parimo.jpg",
                            logo: "/src/assets/img/Lambang_Kabupaten_Parigi_Moutong.png",
                            link: "/ParigiMoutong"
                        },
                        {
                            title: "Donggala",
                            description: " Terletak di pesisir barat Sulawesi Tengah, dikenal dengan keindahan pantainya, seperti Pantai Tanjung Karang, Memiliki potensi wisata bahari yang besar. ",
                            bgImage: "src/assets/img/donggala.jpg",
                            logo: "/src/assets/img/Lambang_Kabupaten_Donggala.png",
                            link: "/Donggala"
                        },
                        {
                            title: "Sigi",
                            description: " Kabupaten Sigi, yang terletak di selatan Palu, menawarkan lanskap pegunungan dan lembah yang subur, yang menjadikannya daerah yang kaya akan potensi wisata alam dan pertanian.",
                            bgImage: "src/assets/img/kantor-bupatii-sigii.jpg",
                            logo: "/src/assets/img/Logo_sigi.png",
                            link: "/Sigi"
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg shadow-lg bg-sky-300 text-neutral-950 relative"
                            style={{
                                backgroundImage: `url(${item.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div
                                className="flex items-center justify-center w-10 h-14 mb-4 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.logo})` }}
                            ></div>

                            <h2 className="text-xl font-bold text-white bg-cyan-900 rounded-full py-3 px-6 text-center">{item.title}</h2>

                            <p className="text-sm text-white mt-2 bg-black/50 p-2 rounded-lg">{item.description}</p>

                            <div>
            {/* ... */}
            <button 
                onClick={() => navigate(item.link)} // Ganti window.location.href
                className="mt-4 px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 bg-sky-500 text-white hover:bg-sky-600 hover:shadow-lg">
                Selengkapnya
            </button>
            {/* ... */}
        </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Beranda;