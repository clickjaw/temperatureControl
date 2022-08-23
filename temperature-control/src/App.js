import React from 'react';
import { useState } from 'react';

const App = () =>{

  const [temperatureValue,setTemperatureState] = useState(69);
  const [temperatureColor,setTemperatureColor] = useState("cold");
  
  const increaseTemp = () =>{
    const newTemp = temperatureValue + 1;
    if (newTemp >= 70){
      setTemperatureColor("hot");
    }
    setTemperatureState(newTemp);
  }
  const decreaseTemp = () =>{
    const newTemp = temperatureValue - 1;
    if (newTemp < 70){
      setTemperatureColor("cold");
    }
    setTemperatureState(newTemp);
  }

  return(
    <div className = "app-container">
      <div className = "temperature-display-container">
        <div className = {`temperature-display ${temperatureColor}`} >
          {temperatureValue}°F
          </div>
      </div>
      <div className = "button-container">
        <button onClick = {()=> increaseTemp()}>+</button>
        <button onClick = {()=> decreaseTemp()}>-</button>
      </div>
    </div>
  );
}

export default App;
