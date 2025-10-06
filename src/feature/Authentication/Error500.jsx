import React from "react";
import { FiZap } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // if using react-router

const Error500 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md">
      <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
        <FiZap className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">
        Internal Server Error
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Oops! Something went wrong on our end. Please try again later.
      </p>
      <button
        onClick={() => navigate("/")} // go back to home
        className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error500;
