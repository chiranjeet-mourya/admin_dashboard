import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa";

const Alert = () => {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          UI Elements
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Alerts
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Default Alerts
          </h1>
          <div className="w-full mt-3 flex gap-2 border border-emerald-400 p-2 bg-emerald-100 rounded-[6px]">
            <button className="w-[18px] h-[18px] bg-green-500 text-white rounded-full flex items-center justify-center">
              <FaCheck size={12} />
            </button>
            <p className="text-[13px] text-green-800">
              <strong>Well done!</strong> You successfully read this important
              alert message.{" "}
            </p>
          </div>
          <div className="w-full mt-4 flex gap-2 border border-[#fca9bd] p-2 bg-[rgba(248,40,90,0.1)] rounded-[6px]">
            <button className="w-[18px] h-[18px] bg-[rgb(248,40,90)] text-white rounded-full flex items-center justify-center">
              <FaXmark size={12} />
            </button>
            <p className="text-[13px] text-[#631024] dark:text-[#d45a76]">
              <strong>Oh snap!</strong> Change a few things up and try
              submitting again.
            </p>
          </div>
          <div className="w-full mt-4 flex gap-2 border border-[#ffebb1] p-2 bg-[rgba(255,204,59,0.1)] rounded-[6px]">
            <button className="w-[18px] h-[18px] bg-yellow-500 text-white rounded-full flex items-center justify-center">
              <FaExclamation size={12} />
            </button>
            <p className="text-[13px] text-[#665218] dark:text-[#c2a141]">
              <strong>Well done!</strong> An example warning alert with an icon.
            </p>
          </div>
          <div className="w-full mt-4 flex gap-2 p-2 bg-[rgba(114,57,234,0.1)] rounded-[6px]">
            <button className="w-[18px] h-[18px] bg-purple-800 text-white rounded-full flex items-center justify-center">
              <FaInfo size={12} />
            </button>
            <p className="text-[13px] text-[rgb(33,9,84)] dark:text-[rgb(78,24,194)]">
              A Simple Primary alert with <strong>an example link.</strong> Give
              it a click if you like.
            </p>
          </div>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Outline Alerts
          </h1>
          <div className="w-full mt-3 flex gap-2 border border-green-500 p-2 bg-transparent rounded-[6px]">
            <p className="text-[14px] text-green-500">
              <strong>Well done!</strong> You successfully read this important
              alert message.{" "}
            </p>
          </div>
          <div className="w-full mt-4 flex gap-2 border border-[rgb(248,40,90)] p-2 bg-transparent rounded-[6px]">
            <p className="text-[14px] text-[rgb(248,40,90)]">
              <strong>Oh snap!</strong> Change a few things up and try
              submitting again.
            </p>
          </div>
          <div className="w-full mt-4 flex gap-2 border border-yellow-500 p-2 bg-transparent rounded-[6px]">
            <p className="text-[14px] text-yellow-500">
              <strong>Well done!</strong> An example warning alert with an icon.
            </p>
          </div>
          <div className="w-full mt-4 flex gap-2 border border-[#00BCD4] p-2 bg-transparent rounded-[6px]">
            <p className="text-[14px] text-[#00BCD4]">
              Primary alert with <strong>an example link.</strong> Give it a
              click if you like.
            </p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Dismissible Alerts
          </h1>
          <div className="w-full mt-3 flex justify-between items-center gap-2 border border-emerald-400 p-2 bg-emerald-100 rounded-[20px]">
            <div className="flex gap-1">
              <button className="w-[18px] h-[18px] bg-green-500 text-white rounded-full flex items-center justify-center">
                <FaCheck size={12} />
              </button>
              <p className="text-[13px] text-green-800">
                <strong>Well done!</strong> You successfully read this important
                alert message.{" "}
              </p>
            </div>
            <span className="text-slate-500">
              <FaXmark />
            </span>
          </div>
          <div className="w-full mt-4 flex gap-2 items-center justify-between border border-[#fca9bd] p-2 bg-[rgba(248,40,90,0.1)] rounded-[6px]">
            <div className="flex gap-1">
              <button className="w-[18px] h-[18px] bg-[rgb(248,40,90)] text-white rounded-full flex items-center justify-center">
                <FaXmark size={12} />
              </button>
              <p className="text-[13px] text-[#631024] dark:text-[#d45a76]">
                <strong>Oh snap!</strong> Change a few things up and try
                submitting again.
              </p>
            </div>
            <span className="text-slate-500">
              <FaXmark />
            </span>
          </div>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Dismissible Outline Alerts
          </h1>
          <div className="w-full mt-3 flex justify-between items-center gap-2 border border-green-500 p-2 bg-transparent rounded-[20px]">
            <div className="flex gap-1">
              <button className="w-[18px] h-[18px] bg-green-500 text-white rounded-full flex items-center justify-center">
                <FaCheck size={12} />
              </button>
              <p className="text-[13px] text-green-500">
                <strong>Well done!</strong> You successfully read this important
                alert message.{" "}
              </p>
            </div>
            <span className="text-slate-500">
              <FaXmark />
            </span>
          </div>
          <div className="w-full mt-4 flex gap-2 items-center justify-between border border-[rgb(248,40,90)] p-2 bg-transparent rounded-[6px]">
            <div className="flex gap-1">
              <button className="w-[18px] h-[18px] bg-[rgb(248,40,90)] text-white rounded-full flex items-center justify-center">
                <FaXmark size={12} />
              </button>
              <p className="text-[13px] text-[rgb(248,40,90)] dark:text-[#d45a76]">
                <strong>Oh snap!</strong> Change a few things up and try
                submitting again.
              </p>
            </div>
            <span className="text-slate-500">
              <FaXmark />
            </span>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Custom Icon Alerts
          </h1>
          <div className="w-full mt-4 flex gap-2 items-center justify-between border border-[#fca9bd] p-2 bg-[rgba(248,40,90,0.1)] rounded-[6px]">
            <div className="flex gap-2 items-center">
              <FaSkullCrossbones size={28} className="text-[rgb(248,40,90)]" />
              <div>
                <span className="text-[18px] font-semibold text-slate-800 dark:text-slate-300">
                  Primary
                </span>
                <p className="text-[13px] text-[#631024] dark:text-[#d45a76]">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </p>
              </div>
            </div>
            <span className="text-slate-500">
              <FaXmark />
            </span>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-md">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
            Additional Content
          </h1>
          <div className="w-full mt-4 border border-[#99E4EE] p-2 bg-[#DFF3F7] dark:bg-transparent rounded-[6px] text-[#004A54] dark:text-[#04b2c9]">
            <span className="text-[20px] font-semibold">Well done!</span>
            <p className="text-[14px] font-medium">
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <p className="text-[14px] font-medium mt-3">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
