import moment from 'moment';

const getCurrentDayForecast = (data, title) => ({
    weekday: moment(data.weekday).format('dddd'),
    date: moment(data.weekday).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.temp.day),
    weatherDescription: data.weather[0].description,
    weatherPicture: data.weather[0].icon
});

export default getCurrentDayForecast;
