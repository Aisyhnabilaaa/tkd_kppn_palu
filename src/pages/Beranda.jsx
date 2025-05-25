// Beranda.jsx

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
    const [tahun, setTahun] = useState(String(new Date().getFullYear()));

    const fetchChart = async () => {
        try {
            const res = await axios.get(`https://charttkd-production.up.railway.app/api/alokasi/grafik?tahun=${tahun}`, {
                headers: {
                    'x-api-key': import.meta.env.VITE_ADMIN_API_KEY,
                },
            });

            const order = [
                "Provinsi Sulawesi Tengah",
                "Kota Palu",
                "Kabupaten Sigi",
                "Kabupaten Donggala",
                "Kabupaten Parigi Moutong"
            ];

            const sortedData = Array.isArray(res.data)
                ? res.data.sort((a, b) => order.indexOf(a.daerah) - order.indexOf(b.daerah))
                : [];

            setData(sortedData);
        } catch (err) {
            console.error('Gagal ambil data chart', err);
        }
    };

    const yearOptions = Array.from({ length: 5 }, (_, i) => String(new Date().getFullYear() - 3 + i));
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 500, easting: "ease-in-out" });
        fetchChart();
    }, [tahun]);

    const daerahList = [
        {
            title: "Provinsi Sulawesi Tengah",
            description: "Sulawesi, Indonesia",
            bgImage: "/Tari-Raego.jpg",
            logo: "/Tari-Raego.jpg",
            link: "/sulteng",
        },
        {
            title: "Kota Palu",
            description: "Sulawesi Tengah",
            bgImage: "/palugubernur.jpg",
            logo: "/Lambang_Kota_Palu.png",
            link: "/Palu",
        },
        {
            title: "Kabupaten Parigi Moutong",
            description: "Sulawesi Tengah",
            bgImage: "/kantor-bupati-parimo.jpg",
            logo: "/Lambang_Kabupaten_Parigi_Moutong.png",
            link: "/ParigiMoutong",
        },
        {
            title: "Kabupaten Donggala",
            description: "Sulawesi Tengah",
            bgImage: "/donggala-kotawisata.jpg",
            logo: "/Lambang_Kabupaten_Donggala.png",
            link: "/Donggala",
        },
        {
            title: "Kabupaten Sigi",
            description: "Sulawesi Tengah",
            bgImage: "/kantor-bupatii-sigii.jpg",
            logo: "/Logo_sigi.png",
            link: "/Sigi",
        },
    ];

    return (
        <div className="beranda bg-neutral-100">
            <div className="min-h-[50vh] text-white relative pb-0">
                {/* Bagian atas: gambar 50% layar di mobile, full di desktop */}
                <div
                    className="h-[50vh] md:h-screen bg-[url('/KPPN.jpg')] bg-cover bg-no-repeat"
                    style={{ backgroundPosition: "33% 20%" }}
                >
                    <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center md:items-end md:text-right md:pr-20">
                        <h1 className="text-2xl md:text-4xl">Selamat Datang di Situs</h1>
                        <h3 className="mt-2 text-3xl md:text-5xl font-bold leading-snug">
                            Transfer ke Daerah<br className="hidden md:block" /> Lingkup KPPN Palu
                        </h3>

                        <a
                            href="#tentang"
                            className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-700 transition-all py-2 px-4 text-blue-900 hover:text-white shadow rounded"
                        >
                            Tentang Kami
                        </a>
                    </div>
                </div>

            </div>


            {/* Tentang Section */}
            <div id="tentang"
                className="relative p-4 md:px-32 text-white"
                style={{
                    backgroundImage: `url('bg-indo.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gray-300/60 z-0" />

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="relative z-10 max-w-7xl mx-auto py-10">
                        <div className="bg-gray-100 p-6 md:p-10 rounded-xl space-y-4 md:space-y-0 md:space-x-8 md:flex">
                            <div className="md:w-1/3">
                                <p className="text-xl text-blue-500 font-bold mb-2 bg-blue-100 w-fit px-2">Yuk Tahu!</p>
                                <h1 className="text-2xl md:text-4xl font-bold text-blue-900 leading-tight">
                                    Tentang Situs <span className="text-amber-400">Transfer ke Daerah</span>
                                </h1>
                                <div className="mt-2 h-1 w-16 bg-blue-400 rounded-full" />
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-700 text-justify mt-4 md:mt-16">
                                    Situs ini menyediakan informasi mengenai alokasi dan realisasi dana transfer ke daerah di wilayah yang meliputi Provinsi Sulawesi Tengah, Kota Palu, Kabupaten Sigi, Kabupaten Donggala, dan Kabupaten Parigi Moutong.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dropdown Tahun */}
            <div className="flex justify-end px-6 mt-6">
                <select
                    className="border rounded px-3 py-2 text-sm"
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                >
                    {yearOptions.map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            {/* Chart Section */}
            <div className="mb-8 px-4">
                <h1 className="font-bold text-2xl md:text-3xl text-amber-400 p-6 text-center drop-shadow-lg">
                    Pencadangan Alokasi TKD <span className="text-blue-900">Lingkup KPPN Palu</span>
                </h1>
                <p className="text-center text-gray-700 mb-4">Data Tahun: <strong>{tahun}</strong></p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="p-5 md:pt-10 bg-cover bg-center" style={{ backgroundImage: `url('bg-batikbiru.png')` }}>
                <h1 className="font-bold  text-3xl md:text-4xl text-center text-blue-800 mb-2">
                    Daftar Pemerintah Daerah
                </h1>
                <p className="text-center text-sm mb-6">Silahkan pilih untuk mengakses informasi tiap pemerintah daerah</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    {daerahList.map((item, index) => (

                        <div
                            key={index}
                            onClick={() => navigate(item.link)}
                            className={`relative rounded-xl overflow-hidden shadow-md border-4 border-white cursor-pointer group transform transition duration-500 hover:scale-105 h-[200px] ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-[400px]' : ''}`}
                            style={{
                                backgroundImage: `url(${item.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            <div className="absolute bottom-10 left-4 text-white text-lg font-semibold">
                                {item.title}
                            </div>
                            <div className="absolute bottom-4 left-4 px-2 py-1 text-xs text-white bg-black/30 rounded">
                                {item.description}
                            </div>
                            <button
                                onClick={() => navigate(item.link)}
                                className="absolute bottom-4 right-4 rounded-lg font-xs text-white"
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
