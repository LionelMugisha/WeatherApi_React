import React from 'react';
import PropTypes from 'prop-types';

import CurrentForecast from '../currentdayforecast/CurrentDay';
import UpcomingForecast from '../upcomingdayforecast';

const Forecast = ({forecast}) => (
    <>
        <div className="">
            <CurrentForecast {...forecast.currentData} />
        </div>
            
        <div className="max-w-4xl mx-auto shadow-lg rounded-sm mb-3 mt-1">
            <UpcomingForecast days={forecast.upcomingData}/>
        </div>
    </>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentData: PropTypes.object,
        upcomingData: PropTypes.array
    })
}

export default Forecast;
