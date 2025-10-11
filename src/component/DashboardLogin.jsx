import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSignature } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader";
import "react-toastify/dist/ReactToastify.css";

const DashboardLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://womenjamboree.org/test123/public/api/v1/admin/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok && data.status === true) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message || "Login failed");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <>
      <ToastContainer />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
          <Loader />
        </div>
      )}

      <div className="min-h-screen flex">
        {/* Left side */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-500 to-purple-600 items-center justify-center relative text-white p-10">
          <div className="text-center space-y-4 z-10">
            <h1 className="text-[40px] font-bold leading-tight">
              Welcome to
              <span className="text-yellow-300"> Signature Dashboard</span>
            </h1>
            <p className="text-2xl font-semibold text-white mt-4">
              {(() => {
                const hour = new Date().getHours();
                if (hour < 12) return "🌅 Good Morning!";
                if (hour < 18) return "☀️ Good Afternoon!";
                return "🌙 Good Evening!";
              })()}
            </p>
            <p className="text-lg opacity-90 leading-5">
              Manage users, track analytics, and control your digital workspace. <br /><span className="text-[14px]"> admin@gmail.com Admin@2025##123</span>
            </p>
          </div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-center p-8 bg-slate-200">
          <div className="w-full max-w-[80%] bg-white dark:bg-slate-900 rounded-2xl shadow-md p-8">
            <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <FaSignature className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-[24px] font-bold text-center text-slate-800 dark:text-white">
              Welcome to the Admin Signature Dashboard
            </h1>
            <p className="mb-5 text-center text-slate-500 dark:text-slate-400">
              Please enter your credentials to continue
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 dark:text-slate-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLogin;
