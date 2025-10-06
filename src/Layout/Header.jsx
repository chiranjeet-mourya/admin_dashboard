import React, { useEffect, useRef, useState } from "react";
import { BiBell, BiMenu } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { GrFilter } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { LiaAlignLeftSolid } from "react-icons/lia";
import { HiOutlineBars4 } from "react-icons/hi2";
import {
  FaUser,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import User from "../assets/user.jpg";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const Header = ({ sidebarCollapse, onToggleSidebar }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [direction, setDirection] = useState("ltr");
  const [themeColor, setThemeColor] = useState("blue");
  const [sidebarMode, setSidebarMode] = useState("full");
  const [activeLang, setActiveLang] = useState("English");
  const [openNotification, setOpenNotification] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = [
    { id: 1, name: "blue", value: "bg-blue-500" },
    { id: 2, name: "red", value: "bg-red-500" },
    { id: 3, name: "green", value: "bg-green-500" },
    { id: 4, name: "yellow", value: "bg-yellow-500" },
    { id: 5, name: "purple", value: "bg-purple-500" },
    { id: 6, name: "pink", value: "bg-pink-500" },
    { id: 7, name: "black", value: "bg-black" },
  ];

  const handleToggle = (mode) => {
    setSidebarMode(mode);
    if (onToggleSidebar) {
      onToggleSidebar(mode);
    }
  };

  const languages = ["Hindi", "English", "Spanish", "German", "French"];

  const [openProfile, setOpenProfile] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    {
      name: "Priya Verma",
      time: "11:00 AM",
      message: "Follow-up call regarding your submitted report",
    },
    {
      name: "Ravi Kumar",
      time: "03:20 PM",
      message: "Team sync meeting — please be on time",
    },
    {
      name: "Amit Sharma",
      time: "09:00 AM",
      message: "Project meeting scheduled with the client",
    },
  ];

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              onClick={onToggleSidebar}
            >
              <BiMenu className="w-6 h-6" />
            </button>

            <div className="hidden md:block">
              <h1 className="text-xl font-black text-slate-800 dark:text-white">
                Good Morning,
              </h1>
              <p className="text-slate-600 dark:text-white">
                Chiranjeet! what's happening today
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative hidden lg:flex">
              <IoSearch className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Anything"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="absolute right-2 border-none top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <GrFilter />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all cursor-pointer">
              <FaPlus className="w-4 h-4" />
              <span className="text-sm font-medium">New</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
                 hover:bg-slate-100 dark:hover:bg-slate-800 
                 transition-colors cursor-pointer"
            >
              {theme === "light" ? (
                <TiWeatherSunny className="w-6 h-6" />
              ) : (
                <TiWeatherNight className="w-6 h-6" />
              )}
            </button>

            <div className="relative">
              {/* Bell Icon Button */}
              <button
                onClick={() => setOpenNotification(!openNotification)}
                className="p-2.5 relative rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <BiBell className="w-5 h-5" />
                <span className="absolute top-1 left-4 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>

              {openNotification && (
                <div className="absolute right-0 mt-3 w-[400px] bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-200 dark:border-slate-700 z-50">
                  <div className="p-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                      Notifications
                    </h3>
                    <button
                      onClick={() => setOpenNotification(!openNotification)}
                      className="w-8 h-8 bg-slate-200 flex items-center justify-center rounded-[6px] text-slate-800"
                    >
                      <FaXmark size={22} />
                    </button>
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                      >
                        <img
                          src={User}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800 dark:text-slate-100">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {item.message}
                          </p>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="py-3 border-t border-slate-200 dark:border-slate-700 text-center">
                    <a
                      href="notification"
                      className="text-md font-semibold text-blue-600 dark:text-blue-400"
                    >
                      View All
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setOpenSetting(true)}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <CiSettings className="w-6 h-6" />
              </button>

              {openSetting && (
                <div
                  onClick={() => setOpenSetting(false)}
                  className="fixed inset-0 bg-black/40 z-40"
                />
              )}

              <div
                className={`fixed overflow-y-auto top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-lg z-50 transform transition-transform duration-300
                  ${direction === "ltr" ? "right-0" : "left-0"}
                  ${
                    openSetting
                      ? "translate-x-0"
                      : direction === "ltr"
                      ? "translate-x-full"
                      : "-translate-x-full"
                  }
                `}
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    Settings
                  </h2>
                  <button
                    onClick={() => setOpenSetting(false)}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <MdClose className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  <span className="text-[18px] text-slate-800 dark:text-slate-200 font-semibold">
                    Theme Option
                  </span>
                  <div className="flex items-center gap-5">
                    <div
                      onClick={() => setTheme("light")}
                      className={`flex items-center gap-2 border py-2 px-4 rounded-[10px] cursor-pointer transition-colors ${
                        theme === "light"
                          ? "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                          : "text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      <TiWeatherSunny size={22} />
                      <span className="text-[18px] font-semibold">Light</span>
                    </div>

                    <div
                      onClick={() => setTheme("dark")}
                      className={`flex items-center gap-2 border py-2 px-4 rounded-[10px] cursor-pointer transition-colors ${
                        theme === "dark"
                          ? "bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800"
                          : "text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      <TiWeatherNight size={22} />
                      <span className="text-[18px] font-semibold">Dark</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-[18px] text-slate-800 dark:text-slate-200 font-semibold">
                      Theme Direction
                    </span>
                    <div className="flex items-center gap-5 mt-3">
                      {/* LTR */}
                      <div
                        onClick={() => setDirection("ltr")}
                        className={`flex items-center gap-2 border py-2 px-4 rounded-[10px] cursor-pointer transition-colors
                  ${
                    direction === "ltr"
                      ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                      : "text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                `}
                      >
                        <BiMenuAltLeft size={22} />
                        <span className="text-[18px] font-semibold">LTR</span>
                      </div>

                      {/* RTL */}
                      <div
                        onClick={() => setDirection("rtl")}
                        className={`flex items-center gap-2 border py-2 px-4 rounded-[10px] cursor-pointer transition-colors
                  ${
                    direction === "rtl"
                      ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                      : "text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                `}
                      >
                        <BiMenuAltRight size={22} />
                        <span className="text-[18px] font-semibold">RTL</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-[18px] text-slate-800 dark:text-slate-200 font-semibold">
                      Theme Colors
                    </span>

                    <div className="flex items-center flex-wrap gap-4 mt-3">
                      {colors.map((color) => (
                        <div
                          key={color.id}
                          onClick={() => setThemeColor(color.name)}
                          className={`
                            w-8 h-8 rounded-full cursor-pointer transition-all 
                            ${color.value}
                            ${
                              themeColor === color.name
                                ? "ring-4 ring-offset-2 ring-slate-500 dark:ring-slate-300"
                                : ""
                            }
                        `}
                        />
                      ))}
                    </div>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      Selected:{" "}
                      <span className="font-semibold">{themeColor}</span>
                    </p>
                  </div>

                  <div className="mt-5">
                    <span className="text-[18px] text-slate-800 dark:text-slate-200 font-semibold">
                      Sidebar Type
                    </span>
                    <div className="flex items-center gap-5 mt-3">
                      {/* Full Mode */}
                      <div
                        onClick={() => handleToggle("full")}
                        className={`flex items-center gap-2 border py-2 px-4 rounded-[10px] cursor-pointer transition-colors
                         ${
                           sidebarMode === "full"
                             ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                             : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                         }
                       `}
                      >
                        <HiOutlineBars4 size={22} />
                        <span className="text-[18px] font-semibold">Full</span>
                      </div>

                      {/* Collapse Mode */}
                      <div
                        onClick={() => handleToggle("collapse")}
                        className={`flex items-center gap-2 border py-2 px-4 rounded-[10px] cursor-pointer transition-colors
                          ${
                            sidebarMode === "collapse"
                              ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                              : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                          }
                        `}
                      >
                        <LiaAlignLeftSolid size={22} />
                        <span className="text-[18px] font-semibold">
                          Collapse
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[18px] text-slate-800 dark:text-slate-200 font-semibold">
                      Select Langauge
                    </span>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setActiveLang(lang)}
                          className={`border py-2 px-5 text-[18px] font-semibold rounded-[6px] 
                          ${
                            activeLang === lang
                              ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900" // Active styles
                              : "border-slate-800/50 text-slate-800 dark:text-slate-300 dark:border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Account Section */}
                  {/* <div>
                    <h3 className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                      Account
                    </h3>
                    <button className="w-full text-left p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200">
                      Manage Profile
                    </button>
                    <button className="w-full mt-2 text-left p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200">
                      Logout
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="relative" ref={popupRef}>
              <div
                className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => setOpenProfile(!openProfile)}
              >
                <img
                  src={User}
                  alt="user"
                  className="w-10 h-10 rounded-full ring-2 ring-blue-500"
                />
              </div>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-50">
                  <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700">
                    <img
                      src={User}
                      alt="user"
                      className="w-12 h-12 rounded-full ring-2 ring-blue-500"
                    />
                    <div>
                      <p className="text-[18px] font-semibold text-slate-800 dark:text-slate-200">
                        Chiranjeet
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Administrator
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <Link
                      onClick={() => setOpenProfile(!openProfile)}
                      to="profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <FaUser /> Profile
                    </Link>
                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors">
                      <FaMoneyBillWave /> Earning
                    </button>
                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors">
                      <FaQuestionCircle /> Help Center
                    </button>
                    <Link
                      to="login"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-red-500 dark:text-red-400 transition-colors"
                    >
                      <FaSignOutAlt /> Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
