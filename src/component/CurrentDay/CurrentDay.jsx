import React from 'react';
import PropTypes from 'prop-types';
import locationImg from './assets/location-pin.png';

const CurrentDay = ({weekday,date,location,temperature,weatherDescription,weatherPicture}) => (
    <>
        <div className="flex justify-end">
            <div className="flex mt-2 mr-12 font-bold">
                <div><span><img src={locationImg} width="15" height="20" alt="location pin" /></span></div>
                <div className="ml-1"><span>{location}</span></div>
            </div>
        </div>
        <div className="border border-black bg-gray-500 max-w-md mx-auto rounded-sm mt-2 mb-3 shadow-inner">
            <div className="flex justify-center">
                <h2 className="font-bold">{weekday},</h2>
                <p className="mb-0 font-semibold"> {date}</p>
            </div>
            <div className="flex mt+6 mr-12 justify-center font-bold">
                <div>
                    <img
                        src={
                            "http://openweathermap.org/img/wn/" +
                            weatherPicture +
                            "@2x.png"
                        }
                        alt="weather icon"
                        className="w-icon"
                    />
                </div>
                <div className="ml-1 mt-10"><span>{temperature}&deg;C</span></div>
            </div>
            <div className="flex justify-center mb-1">
                <h3 className="font-semibold">{weatherDescription}</h3>
            </div>
        </div>
    </>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
    weatherPicture: PropTypes.string.isRequired
}

export default CurrentDay;
