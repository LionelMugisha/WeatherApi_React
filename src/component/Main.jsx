import React from 'react';
import Form from './Form';
import useForecast from './Forecast';
import Error from './handling/Error/Error';
import Loader from './handling/Loader';
import Forecast from './Forecasts/Forecast';

const Main = () => {
    
    const {isError,isLoading,forecast,submitRequest} = useForecast();

    const onSearch = (value) => {
        submitRequest(value);
    }
    
    return(
        <>
            {!forecast && (
                <div className="mt-2">
                    {!isLoading && <Form onSearch={onSearch}/>}
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}
            <div>
                {forecast && <Forecast forecast={forecast} /> }
            </div>
        </>
    )
}

export default Main;