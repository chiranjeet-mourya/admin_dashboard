import React from "react";
import {
  FiSearch,
  FiMail,
  FiPhoneCall,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";

const HelpCenter = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* TOP GRADIENT SECTION */}
      <div className="w-full py-10 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Help Center
        </h1>
        <p className="text-gray-200 mt-2 max-w-2xl mx-auto text-lg">
          Find answers, explore help articles, or contact our support team.
        </p>

        <div className="mt-7 flex items-center bg-white/20 backdrop-blur-xl text-white 
                        shadow-lg rounded-2xl px-4 py-3 max-w-xl mx-auto border border-white/30">
          <FiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full bg-transparent ml-3 outline-none text-white placeholder-white/80"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            icon: <FiMessageCircle className="text-4xl" />,
            color: "text-blue-500",
            title: "FAQs",
            desc: "Browse commonly asked questions for instant help.",
          },
          {
            icon: <FiMail className="text-4xl" />,
            color: "text-purple-500",
            title: "Email Support",
            desc: "Send us an email and get detailed support directly.",
          },
          {
            icon: <FiPhoneCall className="text-4xl" />,
            color: "text-green-500",
            title: "Call Support",
            desc: "Connect with our support team via phone call.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/40 
                       dark:border-gray-700 rounded-3xl p-7 shadow-md hover:shadow-xl transition
                       hover:-translate-y-1 cursor-pointer"
          >
            <div className={`${item.color} mb-3 group-hover:scale-110 transition`}>
              {item.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>

            <div className="flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 font-semibold">
              Learn More
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                        rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-3">Still Need Help?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Fill out the form below and our support team will get back to you.
          </p>

          {/* FORM */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 
                         dark:border-gray-600 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 
                         dark:border-gray-600 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 
                         dark:border-gray-600 outline-none"
            ></textarea>

            <button className="w-full py-3 rounded-lg cursor-pointer dark:text-slate-100 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-m transition">
              Submit Request
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default HelpCenter;
