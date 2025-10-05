import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

(function (H) {
  const animateSVGPath = (svgElem, animation, callback = void 0) => {
    const length = svgElem.element.getTotalLength();
    svgElem.attr({
      "stroke-dasharray": length,
      "stroke-dashoffset": length,
      opacity: 1,
    });
    svgElem.animate(
      { "stroke-dashoffset": 0 },
      animation,
      callback
    );
  };

  H.seriesTypes.line.prototype.animate = function (init) {
    const series = this,
      animation = H.animObject(series.options.animation);
    if (!init) {
      animateSVGPath(series.graph, animation);
    }
  };

  H.addEvent(H.Axis, "afterRender", function () {
    const axis = this,
      chart = axis.chart,
      animation = H.animObject(chart.renderer.globalAnimation);

    axis.axisGroup
      .attr({ opacity: 0, rotation: -3, scaleY: 0.9 })
      .animate({ opacity: 1, rotation: 0, scaleY: 1 }, animation);

    if (axis.horiz) {
      axis.labelGroup
        .attr({ opacity: 0, rotation: 3, scaleY: 0.5 })
        .animate({ opacity: 1, rotation: 0, scaleY: 1 }, animation);
    } else {
      axis.labelGroup
        .attr({ opacity: 0, rotation: 3, scaleX: -0.5 })
        .animate({ opacity: 1, rotation: 0, scaleX: 1 }, animation);
    }
  });
})(Highcharts);

export default function SplineChart() {
  const options = {
    chart: {
      type: "spline",
      backgroundColor: "transparent",
    },
    title: {
      text: "United States of America’s Inflation-related statistics",
      style: { color: "var(--tw-text-slate-800)" },
    },
    subtitle: {
      text: 'Source: <a href="https://www.worldbank.org/en/home">The World Bank</a>',
    },
    yAxis: [
      {
        title: { text: "Inflation" },
        plotLines: [
          {
            color: "var(--tw-slate-700)",
            width: 2,
            value: 13.549,
            animation: { duration: 1000, defer: 4000 },
            label: {
              text: "Max Inflation",
              align: "right",
              x: -20,
            },
          },
        ],
      },
      { title: { text: "Claims on central government, etc." } },
      { opposite: true, title: { text: "Net foreign assets" } },
      { opposite: true, title: { text: "Net domestic credit" } },
    ],
    plotOptions: {
      series: {
        animation: { duration: 1000 },
        marker: { enabled: false },
        lineWidth: 2,
      },
    },
    series: [
      { yAxis: 0, data: [2, 5, 8, 12, 14, 13] },
      { yAxis: 1, data: [5, 3, 4, 7, 2], animation: { defer: 1000 } },
      { yAxis: 2, data: [1, 6, 2, 8, 4], animation: { defer: 2000 } },
      { yAxis: 3, data: [7, 2, 5, 3, 6], animation: { defer: 3000 } },
    ],
    responsive: {
      rules: [
        {
          condition: { maxWidth: 500 },
          chartOptions: {
            yAxis: [
              { tickAmount: 2, title: { x: 15, reserveSpace: false } },
              { tickAmount: 2, title: { x: 20, reserveSpace: false } },
              { tickAmount: 2, title: { x: -20, reserveSpace: false } },
              { tickAmount: 2, title: { x: -20, reserveSpace: false } },
            ],
          },
        },
      ],
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
