import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

// Komponen Button untuk Login (opsional)

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [isDaerahOpen, setIsDaerahOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleChange = () => {
        setMenu(!menu);
    };

    // Daftar menu navbar
    // const menuItems = [
    //     { name: "Home", to: "/" },
    // ];

    // Deteksi arah scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                // Scroll ke bawah, sembunyikan navbar
                setShowNavbar(false);
            } else {
                // Scroll ke atas, tampilkan navbar
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-1 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                } bg-gradient-to-r from-blue-900 to-blue-400 flex flex-row justify-between items-center p-2 px-6 md:px-10 text-white shadow-md rounded-full max-w-6xl mx-auto`}
        >

            <div className="flex items-center">
                <img src="src/assets/kppnlogo.png" alt="kppn" className="w-24" />
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden lg:flex flex-row items-center gap-6 text-sm font-medium">
                <div className="flex space-x-4">
                    <Link to="/" className="hover:text-yellow-300 transition-colors cursor-pointer">
                        Home
                    </Link>
                </div>


                <div className="relative">
                    <button
                        onClick={() => setIsDaerahOpen(!isDaerahOpen)}
                        className="flex items-center gap-1 hover:text-yellow-300"
                    >
                        <span>Daftar Daerah TKD</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isDaerahOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50 text-sm">
                            <a href="/Sulteng" className="block px-4 py-2 hover:bg-gray-100">Provinsi Sulawesi Tengah</a>
                            <a href="/Palu" className="block px-4 py-2 hover:bg-gray-100">Kota Palu</a>
                            <a href="/Sigi" className="block px-4 py-2 hover:bg-gray-100">Kabupaten Sigi</a>
                            <a href="/Donggala" className="block px-4 py-2 hover:bg-gray-100">Kabupaten Donggala</a>
                            <a href="/ParigiMoutong" className="block px-4 py-2 hover:bg-gray-100">Kabupaten Parigi Moutong</a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center" onClick={handleChange}>
                <AiOutlineMenu size={25} />
            </div>

            {/* Mobile Menu */}
            <div
                className={`${menu ? "translate-x-0" : "-translate-x-full"} 
                lg:hidden flex flex-col absolute bg-gradient-to-b from-blue-900 to-blue-500 text-white 
                left-0 top-[4rem] z-50 text-lg text-center pt-8 pb-5 gap-6 w-full transition-transform duration-300`}
            >
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-yellow-200"
                    onClick={() => setMenu(false)}
                >
                    Home
                </Link>

                {/* Dropdown Mobile */}
                <div className="relative">
                    <button
                        onClick={() => setIsDaerahOpen(!isDaerahOpen)}
                        className="flex items-center justify-center gap-1 hover:text-yellow-300"
                    >
                        <span>Daftar Daerah TKD</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isDaerahOpen && (
                        <div className="mt-2 w-56 mx-auto bg-white text-black rounded shadow-md z-50 text-base">
                            <a href="/Sulteng" className="block px-4 py-2 hover:bg-gray-100">Sulawesi Tengah</a>
                            <a href="/Palu" className="block px-4 py-2 hover:bg-gray-100">Palu</a>
                            <a href="/Sigi" className="block px-4 py-2 hover:bg-gray-100">Sigi</a>
                            <a href="/ParigiMoutong" className="block px-4 py-2 hover:bg-gray-100">Parigi Moutong</a>
                            <a href="/Donggala" className="block px-4 py-2 hover:bg-gray-100">Donggala</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
