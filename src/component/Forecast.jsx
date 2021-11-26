import { useState } from "react";
import axios from 'axios';
import getCurrentDayForecast from './helpers/getCurrentDayForecast';
import getUpcomingForecast from './helpers/getUpcomingDaysForecast';

const Country_Api = `https://api.opencagedata.com/geocode/v1/json`;
const CountryKey = `1db31a35e4634d298f1b255697be2a01`;
const Location_Api = `https://api.openweathermap.org/data/2.5/onecall?`;
const APIkey = `cb2fd9157dfcd2ccf40c092918d0c8f2`;

const Forecast = () => {
    const [isError,setError] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const [forecast,setForecast] = useState(null);

    const getCountry = async (location) => {
        const { data } = await axios.get(`${Country_Api}?q=${location}&key=${CountryKey}`)
        const result = data.results[0];
        if (!result || result.length === 0 ){
            setError('There is no such location');
            setLoading(false);
            return;
        }
        return result;
    }
    const getWeather = async (lat,lng) => {
        const response = await axios.get(`${Location_Api}lat=${lat}&lon=${lng}&exclude=hourly&appid=${APIkey}`)
        if (!response || response.length === 0 ){
            setError('There is no such latitude and longitude');
            setLoading(false);
            return;
        }
        return response;
    }

    const gatherForecastData = (data) => {
        const currentData = getCurrentDayForecast(data.daily[0],data.timezone);
        const upcomingData = getUpcomingForecast(data.daily);
        setForecast({currentData,upcomingData});
        setLoading(false)
    }

    const submitRequest = async (location) => {
        setLoading(true);
        setError(false)
        const result = await getCountry(location);
        if(!result) return;
        const {lat,lng} = result.geometry;
        const {data} = await getWeather(lat,lng);
        if(!data) return;
        gatherForecastData(data)
    }

    return{
        isError,
        isLoading,
        forecast,
        submitRequest,
    }
}

export default Forecast;