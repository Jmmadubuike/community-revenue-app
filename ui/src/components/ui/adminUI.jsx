import React from "react";
import Logo from "../common/logo";
import { HiSquares2X2 } from "react-icons/hi2";
import { MdGpsFixed } from "react-icons/md";
import { FaExchangeAlt, FaUserFriends } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  { icon: HiSquares2X2, label: "Dashboard" },
  { icon: FaExchangeAlt, label: "Financial Management" },
  { icon: MdGpsFixed, label: "Event/Dues" },
  { icon: FaUserFriends, label: "User Management" },
];

const AdminUI = ({ children }) => {
  return (
    <div className="flex min-h-screen h-full bg-gray-100">
      {/* Sidebar */}
      <aside className="sticky top-0 w-60 bg-black text-slate-300 md:flex flex-col items-center p-4 hidden">
        <Logo />
        <nav className="mt-6 w-full flex flex-col gap-2">
          {menuItems.map(({ icon: Icon, label }, index) => (
            <button
              key={index}
              className="flex items-center gap-3 px-4 py-2 text-left text-sm font-medium w-full hover:bg-gray-800 transition duration-200"
            >
              <Icon size={22} className="text-[#7A7D47]" />
              <span>{label}</span>
            </button>
          ))}
           <button
              className="flex mt-16 bg-slate-900 items-center gap-3 px-4 py-2 text-left text-sm font-medium w-full hover:bg-gray-800 transition duration-200"
            >
              <FaSignOutAlt size={22} className="text-[#7A7D47]" />
              <span>Logout</span>
            </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative">
        <div className="sticky flex items-center gap-2 border-b w-full border-slate-200 p-5">
            <p className="text-lg font-extrabold ">
            {localStorage.getItem("admin_username")}
            </p>
            <p className="font-semibold">{">>"}</p>
        </div>
        <div className="w-full h-[80vh] p-4">
        {children}

        </div>
      </main>
    </div>
  );
};

export default AdminUI;
