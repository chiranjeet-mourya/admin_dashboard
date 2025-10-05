import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Video = () => {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          UI Elements
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Videos
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h2 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Ratio Video 16:9
          </h2>

          <div className="relative w-full pt-[56.25%] mt-3 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Xal3RTspi9Y"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full h-[280px] overflow-y-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h2 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Ratio Video 21:9
          </h2>

          <div className="relative w-full pt-[42.85%] mt-3 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Xal3RTspi9Y"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full h-[430px] overflow-y-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h2 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Ratio Video 4:3
          </h2>

          <div className="relative w-full pt-[75%] mt-3 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Xal3RTspi9Y"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h2 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Ratio Video 1:1
          </h2>

          <div className="relative w-full pt-[100%] mt-3 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Xal3RTspi9Y"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
