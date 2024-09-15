import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url('https://raw.githubusercontent.com/blur-1/ecommerce-react-24/main/src/assets/blob-scene-haikei.webp')`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const FooterLinks = [
  {
    title: "Exchange Policy",
    link: "/#",
  },
  {
    title: "Return Policy",
    link: "/#",
  },
  {
    title: "Electronic Receipt",
    link: "/#",
  },
  {
    title: "Terms and Conditions",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white py-10">
      <div className="container">
        <div data-aos="zoom-in" className="text-white ">
          <div className="container py-10">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
                Get Notified About New Offers
              </h1>
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Enter your email"
                className="text-gray-900  w-full p-3"
              />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="grid md:grid-cols-3 py-10">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              E-SHOP
            </h1>
            <p>
            Customer Service Hours: Monday to Sunday from 7 AM to 10 PM.
            </p>
            <p>Email: service@eshop.pe</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Information
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a>
                  <FaInstagram className="text-3xl" />
                </a>
                <a>
                  <FaFacebook className="text-3xl" />
                </a>
                <a>
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Lima, Perú</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+51 9999999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
