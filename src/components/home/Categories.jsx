import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-300 min-h-[500px] flex justify-center items-center py-14">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-8 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl text-center font-bold text-blue-800">
             Friday's Sale Up to 50% Off"
            </h1>
            <p
              data-aos="fade-up"
              className="text-md text-blue-800 tracking-wide leading-5 text-center"
            >
              Get 50% off your first in-store purchase every Friday this month. Take advantage of this offer and visit us!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12  xl:gap-32">
              <div data-aos="fade-up" className="flex flex-col items-center gap-4">
                <GrSecure className=" h-20 w-20 shadow-sm p-4 rounded-full bg-blue-800 text-white" />
                <p className="text-blue-800">Pay Safe</p>
              </div>
              <div data-aos="fade-up" className="flex flex-col items-center gap-4">
                <IoFastFood className="h-20 w-20 shadow-sm p-4 rounded-full bg-amber-500 text-white" />
                <p className="text-blue-800">High Quality</p>
              </div>
              <div data-aos="fade-up" className="flex flex-col items-center gap-4">
                <FaMapLocationDot  className="h-20 w-20 shadow-sm p-4 rounded-full bg-blue-700 text-white" />
                <p className="text-blue-800">New Locations</p>
              </div>
              <div data-aos="fade-up" className="flex flex-col items-center gap-4">
                <FaStar className="h-20 w-20 shadow-sm p-4 rounded-full bg-red-500 text-white" />
                <p className="text-blue-800">Prime Deliver</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="text-white py-2 px-6 rounded-full
                                group bg-blue-800 border border-blue-800
                                w-auto flex items-center gap-3
                                hover:bg-amber-500 hover:border-amber-500
                                "
                onClick={() => navigate(`/maps`)}
              >
                <span
                  className="
                                drop-shadow cursor-pointer"
                >
                  Explore Our Locations
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
