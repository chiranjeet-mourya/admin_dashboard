import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import India from "../../assets/india.png";
import USA from "../../assets/usa.jpg";
import Germany from "../../assets/germany.jpg";
import Spain from "../../assets/spain.jpg";
import SplineChart from "./SplineChart";

const topCountry = [
  {
    img: India,
    value: "35,365",
    name: "India",
  },
  {
    img: USA,
    value: "35,365",
    name: "USA",
  },
  {
    img: Germany,
    value: "24,865",
    name: "Germany",
  },
  {
    img: Spain,
    value: "18,369",
    name: "Spain",
  },
];

const Reports = () => {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Analytics
          <MdKeyboardDoubleArrowRight className="mt-1" size={24} />
          Reports
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <h1 className="text-[20px] font-bold text-slate-800 dark:text-white">
          Top Country
        </h1>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-2">
          {topCountry.map((country, index) => {
            return (
              <div key={index} className="flex gap-3">
                <img
                  src={country.img}
                  alt={country.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-[18px] font-bold text-slate-800 dark:text-white">
                    {country.value}
                  </h2>
                  <p className="text-slate-500 font-semibold dark:text-slate-300">
                    {country.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <SplineChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
          <h1 className="text-[20px] font-bold text-slate-800 dark:text-white mb-4">
            Visits Details
          </h1>

          <div className="w-full overflow-x-auto">
            <table className="w-[450px] md:w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    URL
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Views
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Uniques
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { url: "https://", views: "4.2k", uniques: "7.9k" },
                  { url: ".com/dashboard", views: "7.0k", uniques: "1.2k" },
                  { url: ".com/ecommerce-index", views: "6.8k", uniques: "5.5k" },
                  { url: ".com/apps/projects-overview", views: "8.2k", uniques: "4k" },
                  { url: ".com/blog/crypto/exchange", views: "9.5k", uniques: "4.0k" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-200 dark:border-slate-700 
            hover:bg-slate-50 dark:hover:bg-slate-800/50 
            ${
              i % 2 === 0
                ? "bg-white dark:bg-slate-900"
                : "bg-slate-50 dark:bg-slate-900/70"
            }`}
                  >
                    <td className="px-4 py-2 text-slate-800 dark:text-slate-200">
                      {row.url}
                    </td>
                    <td className="px-4 py-2 text-slate-800 dark:text-slate-200">
                      {row.views}
                    </td>
                    <td className="px-4 py-2 text-slate-800 dark:text-slate-200">
                      {row.uniques}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
          <h1 className="text-[20px] font-bold text-slate-800 dark:text-white mb-4">
            By Social Media
          </h1>
          <div className="w-full overflow-x-auto">
            <table className="w-[400px] md:w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Source
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Views
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Uniques
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { url: "Twitter", views: "4.2k", uniques: "7.9k" },
                  { url: "Facebook", views: "7.0k", uniques: "1.2k" },
                  { url: "Instagram", views: "6.8k", uniques: "5.5k" },
                  { url: "LinkedIn", views: "8.2k", uniques: "4k" },
                  { url: "WhatsApp", views: "9.5k", uniques: "4.0k" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-200 dark:border-slate-700 
            hover:bg-slate-50 dark:hover:bg-slate-800/50 
            ${
              i % 2 === 0
                ? "bg-white dark:bg-slate-900"
                : "bg-slate-50 dark:bg-slate-900/70"
            }`}
                  >
                    <td className="px-4 py-2 text-slate-800 dark:text-slate-200">
                      {row.url}
                    </td>
                    <td className="px-4 py-2 text-slate-800 dark:text-slate-200">
                      {row.views}
                    </td>
                    <td className="px-4 py-2 text-slate-800 dark:text-slate-200">
                      {row.uniques}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
