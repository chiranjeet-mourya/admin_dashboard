import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// gallery
import img_1 from "../../assets/profile_gallery/img_1.jpg";
import img_2 from "../../assets/profile_gallery/img_2.jpg";
import img_3 from "../../assets/profile_gallery/img_3.jpg";
import img_4 from "../../assets/profile_gallery/img_4.jpg";
import img_5 from "../../assets/profile_gallery/img_5.jpg";
import img_6 from "../../assets/profile_gallery/img_6.jpg";
import img_7 from "../../assets/profile_gallery/img_7.jpg";
import img_8 from "../../assets/profile_gallery/img_8.jpg";
import img_9 from "../../assets/profile_gallery/img_9.jpg";

const Images = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryImg = [
    { img: img_1 },
    { img: img_2 },
    { img: img_3 },
    { img: img_4 },
    { img: img_5 },
    { img: img_6 },
    { img: img_7 },
    { img: img_8 },
    { img: img_9},
  ];

  const openPopup = (index) => {
    setSelectedIndex(index);
  };

  const closePopup = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === galleryImg.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImg.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          UI Elements
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Images
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="relative">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImg.map((img, index) => (
              <div
                key={index}
                onClick={() => openPopup(index)}
                className="w-full h-[200px] overflow-hidden group bg-slate-200 dark:bg-slate-700 rounded-[10px] transition-all cursor-pointer"
              >
                <img
                  src={img.img}
                  alt="gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {selectedIndex !== null && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 text-white text-2xl hover:text-slate-200"
              >
                <FaTimes />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-3xl hover:text-blue-400"
              >
                <FaChevronLeft />
              </button>

              <div className="relative max-w-3xl w-[90%] transition-all duration-500">
                <img
                  src={galleryImg[selectedIndex].img}
                  alt="popup"
                  className="w-full h-auto rounded-lg shadow-lg object-contain transition-transform duration-500"
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-3xl hover:text-blue-400"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Images;
