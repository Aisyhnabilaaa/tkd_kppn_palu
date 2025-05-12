import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { ResponsiveContainer } from 'recharts';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Beranda = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        tahun: '',
        daerah: '',
        dbh: '',
        dau: '',
        dakFisik: '',
        dakNonfisik: '',
        danaDesa: '',
        infis: ''
    });

    const fetchChart = async () => {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/alokasi/grafik?tahun=${tahun}`,
                {
                    headers: {
                        'x-api-key': import.meta.env.VITE_ADMIN_API_KEY,
                    },
                }
            );

            const order = [
                "Provinsi Sulawesi Tengah",
                "Kota Palu",
                "Kabupaten Sigi",
                "Kabupaten Donggala",
                "Kabupaten Parigi Moutong"
            ];

            const sortedData = Array.isArray(res.data)
                ? res.data.sort((a, b) =>
                    order.indexOf(a.daerah) - order.indexOf(b.daerah)
                )
                : [];

            setData(sortedData);
        } catch (err) {
            console.error('Gagal ambil data chart', err);
        }
    };


    const currentYear = new Date().getFullYear()
    const yearOptions = Array.from({ length: 5 }, (_, i) =>
        String(currentYear - 3 + i)
    )
    const [tahun, setTahun] = useState(String(currentYear))

    useEffect(() => {

        AOS.init({
            duration: 500,
            easting: "ease-in-out",
        });

        fetchChart();
    }, [tahun]);

    const navigate = useNavigate();

    const daerahList = [
        {
            title: "Provinsi Sulawesi Tengah",
            description:
                "Sulawesi, Indonesia",
            bgImage: "/src/assets/img/Tari-Raego.jpg",
            logo: "src/assets/img/Tari-Raego.jpg",
            link: "/sulteng",
        },
        {
            title: "Kota Palu",
            description:
                "Sulawesi Tengah",
            bgImage: "/src/assets/img/palugubernur.jpg",
            logo: "/src/assets/img/Lambang_Kota_Palu.png",
            link: "/Palu",
        },
        {
            title: " Kabupaten Parigi Moutong",
            description:
                "Sulawesi Tengah",
            bgImage: "/src/assets/img/kantor-bupati-parimo.jpg",
            logo: "/src/assets/img/Lambang_Kabupaten_Parigi_Moutong.png",
            link: "/ParigiMoutong",
        },
        {
            title: "Kabupaten Donggala",
            description:
                "Sulawesi Tengah",
            bgImage: "src/assets/img/donggala-kotawisata.jpg",
            logo: "/src/assets/img/Lambang_Kabupaten_Donggala.png",
            link: "/Donggala",
        },
        {
            title: "Kabupaten Sigi",
            description:
                "Sulawesi Tengah",
            bgImage: "src/assets/img/kantor-bupatii-sigii.jpg",
            logo: "/src/assets/img/Logo_sigi.png",
            link: "/Sigi",
        },
    ];

    return (
        <div className="beranda bg-neutral-100" >
            {/* Hero Section */}
            <div
                className="relative min-h-screen flex items-center justify-between p-5 md:px-32 px-5 text-white py-48"
                style={{
                    backgroundImage: `url('src/assets/KPPN.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60" />
                <div className="grid grid-cols-2 gap-12 items-center z-10">
                    <div>                    </div>
                    <div className="text-right max-w-[600px]">
                        <h1 className="lg:text-4xl text-2xl">Selamat Datang di Situs</h1>
                        <h3 className="mt-2 text-4xl lg:text-5xl font-bold leading-loose">
                            Transfer ke Daerah Lingkup KPPN Palu
                        </h3>
                        <a
                            href="#tentang"
                            className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-700 transition-all py-2 px-4 text-blue-900 hover:text-white shadow rounded"
                        >
                            Tentang Kami <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Tentang Section */}

            <div className="relative flex flex-row justify-between items-center p-5 md:px-32 px-5 text-white"
                style={{
                    height: "450px",
                    backgroundImage: `url('src/assets/img/bg-indo.png')`,
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay agar teks terlihat jelas */}
                <div className="absolute inset-0 bg-gray-300/60 z-0 h-[450px]" />

                {/* Konten utama dengan posisi relatif dan z-index lebih tinggi */}
                <div id="tentang" className="relative z-10 w-full">
                    <div className="p-16">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-start bg-gray-100 p-10 rounded-xl space-x-8">
                                {/* Kiri: Judul dan garis */}
                                <div className="w-1/3">
                                    <p className="text-xl text-blue-500 font-bold mb-2 bg-blue-100 w-32">Yuk Tahu!</p>
                                    <h1 className="text-4xl font-bold text-blue-900 leading-tight">
                                        Tentang Situs <span className="text-amber-400">Transfer ke Daerah</span>
                                    </h1>
                                    <div className="mt-2 h-1 w-16 bg-blue-400 rounded-full" />
                                </div>

                                {/* Kanan: Paragraf */}
                                <div className="w-2/3">
                                    <p className="text-gray-700 text-base text-justify mt-16">
                                        Situs ini menyediakan informasi mengenai alokasi dan realisasi dana transfer ke daerah di wilayah Sulawesi Tengah yang meliputi Kota Palu, Kabupaten Sigi, Kabupaten Donggala, Kabupaten Parigi Moutong, dan Provinsi Sulawesi Tengah.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tampilkan Chart */}
            {/* Dropdown Tahun */}
            <div className="flex justify-end mb-4">
                <select
                    className="border rounded px-2 py-1"
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                >
                    {yearOptions.map(t => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-8">
                <h1 className="font-bold text-3xl text-amber-400 p-6 text-center drop-shadow-lg">
                    Pencadangan Alokasi TKD <span className="text-blue-900">Lingkup KPPN Palu</span>
                </h1>
                <p className="text-center text-lg text-gray-700">
                    Data Tahun: <span className="font-bold">{tahun}</span>
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-4">
                    {data.map((daerahData, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-4">
                            <h2 className="text-lg font-bold text-center mb-2 text-blue-800">{daerahData.daerah}</h2>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={[daerahData]}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="daerah" hide />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="dbh" fill="#f97316" name="DBH" />
                                    <Bar dataKey="dau" fill="#00A808" name="DAU" />
                                    <Bar dataKey="dakFisik" fill="#3b82f6" name="DAK Fisik" />
                                    <Bar dataKey="dakNonfisik" fill="#7F0088" name="DAK Nonfisik" />
                                    <Bar dataKey="danaDesa" fill="#eab308" name="Dana Desa" />
                                    <Bar dataKey="infis" fill="#ec4899" name="INFIS" />
                                    <Bar dataKey="total" fill="#1d4ed8" name="Total Alokasi" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    ))}
                </div>

            </div>

            {/* Daftar Pemerintah Daerah */}
            <div
                className="pt-10 bg-cover bg-center"
                style={{ backgroundImage: `url('src/assets/img/bg-batikbiru.png')` }}

            >
                <div>
                    <h1 className="font-bold text-4xl text-center text-blue-800 mb-5">
                        Daftar Pemerintah Daerah
                    </h1>
                    <p className="text-center text-sm">
                        Silahkan pilih untuk mengakses informasi tiap pemerintah daerah
                    </p>
                </div>

                {/* style daftar pemda */}
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-6">
                    {daerahList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(item.link)}
                            className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer group transform transition duration-500 hover:scale-105
                            ${index === 0 ? 'col-span-2 row-span-2 h-[400px]' : 'h-[190px]'}`}
                            style={{
                                backgroundImage: `url(${item.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition duration-300" />
                            <div className="absolute bottom-7 left-4 text-white text-lg font-semibold rounded-lg px-4 py-2 text-shadow">
                                {item.title}
                            </div>
                            <div className="absolute bottom-4 left-4 px-4 py-1 text-xs text-white rounded-lg bg-black/30">
                                {item.description}
                            </div>
                            <button
                                onClick={() => navigate(item.link)}
                                className="absolute bottom-4 right-4 px-2 py-2 rounded-lg font-medium text-white bg-sky-500 hover:bg-sky-600 transition"
                            >
                                <FaRegArrowAltCircleRight size={20} />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Beranda;
