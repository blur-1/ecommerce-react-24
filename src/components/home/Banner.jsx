import React from "react";
import Image1 from "../../assets/hero/shop-item.png";
import Image2 from "../../assets/hero/shop-item2.png";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const imageList = [
  {
    id: 1,
    img: Image1,
    title: "More than 1000 offers online!",
    slogan: "We offer the lowest prices",
  },
  {
    id: 2,
    img: Image2,
    title: "The best home delivery service",
    slogan: "always closer, always faster",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-custom-bg bg-cover bg-center min-h-[900px] md:min-h-[750px] 
    flex justify-center items-center"
    >
      {/* slider section*/}
      <div className="container">
        <Slider {...settings}>
          {imageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* text box */}
                <div className="flex flex-col justify-center text-center gap-4 order-2 pt-12 
                        md:pt-0 md:text-left md:order-1 relative z-10">
                  <div className="text-white ">
                    <h1
                      className="text-5xl md:text-6xl lg:text-7xl
                                font-bold "
                    >
                      {item.title}
                    </h1>
                    <p className="my-2 px-2 py-1 inline-block font-semibold  lg:text-2xl">
                      {item.slogan}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                  <button
                    className="text-white py-2 px-6 rounded-full
                              bg-gradient-to-r from-amber-500 to-yellow-400
                              w-auto flex items-center gap-3
                              border border-transparent
                              hover:gradient-to-r hover:from-transparent hover:to-transparent hover:border-white transition-colors duration-500"
                    onClick={() => navigate(`/products`)}
                  >
                    <span
                      className="
                        drop-shadow cursor-pointer
                        
                      "
                    >
                      Check it
                    </span>
                  </button>

                  </div>
                </div>
                {/* carrousel */}
                <div className="order-1 md:order-2">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[300px] h-[300px] 
                                md:h-[450px] md:w-[450px] 
                                md:scale-90
                                object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
