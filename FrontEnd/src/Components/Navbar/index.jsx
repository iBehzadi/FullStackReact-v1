import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCentos } from "react-icons/fa";
import { BiUser, BiChevronDown, BiCart } from "react-icons/bi";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  (useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    return () => window.removeEventListener("scroll", handleScroll);
  }),
    []);

  const navLinks = [
    { name: "Men", path: "/category/men" },
    { name: "Women", path: "/category/women" },
    { name: "Kids", path: "/category/kid" },
  ];
  return (
    <div>
      <div className="fixed left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
        <nav
          className={`relative flex items-center justify-between w-full max-w-7xl px-8 py-3 rounded-2xl transition-all duration-500 ${scrolled ? "bg-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0,0.7)] backdrop-blur-lg border border-white/10 py-3" : "bg-transparent py-5"}`}
        >
          {/* brand logo */}
          <Link to={"/"} className="group flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-500">
              <FaCentos className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tighter">
              STYLE <span className="text-orange-500">WAVE</span>
            </h2>
          </Link>
          {/* navigations */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="group text-sm font-bold tracking-widest relative uppercase text-gray-600 hover:text-black transition-colors duration-500 cursor-pointer "
                onClick={() => navigate(link.path)}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"} `}
                />
              </button>
            ))}
          </div>
          {/* actions items */}
          <div className="flex items-center gap-5">
            {/* account dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <BiUser className="text-2xl text-gray-800" />
                <BiChevronDown className="text-gray-400 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {/* menu dropdown */}
              <div
                className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl bg-white p-2 opacity-0 invisible translate-y-2
               duration-300 shadow-[0_10px_40px_0_rgba(0,0,0,0.1)] border-gray-100 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all"
              >
                <Link
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300"
                  to={"/auth"}
                >
                  Login/Sign Up
                </Link>

                <hr className="my-1 border-gray-50" />

                <Link
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300"
                  to={"/orders"}
                >
                  My Orders
                </Link>
                <button className="w-full text-sm text-left rounded-xl px-4 py-3 font-medium hover:bg-red-50 text-red-500 transition-colors">
                  Logout
                </button>
              </div>
            </div>
            {/* cart icon */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group">
              <BiCart className="text-2xl text-gray-800 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
