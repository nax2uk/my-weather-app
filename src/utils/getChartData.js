
const getChartData = (arrDataList) => {

  //get startdate from the first element of the list
  const numDate = new Date(arrDataList[0].dt * 1000)
  const startDate = { year: numDate.getUTCFullYear(), month: numDate.getUTCMonth(), date: numDate.getUTCDate(), hour: numDate.getUTCHours(), minutes: numDate.getUTCMinutes() }

  const arrData = arrDataList.map(elem => {
    return {
      temp: elem.main.temp, wind: elem.wind.speed, humidity: elem.main.humidity
    }
  })
  return { startDate: startDate, arrData: arrData };
}

export default getChartData;