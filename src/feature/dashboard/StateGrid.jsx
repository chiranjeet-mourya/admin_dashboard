import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import {
  BsArrowDownRight,
  BsArrowRight,
  BsArrowUpRight,
  BsEye,
} from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: <FaDollarSign />,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    trend: "up",
    icon: <BiUser />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: <CgShoppingCart />,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "_2.1%",
    trend: "down",
    icon: <BsEye />,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

const StateGrid = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((state, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelected(state)}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    {state.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {state.value}
                  </p>
                  <div className="flex items-center space-x-2">
                    {state.trend === "up" ? (
                      <BsArrowUpRight className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <BsArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        state.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {state.change}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-300">
                      vs Last month
                    </span>
                  </div>
                </div>
                <div
                  className={`p-2  rounded-xl group-hover:scale-110 transition-all duration-300 ${state.bgColor}`}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center ${state.textColor}`}
                  >
                    {state.icon}
                  </div>
                </div>
              </div>
              {/* progressbar */}
              <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${state.color} rounded-full transition-all duration-100`}
                  style={{ width: state.trend === "up" ? "75%" : "45%" }}
                ></div>
              </div>
            </div>
          );
        })}

        {/* popup modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 ">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 w-[60%] h-[300px] shadow-xl relative">
              {/* close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 dark:hover:text-white"
              >
                <FaXmark size={26}/>
              </button>
              {/* content */}
              <div className="flex items-start justify-between mt-10">
                <div className="flex-1">
                  <p className="text-[20px] font-medium text-slate-600 dark:text-slate-400 mb-2">
                    {selected.title}
                  </p>
                  <p className="text-[30px] font-bold text-slate-800 dark:text-white mb-4">
                    {selected.value}
                  </p>
                  <div className="flex items-center space-x-2 mt-5">
                    {selected.trend === "up" ? (
                      <BsArrowUpRight className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <BsArrowDownRight className="w-6 h-6 text-red-500" />
                    )}
                    <span
                      className={`text-[20px] font-semibold ${
                        selected.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {selected.change}
                    </span>
                    <span className="text-[18px] text-slate-500 dark:text-slate-300">
                      vs Last month
                    </span>
                  </div>
                </div>
                <div className={`p-2  rounded-xl ${selected.bgColor}`}>
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${selected.textColor}`}
                  >
                    <span className="text-[24px]">{selected.icon}</span>
                  </div>
                </div>
              </div>

              {/* progressbar */}
              <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${selected.color} rounded-full transition-all duration-100`}
                  style={{ width: selected.trend === "up" ? "75%" : "45%" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StateGrid;
