import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Chart from "react-apexcharts";

const ChartJs = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = {
    theme: { mode: darkMode ? "dark" : "light" },
  };

  const lineChart = {
    options: {
      ...theme,
      chart: { id: "line-chart" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
      title: { text: "Line Chart" },
    },
    series: [{ name: "Sales", data: [10, 41, 35, 51, 49] }],
  };

  const areaChart = {
    options: {
      ...theme,
      chart: { type: "area" },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
      title: { text: "Smooth Area Chart" },
    },
    series: [{ name: "Visitors", data: [31, 40, 28, 51, 42, 109] }],
  };

  const columnChart = {
    options: {
      ...theme,
      chart: { type: "bar" },
      plotOptions: {
        bar: { dataLabels: { position: "top" } },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val + "%",
        offsetY: -20,
      },
      xaxis: {
        categories: ["2017", "2018", "2019", "2020", "2021"],
      },
      title: { text: "Column Chart with Data Labels" },
    },
    series: [{ name: "Growth", data: [44, 55, 41, 67, 22] }],
  };

  const donutChart = {
    options: {
      ...theme,
      labels: ["Chrome", "Safari", "Firefox", "Edge"],
      title: { text: "Donut Chart" },
    },
    series: [44, 33, 54, 45],
  };

  const radialBarChart = {
    options: {
      ...theme,
      plotOptions: {
        radialBar: {
          hollow: { size: "60%" },
          dataLabels: { name: { show: true }, value: { show: true } },
        },
      },
      labels: ["Progress"],
      title: { text: "RadialBar Chart" },
    },
    series: [70],
  };

  const treemapChart = {
    options: {
      ...theme,
      chart: { type: "treemap" },
      title: { text: "Treemap Chart" },
    },
    series: [
      {
        data: [
          { x: "New Delhi", y: 218 },
          { x: "Kolkata", y: 149 },
          { x: "Mumbai", y: 184 },
          { x: "Chennai", y: 55 },
        ],
      },
    ],
  };

  const polarChart = {
    options: {
      ...theme,
      labels: ["North", "South", "East", "West"],
      title: { text: "Polar Chart" },
    },
    series: [14, 23, 21, 17],
  };

  const heatmapChart = {
    options: {
      ...theme,
      chart: { type: "heatmap" },
      title: { text: "Heatmap Chart" },
    },
    series: [
      {
        name: "Metric1",
        data: [
          { x: "W1", y: 22 },
          { x: "W2", y: 29 },
          { x: "W3", y: 13 },
          { x: "W4", y: 32 },
        ],
      },
      {
        name: "Metric2",
        data: [
          { x: "W1", y: 43 },
          { x: "W2", y: 43 },
          { x: "W3", y: 23 },
          { x: "W4", y: 45 },
        ],
      },
    ],
  };

  const radarChart = {
    options: {
      ...theme,
      chart: { type: "radar" },
      title: { text: "Radar Chart" },
      xaxis: { categories: ["Math", "Science", "English", "History", "Art"] },
    },
    series: [
      { name: "Student A", data: [80, 50, 30, 40, 100] },
      { name: "Student B", data: [20, 30, 40, 80, 20] },
    ],
  };

  const bubbleChart = {
    options: {
      ...theme,
      chart: { type: "bubble" },
      title: { text: "Bubble Chart" },
      xaxis: { tickAmount: 12 },
    },
    series: [
      {
        name: "Bubbles",
        data: [
          [5, 10, 10],
          [10, 15, 20],
          [15, 5, 30],
          [20, 25, 15],
        ],
      },
    ],
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4 mb-6">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Charts
          <MdKeyboardDoubleArrowRight className="mt-1" size={24} />
          ChartJs
        </div>
      </div>

      <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
          >
            {darkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...lineChart} type="line" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...areaChart} type="area" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...columnChart} type="bar" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...donutChart} type="donut" height={250} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...radialBarChart} type="radialBar" height={250} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...treemapChart} type="treemap" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...polarChart} type="polarArea" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...heatmapChart} type="heatmap" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...radarChart} type="radar" height={280} />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart {...bubbleChart} type="bubble" height={280} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartJs;
