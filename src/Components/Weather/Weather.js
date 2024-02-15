import { useState } from "react";

function Weather(){
    var [weathers, setWeathers] = useState([{
        "date":"0",
        "temperatureC":0,
        "temperatureF":0,
        "summary":""
    }]);
    
    var callAPI=()=>fetch("http://localhost:5141/WeatherForecast")
        .then(r=>r.json())
        .then(r=>{
            setWeathers(r);
        })
        .catch(r=>console.log(r));
    return(
        <div>
            <button onClick={callAPI}>Get Data</button>
            {weathers.map((weather)=>
                <div>
                    Date: {weather.date}
                    <br/>
                    Temperature(c): {weather.temperatureC}
                    <br/>
                    Temperature(f): {weather.temperatureF}
                    <br/>
                    Summary: {weather.summary}
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default Weather;