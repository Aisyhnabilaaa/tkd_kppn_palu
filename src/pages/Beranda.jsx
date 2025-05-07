import { FaChartSimple, FaChartPie } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


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
            // const parseNumber = (value) => {
            //     const clean = value.replace(',', '.');
            //     const parsed = parseFloat(clean);
            //     return isNaN(parsed) ? 0 : parsed;
            // };


            setData(res.data);
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
        fetchChart();
    }, [tahun]);

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
                "Sulawesi Tengah",
            bgImage: "/src/assets/img/palugubernur.jpg",
            logo: "/src/assets/img/Lambang_Kota_Palu.png",
            link: "/Palu",
        },
        {
            title: "Parigi Moutong",
            description:
                "Sulawesi Tengah",
            bgImage: "/src/assets/img/kantor-bupati-parimo.jpg",
            logo: "/src/assets/img/Lambang_Kabupaten_Parigi_Moutong.png",
            link: "/ParigiMoutong",
        },
        {
            title: "Donggala",
            description:
                "Sulawesi Tengah",
            bgImage: "src/assets/img/donggala-kotawisata.jpg",
            logo: "/src/assets/img/Lambang_Kabupaten_Donggala.png",
            link: "/Donggala",
        },
        {
            title: "Sigi",
            description:
                "Sulawesi Tengah",
            bgImage: "src/assets/img/kantor-bupatii-sigii.jpg",
            logo: "/src/assets/img/Logo_sigi.png",
            link: "/Sigi",
        },
    ];

    return (
        <div className="beranda pd-10 bg-neutral-100">
            {/* Hero Section */}
            <div
                className="relative flex flex-row justify-between items-center p-5 md:px-32 px-5 text-white py-48"
                style={{
                    backgroundImage: `url('src/assets/KPPN.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-80" />
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
                    backgroundSize: "100% 450px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay agar teks terlihat jelas */}
                <div className="absolute inset-0 bg-gray-300/60 z-0 h-[450px]" />

                {/* Konten utama dengan posisi relatif dan z-index lebih tinggi */}
                <div id="tentang" className="relative z-10 w-full">
                    <div className="p-16">
                        <h1 className="font-bold text-3xl text-blue-900 p-6 text-center drop-shadow-lg">
                            Tentang <span className="text-amber-400">Transfer ke Daerah</span>
                        </h1>
                        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
                        <div className="flex items-center justify-center mb-10 space-x-8 mt-5">
                            <FaChartSimple className="text-blue-700 text-9xl drop-shadow-md" />
                            <p className="text-blue-900 text-justify text-lg drop-shadow-sm">
                                Situs ini menyediakan informasi mengenai alokasi dan realisasi dana transfer ke daerah di wilayah Sulawesi Tengah yang meliputi Palu, Donggala, Parigi Moutong, Sigi, dan satu daerah lainnya. Anda dapat mengakses data keuangan daerah, profil masing-masing daerah, serta dokumen terkait kebijakan transfer ke daerah.
                            </p>
                            <FaChartPie className="text-blue-700 text-9xl drop-shadow-md" />
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

            {/* <div className="items-center bg-sky-900 opacity-30" /> */}


                    <h1 className="font-bold text-3xl text-amber-400 p-6 text-center drop-shadow-lg">
                        Pencadangan Alokasi TKD <span className="text-blue-900">Lingkup KPPN Palu</span>
                    </h1>
                <p className="text-center text-lg text-gray-700">
                    Data Tahun: <span className="font-bold">{tahun}</span>
                </p>
                <BarChart
                    width={1000}
                    height={400}
                    data={data}
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                    className="items-center justify-center ml-20"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="daerah" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="dbh" fill="#f97316" name="DBH" />
                    <Bar dataKey="dau" fill="#10b981" name="DAU" />
                    <Bar dataKey="dakFisik" fill="#3b82f6" name="DAK Fisik" />
                    <Bar dataKey="dakNonfisik" fill="#6366f1" name="DAK Nonfisik" />
                    <Bar dataKey="danaDesa" fill="#eab308" name="Dana Desa" />
                    <Bar dataKey="infis" fill="#ec4899" name="INFIS" />
                    <Bar dataKey="total" fill="#1d4ed8" name="Total Alokasi" />
                </BarChart>

            </div>

            {/* Daftar Pemerintah Daerah */}
            <div className="pt-10 bg-white">
                <h1 className="font-bold text-4xl text-center text-blue-800 mb-5">
                    Daftar Pemerintah Daerah
                </h1>
                <p className="text-center text-sm">
                    Silahkan pilih untuk mengakses info tiap pemerintah daerah
                </p>

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
