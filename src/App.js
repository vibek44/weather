import axios from 'axios';
import {useState,useEffect} from 'react'
import Button from './components/button';
import Weather from './components/weather';


function App() {
  const[cityweather,setCityWeather]=useState(undefined)
  const [citykey, setCityKey]=useState('')
  const [searchcity, setSearchCity]=useState('')
  const [countryid, setCountryId]=useState('')
  
  const handleSearch=(e)=>{
    setSearchCity(e.target.value)
  
  }

  const handleClick=(searchcity)=>{
   
    axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=31FoJs2LJfcrP0iEAvvvECwjU2swTOJD&q=${searchcity}`)
    .then(res=> {
      console.log(res.data);
       setCityKey(res.data[0].Key)
       setCountryId(res.data[0].Country.ID)
    })
   
  }

  useEffect(()=>{
    axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${citykey}?apikey=31FoJs2LJfcrP0iEAvvvECwjU2swTOJD`)
    .then(res=> {
     console.log(res.data)
     setCityWeather(res.data)
    })
  },[citykey])
   
  return (
    <div className="main-container">
      <h1>Weather app </h1>
      <div><input type="text" value={searchcity} onChange={handleSearch} placeholder="Enter city name"/>
      <Button handleClick={handleClick} city={searchcity}/></div>
       {cityweather && <Weather weather={cityweather} countryid={countryid} city={searchcity}/>}
       

      
    </div>
  );
}

export default App;
