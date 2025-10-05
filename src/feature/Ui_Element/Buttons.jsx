import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCode, FaCopy, FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const OutlineButtons = [
  { label: "Primary", color: "#3F51B5" },
  { label: "Secondary", color: "#A8B5D1" },
  { label: "Success", color: "#17C653" },
  { label: "Warning", color: "#FFCC3B" },
  { label: "Info", color: "#00BCD4" },
  { label: "Danger", color: "#F8285A" },
  { label: "Dark", color: "#000000" },
  { label: "Light", color: "#A8B5D1" },
];

const Buttons = () => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCodeOutline, setShowCodeOutline] = useState(false);
  const [copiedOutline, setCopiedOutline] = useState(false);

  const buttons = [
    { label: "Primary", bgColor: "#3F51B5", textColor: "white" },
    { label: "Secondary", bgColor: "#A8B5D1", textColor: "white" },
    { label: "Success", bgColor: "#17C653", textColor: "white" },
    { label: "Warning", bgColor: "#FFCC3B", textColor: "white" },
    { label: "Info", bgColor: "#00BCD4", textColor: "white" },
    { label: "Danger", bgColor: "#F8285A", textColor: "white" },
    { label: "Dark", bgColor: "#000000", textColor: "white" },
    { label: "Light", bgColor: "#ffffff", textColor: "#3F51B5" },
  ];

  const codeString = `
import React from "react";

const ButtonList = () => {
  const buttons = [
    { label: "Primary", bgColor: "#3F51B5", textColor: "white" },
    { label: "Secondary", bgColor: "#A8B5D1", textColor: "white" },
    { label: "Success", bgColor: "#17C653", textColor: "white" },
    { label: "Warning", bgColor: "#FFCC3B", textColor: "white" },
    { label: "Info", bgColor: "#00BCD4", textColor: "white" },
    { label: "Danger", bgColor: "#F8285A", textColor: "white" },
    { label: "Dark", bgColor: "#000000", textColor: "white" },
    { label: "Light", bgColor: "#ffffff", textColor: "#3F51B5" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="py-1 px-3 rounded-[6px] shadow-md hover:shadow-none
           transition-all duration-200 shadow-slate-400"
          style={{
            backgroundColor: btn.bgColor,
            color: btn.textColor,
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeStringOutline = `
import React from "react";

const OutlineButtonList = () => {
  const buttons = [
    { label: "Primary", color: "#3F51B5" },
    { label: "Secondary", color: "#A8B5D1" },
    { label: "Success", color: "#17C653" },
    { label: "Warning", color: "#FFCC3B" },
    { label: "Info", color: "#00BCD4" },
    { label: "Danger", color: "#F8285A" },
    { label: "Dark", color: "#000000" },
    { label: "Light", color: "#A8B5D1" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="py-1 px-3 rounded-[6px] shadow-md hover:shadow-none
           transition-all duration-200 shadow-slate-400"
          style={{
            border: \`1px solid \${btn.color}\`,
            color: btn.color,
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default OutlineButtonList;
`;

  const handleCopyOutline = () => {
    navigator.clipboard.writeText(codeStringOutline);
    setCopiedOutline(true);
    setTimeout(() => setCopiedOutline(false), 2000);
  };

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          UI Elements
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Buttons
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-3 shadow-md">
          <div className="flex gap-2 items-center justify-between">
            <h1 className="text-[17px] font-bold text-slate-800 dark:text-white">
              Default Buttons
            </h1>
            <button
              onClick={() => setShowCode(true)}
              className="w-9 h-9 bg-slate-100 flex items-center justify-center rounded-[6px] text-slate-400 hover:bg-slate-200 transition-all"
            >
              <FaCode size={22} />
            </button>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className="py-1 px-3 rounded-[6px] shadow-md hover:shadow-none transition-all duration-200 shadow-slate-400"
                style={{
                  backgroundColor: btn.bgColor,
                  color: btn.textColor,
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          {showCode && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-5">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 w-[90%] md:w-[70%] lg:w-[60%] shadow-xl h-[600px] overflow-hidden relative">
                <button
                  onClick={() => setShowCode(false)}
                  className="absolute top-3 right-3 text-slate-500 hover:text-slate-800"
                >
                  <FaTimes size={20} />
                </button>

                <button
                  onClick={handleCopy}
                  className="absolute top-[10%] right-[8%] text-slate-600 hover:text-slate-800 dark:hover:text-white dark:text-slate-400 flex items-center gap-2 transition-all"
                >
                  {copied ? (
                    <>
                      <FaCheck size={18} className="text-green-500" /> Copied
                    </>
                  ) : (
                    <>
                      <FaCopy size={16} /> Code Copy
                    </>
                  )}
                </button>

                <pre className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-4 rounded-md  text-sm font-mono mt-6 h-[530px] overflow-y-auto">
                  <code>{codeString}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-3 shadow-md">
          <div className="flex gap-2 items-center justify-between">
            <h1 className="text-[17px] font-bold text-slate-800 dark:text-white">
              Outline Buttons
            </h1>
            <button
              onClick={() => setShowCodeOutline(true)}
              className="w-9 h-9 bg-slate-100 flex items-center justify-center rounded-[6px] text-slate-400 hover:bg-slate-200 transition-all"
            >
              <FaCode size={22} />
            </button>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {OutlineButtons.map((btn, index) => (
              <button
                key={index}
                className="py-1 px-3 rounded-[6px] shadow-md hover:shadow-none transition-all duration-200 shadow-slate-400"
                style={{
                  border: `1px solid ${btn.color}`,
                  color: btn.color,
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          {showCodeOutline && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 w-[90%] md:w-[70%] lg:w-[60%] shadow-xl h-[600px] overflow-hidden relative">
                <button
                  onClick={() => setShowCodeOutline(false)}
                  className="absolute top-3 right-3 text-slate-500 hover:text-slate-800"
                >
                  <FaTimes size={20} />
                </button>

                <button
                  onClick={handleCopyOutline}
                  className="absolute top-[10%] right-[8%] text-slate-500 hover:text-slate-800 flex items-center gap-2 dark:hover:text-white dark:text-slate-400 transition-all"
                >
                  {copiedOutline ? (
                    <>
                      <FaCheck size={18} className="text-green-500" /> Copied
                    </>
                  ) : (
                    <>
                      <FaCopy size={18} /> Code Copy
                    </>
                  )}
                </button>

                <pre className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-4 rounded-md h-[530px] overflow-y-auto text-sm font-mono mt-6">
                  <code>{codeStringOutline}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Buttons;
