import React, { useState } from "react";
import { FaSignature } from "react-icons/fa6";

const RePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle reset password logic here
    console.log("New Password:", newPassword);
    alert("Password reset successfully!");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-[60%] mx-auto p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md">
      <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
        <FaSignature className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-white">
        Reset Password
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* New Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-slate-700 dark:text-slate-200">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-slate-700 dark:text-slate-200">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default RePassword;
