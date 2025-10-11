import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Highlight = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const theme = document.documentElement.classList.contains("dark")
    ? oneDark
    : oneLight;

  const htmlCode = `
<div class="card-header">
  <h4 class="card-title">Highlight HTML</h4>
  <p class="text-muted mb-0">Escape code</p>
  <p class="text-muted mb-0">Admin Signature Dashboard</p>
</div>
`;

  const jsCode = `
var dropdownMenus = document.querySelectorAll('.dropdown-menu.stop');
dropdownMenus.forEach(function(dropdownMenu) {
  dropdownMenu.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
`;

  const cssCode = `
:root {
  --primary-color: #2563eb;
  --secondary-color: #9333ea;
  --background-light: #f8fafc;
  --background-dark: #0f172a;
  --text-light: #1e293b;
  --text-dark: #f1f5f9;
}

button {
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: var(--secondary-color);
}
`;

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 mb-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Advanced UI
          <MdKeyboardDoubleArrowRight className="mt-1" size={24} />
          Highlight
        </div>
      </div>

      {copied && (
        <div className="fixed top-[22%] right-[35%] bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fadeIn">
          Code copied!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
              HTML Code
            </h1>
            <FaCode
              onClick={() => handleCopy(htmlCode)}
              title="Copy HTMl Code"
              size={22}
              className="text-slate-500 cursor-pointer"
            />
          </div>
          <div className="w-full h-auto mt-3 rounded-[6px] overflow-auto text-sm">
            <SyntaxHighlighter
              language="html"
              style={theme}
              customStyle={{
                background: "transparent",
                padding: "16px",
                borderRadius: "6px",
                height: "100%",
              }}
              wrapLines={true}
              showLineNumbers
            >
              {htmlCode}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
              JavaScript Code
            </h1>
            <FaCode
              onClick={() => handleCopy(jsCode)}
              title="Copy JavaScript code"
              size={22}
              className="text-slate-500 cursor-pointer"
            />
          </div>
          <div className="w-full h-auto mt-3 rounded-[6px] overflow-auto text-sm">
            <SyntaxHighlighter
              language="javascript"
              style={theme}
              customStyle={{
                background: "transparent",
                padding: "16px",
                borderRadius: "6px",
                height: "100%",
              }}
              wrapLines={true}
              showLineNumbers
            >
              {jsCode}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] font-bold text-slate-800 dark:text-white">
              CSS Code
            </h1>
            <FaCode
              onClick={() => handleCopy(cssCode)}
              title="Copy CSS code"
              size={22}
              className="text-slate-500 cursor-pointer"
            />
          </div>

          <div className="w-full h-auto mt-3 rounded-[6px] overflow-y-auto text-sm">
            <SyntaxHighlighter
              language="css"
              style={theme}
              customStyle={{
                background: "transparent",
                padding: "16px",
                borderRadius: "6px",
                height: "100%",
              }}
              wrapLines={true}
              showLineNumbers
            >
              {cssCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
