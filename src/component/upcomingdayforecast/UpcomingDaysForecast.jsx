import React from 'react';
import UpcomingDaysItems from '../eachupcomingdayforecast';

const UpcomingDaysForecast = ({days}) => 
    <div className="flex">
        {days.map((day) => ( 
            <UpcomingDaysItems key={day.weekday} {...day} />
        ))}
    </div>

export default UpcomingDaysForecast;
