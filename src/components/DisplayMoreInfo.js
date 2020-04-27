import React from 'react';

function DisplayMoreInfo(props) {
  const { weatherData } = props;

  if (Object.keys(weatherData).length > 0) {
    return (
      <div className='main-display-more-info'>
        <button>Hourly</button>
        <button>Daily</button>
      </div>
    );
  }
  else return (<p></p>);
}


export default DisplayMoreInfo;