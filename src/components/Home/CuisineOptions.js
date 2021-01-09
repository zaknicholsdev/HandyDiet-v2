import React from 'react';

const CuisineOptions = ({ setCuisine }) => {
    const cuisines = [
        'American',
        'Chinese',
        'Greek',
        'Indian',
        'Italian',
        'Japanese',
        'Mexican',
        'Mediterranean',
        'Thai'
    ];

    const handleClick = (value) => {
        setCuisine(value);
    };

    return (
        <div>
            <div style={{ fontSize: '2em' }}><strong>Search Recipes</strong></div>
            <div style={{color: '#cdcdcd'}}>Choose a cuisine you like and find tasty recipes!</div>
            <div className="container">
                {cuisines.map((cuisine, index) => {
                    return (
                        <button key={index} onClick={() => handleClick(cuisine)} name={cuisine} value={cuisine} className="cuisine-option"><i style={{marginRight: '5px'}} className="fas fa-leaf"></i>{cuisine}</button>
                    );
                })}
            </div>
        </div>
    );
};

export default CuisineOptions;