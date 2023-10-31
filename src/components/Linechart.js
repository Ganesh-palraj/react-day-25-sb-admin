import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Linechart({chartData}) {
  return <Line data={chartData} Chart={Chart} />
    
  
}

export default Linechart