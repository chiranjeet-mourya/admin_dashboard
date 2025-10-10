import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your registered email.");
      setShowOtp(true);
      return;
    }

    toast.success("Reset Password");
    setEmail("");
  };

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 4) {
      toast.error("Please enter a valid 4-digit OTP.");
      return;
    }
    toast.success("OTP verified successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center">
      <ToastContainer />
      <div className=" dark:bg-slate-800 p- rounded-2xl w-full max-w-md text-center">
        <form
          onSubmit={showOtp ? handleVerifyOtp : handleSubmit}
          className="flex flex-col gap-4"
        >
          {!showOtp && (
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
            />
          )}

          {!showOtp && (
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Reset Password
            </button>
          )}

          {showOtp && (
            <>
              <div className="mt-2 flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-12 h-12 text-center text-xl font-semibold border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Verify OTP
              </button>
            </>
          )}
        </form>

        {message && (
          <p
            className={`mt-4 font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
