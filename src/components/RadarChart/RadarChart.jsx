import React from "react";
import { Radar } from 'react-chartjs-2';
import './RadarChart.css'
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
/* eslint-disable */
import { Chart as ChartJS } from 'chart.js/auto';
import { annotations } from "./utils/annotations.js";

Chart.register(annotationPlugin);

const config = {
  scales: {
    r: {
      angleLines: {
        display: true,
        color: 'gray',
      },
      grid: {
        color: ['#ced4da', 'gray', 'gray', 'gray', "#ced4da", "#ced4da"],
        borderWidth: 1,
      },
      pointLabels: {
        font: {
          size: 15,
          lineHeight: 1.5,
        },
        maxRotation: 90,
        minRotation: 90,
      },
      ticks: {
        stepSize: 1,
        callback: function () {
          return "";
        },
        showLabelBackdrop: false,
      },
      min: 0,
      max: 5,
    },
  },
  plugins: {
    annotation: {
      annotations: annotations,
    },
    legend: {
      display: false
    },
  }
};


function RadarChart({ chartData }) {
  return (
    <div className="radar-chart-container">
      <Radar data={chartData} options={config} />
    </div>
  );
}

export default RadarChart;