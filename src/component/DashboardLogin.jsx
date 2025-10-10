import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import ForgotPassword from "./ForgotPassword";
import { FaSignature } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader";

const DashboardLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const multiUser = [
    { email: "Admin055@gmail.com", password: "Admin055" },
    { email: "chiranjeetsingh055@gmail.com", password: "saini22055" },
    { email: "ranjeet055@gmail.com", password: "Admin055" },
    { email: "test055@gmail.com", password: "Admin055" },
    { email: "user055@gmail.com", password: "Admin055" },
  ];

  if (!localStorage.getItem("multiUser")) {
    localStorage.setItem("multiUser", JSON.stringify(multiUser));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("multiUser")) || [];

    if (!username.trim() || !password.trim()) {
      toast.error("Credentials are required");

      return;
    }
    setLoading(true);

    const foundUser = storedUsers.find(
      (user) => user.email === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login Successfully!");
      setTimeout(() =>{
        navigate("/");
      },[1500])
    } else {
      toast.error("Invalid username or password");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
          <Loader />
        </div>
      ) : (
        <div className="min-h-screen flex">
          <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-500 to-purple-600 items-center justify-center relative text-white p-10">
            <ToastContainer />
            <div className=" text-center space-y-4 z-10">
              <h1 className="text-[40px] font-bold leading-tight">
                Welcome to
                <span className="text-yellow-300">Signature Dashboard</span>
              </h1>

              <p className="text-2xl font-semibold text-white mt-4">
                {(() => {
                  const hour = new Date().getHours();
                  if (hour < 12) return "🌅 Good Morning!";
                  if (hour < 18) return "☀️ Good Afternoon!";
                  return "🌙 Good Evening!";
                })()}
              </p>

              <p className="text-lg opacity-90">
                Manage users, track analytics, and control your digital
                workspace — all from one secure place.
              </p>

              {/* <div className="w-full h-[300px] rounded-[10px]">
            <img src={image} alt="" className="w-full h-full rounded-[10px]"/>
          </div> */}
            </div>

            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          </div>

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
              {!showForgotPassword ? (
                <>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300" />
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      />
                      <div
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 dark:text-slate-300"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-300">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        Remember me
                      </label>
                      <button
                        onClick={() => setShowForgotPassword(true)}
                        type="button"
                        className="hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center font-medium">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
                    >
                      Login
                    </button>
                  </form>
                </>
              ) : (
                <div>
                  <ForgotPassword />
                  <button
                    className="mt-5 font-semibold bg-slate-200 p-2 rounded-[6px]"
                    onClick={() => setShowForgotPassword(false)}
                  >
                    ← Back to Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLogin;
