import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [darkMode, setDarkMode] = useState(false);

  const chartTheme = {
    theme: {
      mode: darkMode ? "dark" : "light",
    },
  };

  const lineChart = {
    options: {
      ...chartTheme,
      chart: { id: "line-chart" },
      xaxis: { categories: [1, 2, 3, 4, 5, 6, 7] },
      title: { text: "Basic Line Chart" },
    },
    series: [{ name: "Sales", data: [10, 41, 35, 51, 49, 62, 69] }],
  };

  const areaChart = {
    options: {
      ...chartTheme,
      chart: { id: "area-chart" },
      title: { text: "Basic Area Chart" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    },
    series: [{ name: "Revenue", data: [31, 40, 28, 51, 42, 109] }],
  };

  const columnChart = {
    options: {
      ...chartTheme,
      chart: { id: "column-chart", type: "bar" },
      xaxis: { categories: ["A", "B", "C", "D", "E"] },
      title: { text: "Basic Column Chart" },
    },
    series: [{ name: "Count", data: [44, 55, 41, 64, 22] }],
  };

  const treemapChart = {
    options: {
      ...chartTheme,
      chart: { type: "treemap" },
      title: { text: "Basic Treemap" },
    },
    series: [
      {
        data: [
          { x: "New Delhi", y: 218 },
          { x: "Kolkata", y: 149 },
          { x: "Mumbai", y: 184 },
          { x: "Ahmedabad", y: 55 },
        ],
      },
    ],
  };

  const polarChart = {
    options: {
      ...chartTheme,
      chart: { type: "polarArea" },
      title: { text: "Polar Area" },
      labels: ["A", "B", "C", "D", "E"],
    },
    series: [14, 23, 21, 17, 15],
  };

  const pieChart = {
    options: {
      ...chartTheme,
      labels: ["Apple", "Mango", "Orange", "Banana"],
      title: { text: "Simple Pie Chart" },
    },
    series: [44, 55, 13, 43],
  };

  const gradientDonut = {
    options: {
      ...chartTheme,
      fill: { type: "gradient" },
      labels: ["Chrome", "Safari", "Firefox", "Edge"],
      title: { text: "Gradient Donut Chart" },
    },
    series: [44, 33, 54, 45],
  };

  const patternedDonut = {
    options: {
      ...chartTheme,
      fill: {
        type: "pattern",
        pattern: {
          style: ["verticalLines", "squares", "slantedLines", "circles"],
        },
      },
      labels: ["India", "USA", "China", "Japan"],
      title: { text: "Patterned Donut Chart" },
    },
    series: [25, 15, 44, 55],
  };

  const basicRadial = {
    options: {
      ...chartTheme,
      plotOptions: {
        radialBar: {
          hollow: { size: "60%" },
          dataLabels: { name: { show: true }, value: { show: true } },
        },
      },
      labels: ["Progress"],
      title: { text: "Basic RadialBar Chart" },
    },
    series: [70],
  };

  const multipleRadial = {
    options: {
      ...chartTheme,
      plotOptions: {
        radialBar: {
          dataLabels: { total: { show: true, label: "Total" } },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
      title: { text: "Multiple RadialBars" },
    },
    series: [44, 55, 67, 83],
  };

  const strokedGauge = {
    options: {
      ...chartTheme,
      plotOptions: {
        radialBar: {
          hollow: { margin: 15, size: "70%" },
          track: { background: "#e7e7e7", strokeWidth: "97%" },
          dataLabels: { name: { show: false }, value: { offsetY: 10 } },
        },
      },
      stroke: { lineCap: "round" },
      labels: ["Percent"],
      title: { text: "Stroked Circular Gauge" },
    },
    series: [67],
  };

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Charts
          <MdKeyboardDoubleArrowRight className="mt-1" size={24} />
          Apex
        </div>
      </div>

      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
          >
            {darkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={lineChart.options}
              series={lineChart.series}
              type="line"
              height={300}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={areaChart.options}
              series={areaChart.series}
              type="area"
              height={300}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={columnChart.options}
              series={columnChart.series}
              type="bar"
              height={300}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={treemapChart.options}
              series={treemapChart.series}
              type="treemap"
              height={300}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md sm:col-span-2">
            <Chart
              options={polarChart.options}
              series={polarChart.series}
              type="polarArea"
              height={300}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={pieChart.options}
              series={pieChart.series}
              type="pie"
              height={280}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={gradientDonut.options}
              series={gradientDonut.series}
              type="donut"
              height={280}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={patternedDonut.options}
              series={patternedDonut.series}
              type="donut"
              height={280}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={basicRadial.options}
              series={basicRadial.series}
              type="radialBar"
              height={280}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={multipleRadial.options}
              series={multipleRadial.series}
              type="radialBar"
              height={280}
            />
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
            <Chart
              options={strokedGauge.options}
              series={strokedGauge.series}
              type="radialBar"
              height={280}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApexChart;
