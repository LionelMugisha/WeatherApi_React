import React from 'react';
import PropTypes from 'prop-types';

const UpcomingDaysForecastItem = ({weekday,temperature,weatherDescription,weatherImage}) => {
    var dayName = new Date(weekday * 1000);
    return(
        <div className="w-32 rounded overflow-hidden shadow-xl mt-3 ml-2 flex">
            <div className="justify-evenly">
                <h2 className="flex justify-center font-bold text-gray-900">{dayName.toLocaleString("en-us", { weekday: "short" })}</h2><br/>
                <p className="flex justify-center">
                    <img
                        src={
                            "http://openweathermap.org/img/wn/" +
                            weatherImage +
                            "@2x.png"
                        }
                        alt="weather icon"
                        className="w-icon"
                    />
                </p>
                <span className="font-bold flex justify-center">{temperature}&deg;</span><br/>
                <p className="flex justify-center font-semibold mb-1">{weatherDescription}</p>
            </div>
        </div>
    )
}

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
    weatherImage: PropTypes.string.isRequired
}

export default UpcomingDaysForecastItem;
