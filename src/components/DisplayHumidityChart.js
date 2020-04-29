import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import getChartData from '../utils/getChartData'

const DisplayHumidityChart = (props) => {
  const { forecastedWeatherData } = props;
  const chartData = getChartData(forecastedWeatherData.list);
  const arrHumid = chartData.arrData.map(elem => elem.humidity);
  const { startDate } = chartData;

  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Humidity Forecast (next 5 days)'
    },
    yAxis: {
      title: {
        text: 'Humidity (%)'
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
        name: 'humidity',
        data: arrHumid,

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

export default DisplayHumidityChart;