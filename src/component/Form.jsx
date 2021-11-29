import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

const Form = ({onSearch}) => {
    
    const [location,setLocation] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        onSearch(location);
    } 

    return(
        <div className="flex justify-evenly mt-6 mb-12">
            <form className="w-full max-w-md" onSubmit={onSubmit}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Search for a country or capital city to forecast" 
                    required
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                    type="submit"
                    onClick={onSubmit}
                    >
                    Search
                    </button>
                </div>
            </form>
        </div>
        
    )
};

    Form.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }

export default Form;