const Weather=({weather,city,country})=><div className="weather">
    <p>{new Date().toDateString()}</p>
    <p>{city} <b>{country}</b></p>

    <p>{Math.floor((weather.DailyForecasts[0].Temperature.Maximum.Value-32)*(5/9))}°C/
       {Math.floor((weather.DailyForecasts[0].Temperature.Minimum.Value-32)*(5/9))}°C
    </p>

    <p> {weather.DailyForecasts[0].Day.IconPhrase}</p>
    </div>
   


export default Weather