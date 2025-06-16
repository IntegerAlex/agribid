import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

type MenuItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Market Place", to: "/market" },
  { label: "Mandi Price", to: "/mandi" },
  {
    label: "Partner with us",
    children: [
      { label: "FPO Registration", to: "/partnerwithus/fpo" },
      { label: "FPC Registration", to: "/partnerwithus/fpc" },
      { label: "DSA Registration", to: "/partnerwithus/dsa" },
      { label: "PACS Registration", to: "/partnerwithus/pacs" },
      { label: "Partner Login", to: "/partnerwithus/partnerlogin" },
      // { label: "Corporate Inquiries", to: "/corporate" },
    ],
  },
  {
    label: "About Us",
    children: [
      { label: "Our Team", to: "/about/ourteam" },
      { label: "Who We Are", to: "/about/whoarewe" },
      { label: "Gallery", to: "/about/gallery" },
    ],
  },
  {
    label: "Events",
    children: [
      {
        label: "Awards",
        to: "/events/awards",
      },
      {
        label: "News",
        to: "/events/news",
      },
      {
        label: "Tenders",
        to: "/events/tenders",
      },
    ],
  },
  { label: "Register", to: "/registration" },
  { label: "Login", to: "/login" },
  {
    label: "Language",
    children: [
      { label: "English / EN", to: "/language/en" },
      { label: "हिन्दी / HI", to: "/language/hi" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 ${
        scrolled ? "border-gray-200 bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/agribid.png" className="h-15 w-40" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 font-medium md:flex">
          {menuItems.map((item, idx) => (
            <div key={idx} className="group relative">
              {item.to ? (
                <Link
                  to={item.to}
                  className="px-3 py-2 text-gray-800 transition duration-200 hover:text-[#F7CF69]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="cursor-default px-3 py-2 text-gray-800 transition duration-200 group-hover:text-[#F7CF69]">
                  {item.label}
                </span>
              )}

              {item.children && (
                <div className="absolute left-0 mt-2 w-56 origin-top scale-95 rounded-md border border-gray-100 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                  {item.children.map((child, cidx) => (
                    <Link
                      key={cidx}
                      to={child.to}
                      className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-green-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile button placeholder */}
        <button className="rounded border px-2 py-1 text-gray-700 md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
