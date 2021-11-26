import React from 'react';
import UpcomingDaysItems from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({days}) => 
    <ul>
        {days.map((day) => ( 
            <UpcomingDaysItems key={day.weekday} {...day} />
        ))}
    </ul>;

export default UpcomingDaysForecast;
