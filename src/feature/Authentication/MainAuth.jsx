import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Login from "./Login";
import Register from "./Register";
import RePassword from "./RePassword";
import Error404 from "./Error404";
import Error500 from "./Error500";

const MainAuth = () => {
  const [activeSection, setActiveSection] = useState("Login");
  const buttons = [
    "Login",
    "Register",
    "Re-Password",
    "Error 404",
    "Error 500",
  ];

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Dashboard
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Authentications
        </div>
      </div>

      <div className="grid gap-5 grid-cols-5">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveSection(btn)}
            className={`py-2 px-4 text-[18px] font-semibold rounded-xl transition-all cursor-pointer ${
              activeSection === btn
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "text-slate-800 bg-slate-200 hover:bg-slate-300"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="py-5 bg-slate-100 dark:bg-slate-800 rounded-xl min-h-[180px]">
        {activeSection === "Login" && <Login/>}
        {activeSection === "Register" && <Register/>}
        {activeSection === "Re-Password" && (
          <RePassword/>
        )}
        {activeSection === "Error 404" && <Error404/>}
        {activeSection === "Error 500" && (
          <Error500/>
        )}
      </div>
    </>
  );
};

export default MainAuth;
