import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiHummingbird } from "react-icons/gi";
import { GiBirdClaw } from "react-icons/gi";
import { FaGripfire } from "react-icons/fa";

const plans = [
  {
    title: "Basic plan",
    price: "$39.00",
    features: [
      "30GB Disk Space",
      "30 Email Accounts",
      "30GB Monthly Bandwidth",
      "06 Subdomains",
      "10 Domains",
    ],
    buttonColor: "bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900",
  },
  {
    title: "Premium Plan",
    price: "$49.00",
    features: [
      "30GB Disk Space",
      "30 Email Accounts",
      "30GB Monthly Bandwidth",
      "06 Subdomains",
      "10 Domains",
    ],
    buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  {
    title: "Plus Plan",
    price: "$69.00",
    features: [
      "30GB Disk Space",
      "30 Email Accounts",
      "30GB Monthly Bandwidth",
      "06 Subdomains",
      "10 Domains",
    ],
    buttonColor: "bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900",
  },
  {
    title: "Master Plan",
    price: "$199.00",
    features: [
      "30GB Disk Space",
      "30 Email Accounts",
      "30GB Monthly Bandwidth",
      "06 Subdomains",
      "10 Domains",
    ],
    buttonColor: "bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900",
  },
];

const plans2 = [
  {
    id: 1,
    icon: <GiHummingbird/>,
    price: "$39.00",
    plan: "Basic plan",
    bgcolor:"bg-blue-100",
    color:"text-blue-500"
  },
  {
    id: 2,
    icon: <GiBirdClaw/>,
    price: "$49.00",
    plan: "Basic plan",
    bgcolor:"bg-red-100",
    color:"text-red-500"
  },
  {
    id: 3,
    icon: <GiBirdClaw/>,
    price: "$69.00",
    plan: "Basic plan",
    bgcolor:"bg-green-100",
    color:"text-green-500"
  },
  {
    id: 4,
    icon: <FaGripfire/>,
    price: "$199.00",
    plan: "Basic plan",
    bgcolor:"bg-yellow-100",
    color:"text-yellow-500"
  },
];

const Pricing = () => {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Dashboard
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Pricing
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.price}
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </p>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2 border-b border-slate-200 pb-2"
                  >
                    <span className="text-indigo-500 w-[20px] h-[20px] bg-slate-200 rounded-full">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`${plan.buttonColor} mt-6 w-full py-2 rounded-md font-semibold transition`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {plans2.map((p) => (
          <div
            key={p.id}
            className={`rounded-xl bg-white dark:bg-slate-800 overflow-hidden shadow-md border border-gray-200 dark:border-slate-700 ${p.color}`}
          >
            <div className="flex flex-col items-center bg-opacity-30">
              <div className={`text-[50px] mb-4 ${p.bgcolor} w-full py-8 flex items-center justify-center`}>{p.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                {p.price}
                <span className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  /month
                </span>
              </h2>
              <h3 className="mt-2 font-semibold text-gray-700 dark:text-gray-200">
                {p.plan}
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <li className="border-b border-slate-200 pb-2"><span className="text-indigo-500">✔</span> 30GB Disk Space</li>
                <li className="border-b border-slate-200 pb-2"><span className="text-indigo-500">✔</span> 30 Email Accounts</li>
                <li className="border-b border-slate-200 pb-2"><span className="text-indigo-500">✔</span> 30GB Monthly Bandwidth</li>
                <li className="border-b border-slate-200 pb-2"><span className="text-indigo-500">✔</span> 06 Subdomains</li>
                <li className="border-b border-slate-200 pb-2"><span className="text-indigo-500">✔</span> 10 Domains</li>
              </ul>

              <button className="my-8 px-6 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
