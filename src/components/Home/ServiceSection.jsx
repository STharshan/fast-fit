import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Tyre Fitting & Repaired",
    desc: `New tyres, balancing, and laser alignment for safety and performance.`,
    image: "/carpaint.avif",
    path: "/services/mechanical",
  },
  {
    title: "Air Conditioning",
    desc: `Re-gas, repair, and service for cool, efficient air conditioning.
​`,
    image: "/gray.avif",
    path: "/services/service",
  },
  {
    title: "Wheel Alignment",
    desc: `Professional 3D, 4 Wheel Alignment.  Latest Hoffman precision technology for laser tracking!`,
    image: "/carmechanic.avif",
    path: "/services/mot",
  },
];

const ServiceSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-5 px-4 bg-white dark:bg-black relative transition-colors duration-300">
       <div className="absolute left-0 w-full z-10  border-gray-700" data-aos="fade-up" data-aos-delay="700">
        <div className="mx-auto backdrop-blur-sm flex flex-col sm:flex-row items-center justify-center px-6 py-3 text-white text-sm font-semibold">
          {/* Rating Section */}
          <div className="flex items-center gap-3 dark:bg-black border border-gray-600 px-4 py-2 rounded-full order-1 sm:order-2 mb-3 sm:mb-0">
            {/* Stars */}
            <div className="flex text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            {/* Rating Text */}
            <span className=" text-sm font-medium text-black dark:text-white">5/5 from</span>
            {/* Reviews Badge */}
            <span className="bg-secondary border text-black dark:text-white border-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              84+ Reviews
            </span>
          </div>

          {/* TRC Logo */}
          {/* <div className="flex items-center order-2 sm:order-1">
            <img
              src="trc.png"
              alt="TRC Logo"
              className="w-42 h-20 object-contain md:w-40 md:h-20"
            />
          </div> */}
        </div>
      </div>
      <div className="max-w-7xl mt-20 mx-auto relative">
        {/* Section Title */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-2 uppercase"
          data-aos="fade-down"
        >
          Our <span className="dark:text-white text-gray-700">Services</span> 
        </h2>
        <p
          className="text-center text-lg dark:text-white mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          From minor fixes to major repairs, <br /> we’ve got you covered.
        </p>

        <div className="relative overflow-hidden">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20
              bg-black/50 dark:bg-white/20 hover:bg-primary dark:hover:bg-primary
              text-white dark:text-white p-3 rounded-full shadow-md
              transition-colors duration-300 group"
            aria-label="Scroll Left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <FaArrowLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-2"
            />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20
              bg-black/50 dark:bg-white/20 hover:bg-primary dark:hover:bg-primary
              text-white dark:text-white p-3 rounded-full shadow-md
              transition-colors duration-300 group"
            aria-label="Scroll Right"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <FaArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>

          {/* Scrollable Service Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth px-10 py-20 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[400px] h-[520px] rounded-lg shadow-lg border-primary border
              overflow-hidden group
             hover:scale-105 active:scale-105 bg-white hover:shadow-primary hover:border-primary/80 dark:bg-black/90 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150} // staggered animation for each card
              >
                {/* Image */}
                <div className="max-w-sm mx-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-[55%] mt-25 h-8.9 mx-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/logo.png"; // fallback logo
                    }}
                  />

                </div>


                {/* Overlay */}
                <div className="absolute inset-0 bg-overlay dark:bg-overlay/70 hover:bg-overlay/60 dark:hover:bg-overlay/50 transition-all duration-300"></div>

                {/* Text */}
                <div className="absolute bottom-0 p-5 z-10">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white mb-4">{service.desc}</p>
                  <Link to={service.path}>
                    <button className="mt-auto px-4 py-2 text-xs border border-light rounded-full font-semibold cursor-pointer
                      bg-overlay dark:bg-overlay/30 hover:bg-primary dark:hover:bg-primary
                      text-primary dark:text-primary hover:text-dark transition-all duration-300"
                    >
                      <FaArrowRight className="inline mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                      <span className="transition-transform duration-300 group-hover:translate-x-2">EXPLORE</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
