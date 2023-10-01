import React, { useState } from 'react';
import "./App.css";
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import RadarChart from "./components/RadarChart/RadarChart";

Chart.register(annotationPlugin);

function App() {
  
  const [userData] = useState({
    //TODO: Rotate the axis descriptions
    labels: ["Transmission", "Stuffiness", "", "Humidity", "Pollution", "Temperature", "", "Density",],

    datasets: [
      {
        data: [3.5, 1, 2.5, 2.5, 1, 2.5, 2.5, 1.5],
        backgroundColor: 'rgba(163, 206, 241,0.6)',
        pointRadius: 0,
        borderWidth: 0,
      },
      {
        data: [2, 0.5, 1, 2, 0.5, 1, 1.5, 2.5],
        backgroundColor: 'rgba(4, 102, 200,0.7)',
        pointRadius: 0,
        borderWidth: 0,
      },
    ],

  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <RadarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;