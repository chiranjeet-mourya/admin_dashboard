import React, { useEffect, useState } from "react";
import { CiCalculator2 } from "react-icons/ci";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistoryPanel, setShowHistoryPanel] = useState(false);

  useEffect(() => {
    let saved = localStorage.getItem("calcHistory");

    try {
      saved = saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.warn("Corrupted history found — resetting...");
      saved = [];
    }

    setHistory(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("calcHistory", JSON.stringify(history));
  }, [history]);

  const handleClick = (value) => {
    if (value === "C") return setInput("");
    if (value === "=") {
      try {
        const result = eval(input).toString();

        const newHistory = [...history, `${input} = ${result}`];
        setHistory(newHistory);
        setInput(result);
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput(input + value);
  };

  const buttons = [
    "C",
    "/",
    "*",
    "⌫",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-3xl w-full md:w-[50%] shadow border dark:border-gray-700 transition-all">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Calculator
            </h1>
          </div>

          <div className="w-full bg-gray-100 dark:bg-gray-700 text-right p-4 rounded-xl text-3xl font-semibold text-gray-800 dark:text-white mb-4 overflow-x-auto">
            {input || "0"}
          </div>

          <div className="grid grid-cols-4 gap-3">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() =>
                  btn === "⌫" ? setInput(input.slice(0, -1)) : handleClick(btn)
                }
                className={`
                  p-4 rounded-xl text-lg font-semibold
                  bg-gray-200 dark:bg-gray-700 
                  text-gray-800 dark:text-white 
                  hover:bg-gray-300 dark:hover:bg-gray-600 
                  transition-all
                `}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

          {!showHistoryPanel && (
            <button
              onClick={() => setShowHistoryPanel(true)}
              className="flex items-center justify-center text-white w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transition-all relative"
            >
              <CiCalculator2 size={24} />
              {history.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-[2px] rounded-full absolute -top-2 -right-2">
                  {history.length}
                </span>
              )}
            </button>
          )}

          {showHistoryPanel && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl w-full md:w-[50%] shadow border dark:border-gray-700 transition-all">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  History
                </h2>

                {/* Close Button */}
                <button
                  onClick={() => setShowHistoryPanel(false)}
                  className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                  Close
                </button>
              </div>

              {/* Clear All */}
              <button
                onClick={() => setHistory([])}
                className="mb-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear History
              </button>

              <div className="h-[400px] overflow-y-auto pr-2">
                {history.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    No history yet...
                  </p>
                ) : (
                  history.map((item, i) => (
                    <p
                      key={i}
                      className="text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 py-2 text-sm"
                    >
                      {item}
                    </p>
                  ))
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Calculator;
