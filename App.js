import {React, useState} from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import cities from './data'
import Form from './components/Form';


function App() {
    const [location, setLocation] = useState("London")
    return (
        <>
            <Form location={location} setLocation={setLocation}/>
            <Location location = {location} setLocation={setLocation} data={cities}/>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                {cities.map((city) => (
                    <WeatherCard key={city.city} city={city}/>
                ))}
                


            </div>
            
        </>
    )
}

export default App;