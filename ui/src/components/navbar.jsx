import { useState } from "react";
import Logo from "./common/logo";
import {useNavigate} from "react-router-dom"
import { FaAd,FaMoneyBill } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <nav className="p-4 bg-white">
            <div className="flex items-center justify-between">
                <Logo />
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaAd size={24} /> : <FaMoneyBill size={24} />}
                </button>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-600">Home</a>
                    <a href="#" className="hover:text-gray-600">About</a>
                    <a href="#" className="hover:text-gray-600">Projects</a>
                    <a href="#" className="hover:text-gray-600">News/Event </a>
                    <a href="#" className="hover:text-gray-600">Contact</a>
                    <a href="#" className="hover:text-gray-600">Gallery</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button className="cursor-pointer bg-transparent text-black px-4 py-2 border-[#7A7D47] border-2" 
                    onClick={()=>navigate("/user/login")}>Login</button>
                    <button className="cursor-pointer px-4 py-2 text-white bg-[#7A7D47]"
                     onClick={()=>navigate("/new-user")}>Get Started</button>
                </div>
            </div>
            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsOpen(false)}>
                    <div className="w-64 bg-white h-full shadow-md p-4 flex flex-col space-y-4">
                        <button className="self-end" onClick={() => setIsOpen(false)}>
                            <FaAd size={24} />
                        </button>
                        <a href="#" className="hover:text-gray-600">Home</a>
                        <a href="#" className="hover:text-gray-600">About</a>
                        <a href="#" className="hover:text-gray-600">Projects</a>
                        <a href="#" className="hover:text-gray-600">Link 4</a>
                        <a href="#" className="hover:text-gray-600">Link 5</a>
                        <a href="#" className="hover:text-gray-600">Link 6</a>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
                        <button className="border px-4 py-2 rounded-lg">Get Started</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;