import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#042C21] text-white px-6 md:px-16 lg:px-24 pt-12 pb-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-xl mx-auto">
          Join Over 1K+ Plus Satisfied Clients who have transformed their
          businesses with our solutions
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#5BC2A7] text-black px-6 py-3 rounded-md ">
            Schedule a Free Consultant
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Get In Touch
          </button>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/img/logzero.png"
              alt="LogZero"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
          </div>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Empowering businesses through innovative IT Solutions & Digital
            Transformation services since 2011
          </p>

          <p className="mt-6 text-sm text-gray-300">Follow us on</p>
          <div className="mt-2 flex items-center gap-4"></div>

          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="text:white">
              <FaFacebookF />
            </a>
            <a href="#" className="text:white">
              <FaGoogle />
            </a>
            <a href="#" className="text:white">
              <FaApple />
            </a>
            <a href="#" className="text:white">
              <FaInstagram />
            </a>
          </div>
        </div>
            
            
        <div>
            
          <h3 className="font-semibold text-lg mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Our Service</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">UI Design</a>
            </li>
            <li>
              <a href="#">UX Design</a>
            </li>
            <li>
              <a href="#">More Services</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <p className="text-gray-300 text-sm">
            Pegasus Tower, A-10, 8th Floor, Sector-68,
            <br />
            Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301
          </p>
          <p className="mt-3 text-sm">
            <span className="text-[#3D8B6D]">Phone:</span> +91 11 40789940
          </p>
          <p className="text-sm">
            <span className="text-[#3D8B6D]">Email:</span>{" "}
            sales@logzerotechnologies.com
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-[298px] rounded-l-md focus:outline-black text-black bg-white border border-black"
              />
              <button className="bg-[#5BC2A7] text-black px-4 rounded-r-md ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700/70">
      <div className="max-w-7x1 ">
        <div className="flex justify-start">
        <p className="text-xs md:text-sm text-gray-300">
          © 2025 LogZero Technology. All Rights Reserved.
        </p>
      </div>
      </div>
      </div>
    </footer>
  );
}
