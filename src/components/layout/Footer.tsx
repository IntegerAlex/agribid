import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

const usefulLinks1 = [
  { label: "Home", to: "/" },
  { label: "FPO", to: "/partnerwithus/fpo" },
  { label: "Market Place", to: "/market" },
  { label: "About Us", to: "/about/whoarewe" },
  { label: "Mandi Price", to: "/mandi" },
];

const usefulLinks2 = [
  { label: "Privacy Policy", to: "/privacypolicy" },
  { label: "T & C", to: "/termsandcondition" },
  { label: "Return Policy", to: "/returnpolicy" },
  { label: "Shipping Policy", to: "/shippingpolicy" },
  { label: "FAQ", to: "/faq" },
  { label: "Knowledge Center", to: "/knowledgecenter" },
];

const Footer = () => {
  return (
    <footer className="font-agriox bg-[#334b35] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo + About */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link
                to="/"
                className="inline-block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <img
                  src="/agribid.png"
                  alt="AgriBid Logo"
                  className="h-12 w-auto rounded-md bg-[#f1cf69] p-1.5"
                />
              </Link>
            </div>
            <h4 className="mb-2 text-[#f1cf69]">Corporate Office</h4>
            <p className="mb-3 text-gray-300">
              Agribid Private Limited,
              <br /> B-204 Kanakia Wall Street Chakala,
              <br /> Andheri (E) Mumbai - 400093
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:02269719417"
                  className="text-[#f1cf69] hover:underline focus:underline focus:outline-none"
                >
                  022 6971 9417
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:support@agribidindia.com"
                  className="text-[#f1cf69] hover:underline focus:underline focus:outline-none"
                >
                  support@agribidindia.com
                </a>
              </p>
            </div>
            <div className="mt-5 flex space-x-4">
              <a
                href="#"
                className="rounded-md text-[#f1cf69] hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="rounded-md text-[#f1cf69] hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="rounded-md text-[#f1cf69] hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="rounded-md text-[#f1cf69] hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Grievance Officer & Useful Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h4 className="mb-4 text-[#f1cf69]">Grievance Officer</h4>
              <p className="mb-2 text-gray-300">Amit Mishra</p>
              <p className="flex items-center text-sm">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:grievance@agribidindia.com"
                  className="text-[#f1cf69] hover:underline focus:underline focus:outline-none"
                >
                  grievance@agribidindia.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-[#f1cf69]">Useful Links</h4>
              <div className="flex gap-8">
                <ul className="space-y-2">
                  {usefulLinks1.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="hover:underline focus:underline focus:outline-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {usefulLinks2.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="hover:underline focus:underline focus:outline-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* App Store/Play Store and Newsletter Section */}
          <div className="lg:col-span-1">
            <div className="mb-8 flex items-center space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <img
                  src="/playstore.png"
                  alt="Google Play"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
            <h4 className="mb-4 text-[#f1cf69]">Subscribe to our Newsletter</h4>
            <form>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#f1cf69] px-6 py-2 font-semibold text-[#334b35] transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Agribid Private Limited. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
