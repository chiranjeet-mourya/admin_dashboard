import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMapCharts = () => {
  const [darkMode, setDarkMode] = useState(false);

  const maps = [
    { title: "World Map - Normal" },
    { title: "World Map - Zoomed" },
    { title: "World Map - Dark Style" },
    { title: "World Map - Highlighted" },
    { title: "World Map - Regions" },
    { title: "World Map - Asia Focus" },
    { title: "World Map - Europe Focus" },
    { title: "World Map - Americas Focus" },
    { title: "World Map - Africa Focus" },
    { title: "World Map - Oceania Focus" },
  ];

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 mb-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Charts <MdKeyboardDoubleArrowRight size={24} /> Toast UI
        </div>
      </div>

      <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
        <div className="flex justify-start mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md"
          >
            {darkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {maps.map((map, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
                {map.title}
              </h2>
              <ComposableMap
                projectionConfig={{ scale: 130 }}
                width={800}
                height={400}
              >
                <ZoomableGroup zoom={index % 2 === 0 ? 1 : 2}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={darkMode ? "#334155" : "#E2E8F0"}
                          stroke={darkMode ? "#475569" : "#CBD5E1"}
                        />
                      ))
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorldMapCharts;
