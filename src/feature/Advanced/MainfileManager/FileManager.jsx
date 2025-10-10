import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import googleD from "../../../assets/fileManager_logo/gdrive.png";
import dropbox from "../../../assets/fileManager_logo/dropbox.png";
import onedrive from "../../../assets/fileManager_logo/onedrive.png";
import server from "../../../assets/fileManager_logo/server.png";
import { HiDotsVertical } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { PiImageSquareFill } from "react-icons/pi";
import { MdAudiotrack } from "react-icons/md";

import Document from "./Document";
import Images from "./Images";
import Audio from "./Audio";

const filesBoxData = [
  {
    img: googleD,
    icon: <HiDotsVertical />,
    name: "Google Drive",
    file: "34",
    gb: "500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    parecent: "38%",
  },
  {
    img: dropbox,
    icon: <HiDotsVertical />,
    name: "Dropbox",
    file: "68",
    gb: "500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    parecent: "15%",
  },
  {
    img: onedrive,
    icon: <HiDotsVertical />,
    name: "Onedrive",
    file: "192",
    gb: "500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    parecent: "48%",
  },
  {
    img: server,
    icon: <HiDotsVertical />,
    name: "Server",
    file: "81",
    gb: "500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    parecent: "70%",
  },
];

const FileManager = () => {
  const [activeTab, setActiveTab] = useState("Documents");
  const [activeMenu, setActiveMenu] = useState(null);
  const menuref = useRef([]);

  useEffect(() => {
    const handleClickMenu = (event) => {
      menuref.current.forEach((ref, idx) => {
        if (ref && !ref.contains(event.target)) {
          setActiveMenu(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickMenu);
    return () => document.removeEventListener("mousedown", handleClickMenu);
  }, []);

  const tabs = [
    { name: "Documents", icon: <CgFileDocument /> },
    { name: "Images", icon: <PiImageSquareFill /> },
    { name: "Audio", icon: <MdAudiotrack /> },
  ];


  return (
    <>
      {/* <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Advanced UI
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          File Managers
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filesBoxData.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 relative shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <img src={item.img} alt={item.name} className="w-14 h-14" />

              <div
                className="relative"
                ref={(el) => (menuref.current[index] = el)}
              >
                <div
                  onClick={() =>
                    setActiveMenu(activeMenu === index ? null : index)
                  }
                  className="cursor-pointer text-slate-500 dark:text-slate-300"
                >
                  {item.icon}
                </div>
              </div>
              {activeMenu === index && (
                <div className="absolute top-11 right-3 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col">
                    <li
                      className="px-4 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                      onClick={() => alert(`View Detail of ${item.name}`)}
                    >
                      View Detail
                    </li>
                    <li
                      className="px-4 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                      onClick={() => alert(`Clear All in ${item.name}`)}
                    >
                      Clear All
                    </li>
                    <li
                      className="px-4 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-red-500"
                      onClick={() => alert(`Delete ${item.name}`)}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <h2 className="font-bold text-slate-800 dark:text-white text-lg mb-2">
              {item.name}
            </h2>

            <div className="flex items-center justify-between my-2 text-slate-600 dark:text-slate-400 text-sm">
              <p>
                <strong>{item.file}</strong> Files
              </p>
              <p>
                <strong>{item.gb}</strong> GB
              </p>
            </div>

            <div className="w-full bg-slate-300 dark:bg-slate-700 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${
                  item.name === "Google Drive"
                    ? "bg-emerald-500"
                    : item.name === "Dropbox"
                    ? "bg-blue-500"
                    : item.name === "Onedrive"
                    ? "bg-purple-500"
                    : "bg-orange-500"
                }`}
                style={{ width: item.parecent }}
              ></div>
            </div>
            <p className="text-right text-sm text-slate-500 dark:text-slate-400 mt-1">
              {item.parecent} Used
            </p>
          </div>
        ))}
      </div>

      <div className="border-b border-slate-300 dark:border-slate-800 flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex gap-1 items-center py-2 px-3 font-semibold transition-all rounded-t-md
        ${
          activeTab === tab.name
            ? "bg-slate-200/50 dark:bg-slate-700/50 border-b-2 border-purple-700 text-slate-900 dark:text-white"
            : "bg-transparent border-b-2 border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
        }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Documents" && (
          <Document/>
        )}

        {activeTab === "Images" && (
          <Images/>
        )}

        {activeTab === "Audio" && (
          <Audio/>
        )}
      </div>
    </>
  );
};

export default FileManager;
