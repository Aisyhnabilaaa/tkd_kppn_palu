import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

// Komponen Button untuk Login
const Button = ({ title }) => {
    return (
        <button className="px-4 py-2 rounded-lg text-black hover:bg-yellow-300 transition-all">
            {title}
        </button>
    );
};

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    // Daftar menu navbar
    const menuItems = [
        { name: "Home", to: "src/pages/Beranda.jsx" },
        { name: "About", to: "about" },
        { name: "Services", to: "services" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <div className="flex flex-row justify-between items-center p-3 md:px-32 px-5 relative text-white">
            <div className="flex items-center">
                <img src="src\assets\kppnlogo.png" alt="kppn" className="w-24 "/>
            </div>

            {/* Navbar untuk desktop */}
            <nav className="hidden lg:flex flex-row items-center gap-6">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-200 transition-all cursor-pointer text-black"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* <div className="hidden lg:flex flex-row items-center gap-4">
                <div className= "rounded-xl border-solid border-2 border-light-blue-500">
                    <Button title="Registrasi" />
                </div>
                <div className="bg-blue-400 rounded-lg">
                    <Button title="Login" />
                </div>
            </div> */}


            {/* Tombol menu untuk mobile */}
            <div className="lg:hidden flex items-center p-2 text-white" onClick={handleChange}>
                <AiOutlineMenu size={25} />
            </div>

            {/* Menu navbar untuk mobile */}
            <div
                className={`${menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-cyan-900 text-white left-0 top-[4rem] z-50 text-2xl text-center pt-8 pb-5 gap-8 w-full transition-transform duration-300`}
            >
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-200 transition-all cursor-pointer text-white"
                        onClick={() => setMenu(false)} // Tutup menu setelah diklik
                    >
                        {item.name}
                    </Link>
                ))}

                {/* Registrasi & Login juga ada di navbar mobile */}
                {/* <div className="flex flex-col items-center gap-4">
                    <h1 className="hover:text-yellow-200 transition-all cursor-pointer text-white">Registrasi</h1>
                    <Button title="Login" />
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
