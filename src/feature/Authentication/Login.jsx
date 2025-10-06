import React, { useState } from "react";
import { FiZap } from "react-icons/fi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md">
      <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
        <FiZap className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-white">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-slate-700 dark:text-slate-200">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-slate-700 dark:text-slate-200">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            id="remember"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="remember"
            className="text-slate-700 dark:text-slate-200 text-sm"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
