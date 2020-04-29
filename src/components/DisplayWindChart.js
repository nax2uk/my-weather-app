import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import getChartData from '../utils/getChartData'

const DisplayWindChart = (props) => {

  const { forecastedWeatherData } = props;
  const chartData = getChartData(forecastedWeatherData.list);
  const arrWind = chartData.arrData.map(elem => elem.wind);
  const { startDate } = chartData;

  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Wind Speed Forecast (next 5 days)'
    },
    yAxis: {
      title: {
        text: 'Wind Speed (m/s)'
      }
    },

    xAxis: {
      type: 'datetime',

    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(startDate.year, startDate.month, startDate.date, startDate.hour, startDate.minutes),
        pointInterval: 3 * 3600 * 1000

      }
    },

    series: [
      {
        name: 'wind',
        data: arrWind,

      }
    ]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default DisplayWindChart;