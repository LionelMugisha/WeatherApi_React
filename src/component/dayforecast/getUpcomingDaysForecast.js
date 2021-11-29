
const getUpcomingDaysForecast = (data) =>
    data.slice(1).map(day => ({
        weatherImage: day.weather[0].icon,
        temperature: Math.round(day.temp.day),
        weekday: day.dt,
        weatherDescription: day.weather[0].description
    }));

export default getUpcomingDaysForecast;
