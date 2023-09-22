
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [city,setCity] = useState("");
  const [cityData,setCityData] = useState({})

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9011d75570efeeadd2d88a15f8a68377`)
    .then((res)=>res.json())
    .then((data)=>setCityData(data))
  },[city])


  return (
    <div className="main__div">
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      ></input>
        <div className="weather">
          <h1>{cityData.name}</h1>
          { cityData && <h1>
          {cityData && Math.round((cityData?.main?.temp - 273), 2).toFixed(2)} °C
          </h1>}
          <p>{cityData && cityData.weather && cityData.weather.length > 0 && (
  <p>{cityData.weather[0].description}</p>
   
)}</p>
               </div>
      
    </div>
  )
}

export default App
