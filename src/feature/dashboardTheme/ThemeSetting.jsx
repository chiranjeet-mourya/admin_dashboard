import React, { useState } from "react";
import { SketchPicker } from "react-color"; // npm install react-color

export default function ThemeSetting() {
  // Default states
  const defaultSettings = {
    bodyColor: "#ffffff",
    headerColor: "#1e293b",
    sidebarColor: "#334155",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 400,
    imgWidth: 150,
    imgHeight: 150,
    borderRadius: 8,
  };

  // Current theme state
  const [theme, setTheme] = useState(defaultSettings);

  // Handle reset
  const handleReset = () => setTheme(defaultSettings);

  // Handle save
  const handleSave = () => {
    localStorage.setItem("dashboardTheme", JSON.stringify(theme));
    alert("🎉 Theme saved successfully!");
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundColor: theme.bodyColor,
        fontFamily: theme.fontFamily,
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          🎨 Dashboard Theme Customization
        </h1> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">
              Color Settings
            </h2>
            <div className="space-y-6">
              {[
                { label: "Body Color", key: "bodyColor" },
                { label: "Header Color", key: "headerColor" },
                { label: "Sidebar Color", key: "sidebarColor" },
              ].map((item) => (
                <div key={item.key}>
                  <p className="font-medium mb-2">{item.label}</p>
                  <SketchPicker
                    color={theme[item.key]}
                    onChangeComplete={(color) =>
                      setTheme({ ...theme, [item.key]: color.hex })
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">
               Font Customization
            </h2>
            <div className="space-y-5">
              <div>
                <p className="font-medium mb-1">Font Family</p>
                <select
                  className="border rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={theme.fontFamily}
                  onChange={(e) =>
                    setTheme({ ...theme, fontFamily: e.target.value })
                  }
                >
                  <option>Poppins</option>
                  <option>Roboto</option>
                  <option>Montserrat</option>
                  <option>Inter</option>
                  <option>Arial</option>
                </select>
              </div>

              <div>
                <p className="font-medium mb-1">Font Size (px)</p>
                <input
                  type="number"
                  className="border rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={theme.fontSize}
                  onChange={(e) =>
                    setTheme({ ...theme, fontSize: Number(e.target.value) })
                  }
                />
              </div>

              <div>
                <p className="font-medium mb-1">Font Weight</p>
                <input
                  type="number"
                  className="border rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={theme.fontWeight}
                  onChange={(e) =>
                    setTheme({ ...theme, fontWeight: Number(e.target.value) })
                  }
                />
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">
               Image Settings
            </h2>
            <div className="space-y-5">
              <div>
                <p className="font-medium mb-1">Image Width (px)</p>
                <input
                  type="number"
                  className="border rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={theme.imgWidth}
                  onChange={(e) =>
                    setTheme({ ...theme, imgWidth: Number(e.target.value) })
                  }
                />
              </div>
              <div>
                <p className="font-medium mb-1">Image Height (px)</p>
                <input
                  type="number"
                  className="border rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={theme.imgHeight}
                  onChange={(e) =>
                    setTheme({ ...theme, imgHeight: Number(e.target.value) })
                  }
                />
              </div>

              <div className="flex justify-center mt-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Preview"
                  style={{
                    width: `${theme.imgWidth}px`,
                    height: `${theme.imgHeight}px`,
                    borderRadius: `${theme.borderRadius}px`,
                  }}
                  className="border border-gray-300 shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">
               Miscellaneous
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-1">Border Radius (px)</p>
                <input
                  type="number"
                  className="border rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={theme.borderRadius}
                  onChange={(e) =>
                    setTheme({ ...theme, borderRadius: Number(e.target.value) })
                  }
                />
              </div>

              <div
                className="mt-5 p-4 border text-center"
                style={{
                  borderRadius: `${theme.borderRadius}px`,
                  backgroundColor: theme.sidebarColor,
                  color: theme.bodyColor,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSize,
                  fontWeight: theme.fontWeight,
                }}
              >
                Live Preview Box
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            Save Settings
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
             Reset
          </button>
        </div>

        {/* Live Preview */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Live Dashboard Preview
          </h2>
          <div
            className="p-8 mx-auto rounded-3xl shadow-lg border w-full max-w-4xl"
            style={{
              backgroundColor: theme.headerColor,
              color: theme.bodyColor,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSize,
              fontWeight: theme.fontWeight,
              borderRadius: theme.borderRadius,
            }}
          >
            <p>This is your customized dashboard preview area.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


