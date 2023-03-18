import React from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useState, useEffect } from "react";

const AUcarousal = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setcurr] = useState(0);

  const prev = () =>
    setcurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setcurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, autoSlide, next]);

  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%` }}
        >
          {slides}
        </div>
        {/* Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 ">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow-md bg-white/80 text-gray-800 hover:bg-white"
          >
            <MdOutlineChevronLeft size={40} className="" />
          </button>
          {/*  */}
          <button
            onClick={next}
            className="p-1 rounded-full shadow-md bg-white/80 text-gray-800 hover:bg-white"
          >
            <MdOutlineChevronRight size={40} className="" />
          </button>
        </div>
        {/* Closing Buttons */}
        {/* Indicator for Slider  */}
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2 ">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Closing Indicator for Slider */}
      </div>
      {/* Closing Main Div */}
    </>
  );
};

export default AUcarousal;
