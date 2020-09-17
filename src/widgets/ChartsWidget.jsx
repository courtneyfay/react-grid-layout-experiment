import React from 'react';
import data from './chartsData';
import Chart from "react-google-charts";

const lineChartConfig = {
  title:
    "Program - KPI Name - Chart",
  titlePosition: "out",
  tooltip: {
    showColorCode: true
  },
  legend: { position: "bottom" },
  pointsVisible: true,
  pointSize: 10,
  series: {
    0: {
      color: "green",
      annotations: {
        textStyle: { fontSize: 12, color: "red" }
      },
      pointShape: "circle"
    },
    1: {
      color: "blue",
      annotations: {
        textStyle: { fontSize: 12, color: "red" }
      },
      pointShape: "diamond"
    }
  },
  vAxis: {
    format: "currency"
  }
};

const ChartsWidget = () => {
  return (
    <>
      <h1>Charts widget example</h1>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={lineChartConfig}
      />
    </>
  )
};

export default ChartsWidget;