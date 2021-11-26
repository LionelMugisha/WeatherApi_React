import React from 'react';
import PropTypes from 'prop-types';

import CurrentForecast from '../CurrentDay/CurrentDay';
import UpcomingForecast from '../UpcomingDaysForecast';

const Forecast = ({forecast}) => (
    <>
        <div className="">
            <CurrentForecast {...forecast.currentData} />
        </div>
            
        <div className="border border-black max-w-md mx-auto shadow-lg rounded-sm">
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
