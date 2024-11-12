import React from "react";
import {getWeatherIcon } from './WeatherCard'
function Location({location, setLocation, data}) {
    const cityData = data.find((city) => city.city === location)

    if (!cityData) {
        return <div>No data available for this location</div>
    }


    return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {getWeatherIcon(cityData.forecast)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{cityData.city}</h3>
            <h5 className="card-text">{cityData.temperature}</h5>
            <h5 className="card-text">{cityData.forecast}</h5>
        </div>
    </div>
    )
}

export default Location;