import { FaChartSimple, FaChartPie } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Beranda = () => {
    const navigate = useNavigate();

    const daerahList = [
        {
            title: "Sulawesi Tengah",
            description:
                "Sulawesi, Indonesia",
            bgImage: "/src/assets/img/Tari-Raego.jpg",
            logo: "src/assets/img/Tari-Raego.jpg",
            link: "/sulteng",
        },
        {
            title: "Kota Palu",
            description:
                "Kota Palu, Sulawesi Tengah",
            bgImage: "/src/assets/img/palugubernur.jpg",
            logo: "/src/assets/img/Lambang_Kota_Palu.png",
            link: "/Palu",
        },
        {
            title: "Parigi Moutong",
            description:
                "Kabupaten Parigi Moutong,\nSulawesi Tengah",
            bgImage: "/src/assets/img/kantor-bupati-parimo.jpg",
            logo: "/src/assets/img/Lambang_Kabupaten_Parigi_Moutong.png",
            link: "/ParigiMoutong",
        },
        {
            title: "Donggala",
            description:
                "Kabupaten Donggala Sulawesi Tengah",
            bgImage: "src/assets/img/donggala-kotawisata.jpg",
            logo: "/src/assets/img/Lambang_Kabupaten_Donggala.png",
            link: "/Donggala",
        },
        {
            title: "Sigi",
            description:
                "Kabupaten Sigi, Sulawesi Tengah",
            bgImage: "src/assets/img/kantor-bupatii-sigii.jpg",
            logo: "/src/assets/img/Logo_sigi.png",
            link: "/Sigi",
        },
    ];

    return (
        <div className="beranda pd-10 rounded-lg">
            {/* Hero Section */}
            <div
                className="relative flex flex-row justify-between items-center p-5 md:px-32 px-5 text-white py-40 rounded-lg"
                style={{
                    backgroundImage: `url('src/assets/KPPN.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-80 rounded-lg" />
                <div className="grid grid-cols-2 gap-12 items-center z-10">
                    <div></div>
                    <div className="text-right max-w-[600px]">
                        <h1 className="lg:text-4xl text-2xl">Selamat Datang di Situs</h1>
                        <h3 className="mt-2 text-4xl lg:text-5xl font-bold leading-loose">
                            Transfer ke Daerah Lingkup KPPN Palu
                        </h3>
                        <a
                            href="#"
                            className="mt-4 inline-block bg-sky-900 hover:bg-sky-800 transition-all py-2 px-4 text-white shadow rounded"
                        >
                            Tentang Kami <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Tentang Section */}
            <div className="p-16">
                <h1 className="font-bold text-3xl text-cyan-800 p-6 text-center">
                    Tentang Transfer ke Daerah
                </h1>
                <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
                <div className="flex items-center justify-center mb-10 space-x-8 mt-5">
                    <FaChartSimple className="text-sky-500 text-6xl" />
                    <p className="max-w-lg text-gray-500 text-justify text-sm">
                        Situs ini menyediakan informasi mengenai alokasi dan realisasi dana transfer ke daerah di wilayah Sulawesi Tengah yang meliputi Palu, Donggala, Parigi Moutong, Sigi, dan satu daerah lainnya. Anda dapat mengakses data keuangan daerah, profil masing-masing daerah, serta dokumen terkait kebijakan transfer ke daerah.
                    </p>
                    <FaChartPie className="text-sky-500 text-6xl" />
                </div>
            </div>

            {/* Daftar Pemerintah Daerah */}
            <div>
                <h1 className="font-bold text-4xl text-center text-cyan-800 mb-5">
                    Daftar Pemerintah Daerah
                </h1>
                <p className="text-center text-sm">
                    Silahkan pilih untuk mengakses info tiap pemerintah daerah
                </p>

                {/* style daftar pemda */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {daerahList.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transform transition duration-500 hover:scale-105"
                            onClick={() => navigate(item.link)}
                            style={{
                                backgroundImage: `url(${item.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "300px",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition duration-300" />
                            <div className="absolute bottom-10 left-4 text-white text-2xl font-semibold rounded-lg px-4 py-2 text-center">
                                {item.title}
                            </div>
                            <div className="absolute bottom-4 left-4 px-4 py-2 text-xs text-white mt-2 p-2 rounded-lg">
                                {item.description}
                            </div>
                            <button
                                onClick={() => navigate(item.link)}
                                className="absolute bottom-4 right-4 px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 text-white hover:bg-sky-600 hover:shadow-lg"
                            >
                                <FaRegArrowAltCircleRight size={28} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Beranda;
