import { useState } from "react";
import Logo from "./common/logo";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaProjectDiagram, FaUserTie, FaEnvelope, FaImages, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="p-4 bg-white shadow-md">
            <div className="flex items-center justify-between">
                <Logo />
                <button className="md:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars size={24} />
                </button>
                <div className="hidden md:flex space-x-6 font-extrabold">
                    <a href="/" className="flex items-center hover:text-amber-600 hover:scale-105">Home</a>
                    <a href="/about" className="flex items-center hover:text-amber-600 hover:scale-105">About</a>
                    <a href="/project" className="flex items-center hover:text-amber-600 hover:scale-105">Projects</a>
                    <a href="/executive" className="flex items-center hover:text-amber-600 hover:scale-105">Executive</a>
                    <a href="/contact" className="flex items-center hover:text-amber-600 hover:scale-105">Contact Us</a>
                    <a href="/gallary" className="flex items-center hover:text-amber-600 hover:scale-105">Gallery</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button 
                        className="cursor-pointer bg-transparent text-black px-4 py-2 border-black border-2 flex items-center" 
                        onClick={() => navigate("/user/login")}
                    >
                        <FaSignInAlt className="mr-2" /> Login
                    </button>
                    <button 
                        className="cursor-pointer px-4 py-2 text-white bg-amber-900 flex items-center"
                        onClick={() => navigate("/new-user")}
                    >
                        <FaUserPlus className="mr-2" /> Get Started
                    </button>
                </div>
            </div>
            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 font-extrabold" onClick={() => setIsOpen(false)}>
                    <div className="w-64 bg-white h-full shadow-md p-4 flex flex-col space-y-4 relative">
                        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                            <FaTimes size={24} />
                        </button>
                        <a href="/" className="flex items-center hover:text-amber-600 "> Home</a>
                        <a href="/about" className="flex items-center hover:text-amber-600"> About</a>
                        <a href="/project" className="flex items-center hover:text-amber-600"> Projects</a>
                        <a href="/executive" className="flex items-center hover:text-amber-600">Executive</a>
                        <a href="/contact" className="flex items-center hover:text-amber-600"> Contact Us</a>
                        <a href="/gallary" className="flex items-center hover:text-amber-600">Gallery</a>
                        <a className="cursor-pointer bg-transparent text-black px-4 py-2 border-black border-2 flex items-center" href="/user/login">
                            <FaSignInAlt className="mr-2" /> Login
                        </a>
                        <a className="cursor-pointer px-4 py-2 text-white bg-black flex items-center" href="/new-user">
                            <FaUserPlus className="mr-2" /> Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;