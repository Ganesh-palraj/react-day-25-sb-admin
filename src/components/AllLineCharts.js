import React, { useState } from 'react'
import Linechart from './Linechart';
import { LineChartData } from './ChartData';

export default function AllLineCharts() {

    const [ userData ] = useState({
        labels: LineChartData.map((data) => data.months),
        datasets:[{
            label:"Earnings",
            data: LineChartData.map((data)=>data.earnings),
        }]
    })
  return (
    <Linechart chartData={userData}/>
  )
}

