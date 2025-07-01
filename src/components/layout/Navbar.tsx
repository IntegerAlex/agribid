import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

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
      // { label: "Partner Login", to: "/partnerwithus/partnerlogin" },
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
  // { label: "Register", to: "/registration" },
  // { label: "Login", to: "/login" },
  {
    label: "Login",
    children: [
      { label: "Login", to: "/login" },
      { label: "Register", to: "/registration" },
      { label: "Partner Login", to: "/partnerwithus/partnerlogin" },
    ],
  },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? "border-gray-200 bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <img src="/agribid.png" className="h-20 w-48" alt="AgriBidAI Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 font-medium md:flex">
          {menuItems.map((item, idx) => (
            <div key={idx} className="group relative">
              {item.to ? (
                <Link
                  to={item.to}
                  className="px-3 py-2 text-gray-800 transition duration-200 hover:text-[#F7CF69] focus:outline-none focus-visible:text-[#F7CF69] focus-visible:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  aria-haspopup="true"
                  aria-expanded={false}
                  className="cursor-default px-3 py-2 text-gray-800 transition duration-200 group-focus-within:text-[#F7CF69] group-hover:text-[#F7CF69] focus:outline-none"
                >
                  {item.label}
                </button>
              )}

              {item.children && (
                <div className="absolute left-0 mt-2 w-56 origin-top scale-95 rounded-md border border-gray-100 bg-white opacity-0 shadow-lg transition-all duration-200 group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100">
                  {item.children.map((child, cidx) => (
                    <Link
                      key={cidx}
                      to={child.to}
                      className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-green-600 focus:bg-gray-100 focus:text-green-600 focus:outline-none"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* App Store and Play Store Images */}
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="/playstore.png"
              alt="Google Play"
              className="h-8 w-auto"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src="/appstore.png" alt="App Store" className="h-8 w-auto" />
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded border px-2 py-1 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="space-y-1 bg-white px-2 pt-2 pb-3 sm:px-3 md:hidden"
        >
          {menuItems.map((item, idx) => (
            <div key={idx} className="group relative">
              {item.to ? (
                <Link
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <div>
                  <span className="block rounded-md px-3 py-2 text-base font-medium text-gray-700">
                    {item.label}
                  </span>
                  <div className="pl-4">
                    {item.children &&
                      item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.to}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-green-600"
                          onClick={toggleMobileMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
