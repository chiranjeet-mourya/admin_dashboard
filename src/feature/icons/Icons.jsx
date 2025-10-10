import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as CiIcons from "react-icons/ci";
import { FaCheck, FaSearch } from "react-icons/fa";
import Loader from "../../component/Loader";

const Icons = () => {
  const [copiedIcon, setCopiedIcon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const allIcons = [
    ...Object.keys(FaIcons),
    ...Object.keys(MdIcons),
    ...Object.keys(BiIcons),
    ...Object.keys(CiIcons),
  ];

  const getLibrary = (iconName) => {
    if (FaIcons[iconName]) return "fa";
    if (MdIcons[iconName]) return "md";
    if (BiIcons[iconName]) return "bi";
    if (CiIcons[iconName]) return "ci";
    return null;
  };

  const handleCopy = (iconName) => {
    const lib = getLibrary(iconName);
    if (!lib) return;

    const code = `import { ${iconName} } from "react-icons/${lib}";\n<${iconName} />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const getIconComponent = (iconName) => {
    return (
      FaIcons[iconName] ||
      MdIcons[iconName] ||
      BiIcons[iconName] ||
      CiIcons[iconName]
    );
  };

  const filteredIcons = allIcons.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
      <Loader /> 
    </div>
      )} */}

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Dashboard
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Icons
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex gap-5 items-center justify-between">
          <h1 className="text-[18px] font-bold text-slate-800 dark:text-white mb-4">
            All React Icons
          </h1>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[80vh] overflow-y-auto">
          {filteredIcons.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
              <p className="text-slate-600 dark:text-slate-300 text-[16px] font-medium">
                ❌ No icons found for "
                <span className="font-semibold">{searchTerm}</span>"
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1">
                Try searching another name (e.g.{" "}
                <span className="italic">FaBeer</span>,{" "}
                <span className="italic">MdHome</span>
                <span className="italic">BiIcons</span>
                <span className="italic">CiIcons</span>)
              </p>
            </div>
          ) : (
            filteredIcons.map((iconName, index) => {
              const Icon = getIconComponent(iconName);
              if (!Icon) return null;

              return (
                <div
                  key={index}
                  onClick={() => handleCopy(iconName)}
                  className="relative group flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
                >
                  <Icon
                    size={24}
                    className="text-slate-700 dark:text-slate-200"
                  />
                  <p className="text-[12px] text-slate-600 dark:text-slate-300 truncate w-full text-center">
                    {iconName}
                  </p>

                  {copiedIcon === iconName && (
                    <div className="absolute inset-0 bg-slate-800/80 flex flex-col items-center justify-center rounded-lg text-white text-sm">
                      <FaCheck className="mb-1" /> Code Copied!
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Icons;
