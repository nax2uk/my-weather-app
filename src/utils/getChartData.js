//returns an array of object {dt, temp}
const getChartData = (arrDataList) => {
  //get startdate for the data

  const arrTemp = arrDataList.map(elem => {
    const numDate = new Date(elem.dt * 1000)

    return {
      dt: numDate, temp: elem.main.temp, wind: elem.wind.speed, humidity: elem.main.humidity
    }
  })
  return arrTemp;
}

export default getChartData;