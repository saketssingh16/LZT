"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ onSaveContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/img/logzero.png"
            alt="LogZero Logo"
            width={219}
            height={40}
            priority
          />
        </Link>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none px-6 lg:px-0`}
        >
          <Link href="/" className="block py-2 text-gray-800 font-medium">
            Home
          </Link>

          {[
            { title: "About", link: "/about", child: "About Us" },
            { title: "Services", link: "/services", child: "Our Services" },
            { title: "Solutions", link: "/solutions", child: "Solutions" },
            { title: "Industry", link: "/industry", child: "Industries" },
            { title: "Technologies", link: "/technologies", child: "Technologies" },
          ].map((item) => (
            <div key={item.title} className="relative group">
              <button className="block py-2 text-gray-800 font-medium w-full text-left lg:w-auto">
                {item.title}
              </button>

              <div
                className="lg:absolute lg:top-full lg:left-0 lg:min-w-[180px] bg-white shadow-lg rounded-md border mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <Link
                  href={item.link}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.child}
                </Link>
              </div>
            </div>
          ))}

          <Link
            href="/portfolio"
            className="block py-2 text-gray-800 font-medium w-full text-left lg:w-auto"
          >
            Portfolio
          </Link>
          <Link
            href="/pricing"
            className="block py-2 text-gray-800 font-medium w-full text-left lg:w-auto"
          >
            Pricing
          </Link>

          <button
            onClick={() => setShowContact(true)}
            className="mt-3 lg:mt-0 lg:ml-4 px-6 py-2 bg-[#5BC2A7] text-black rounded-lg font-semibold"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
