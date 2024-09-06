import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeaherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "wonderland",
        feelsLike: 39.05,
        humidity: 79,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "mist",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}