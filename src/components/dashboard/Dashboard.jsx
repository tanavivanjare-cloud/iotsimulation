import React from 'react'
import {useState,useEffect} from 'react'
import{database} from '../../firebase'
import {ref, onValue} from 'firebase/database'
import '../../index.css'

const Dashboard = () => {

    const [sensorData,setSensorData]=useState({
        Temperature:0,
        Humidity:0,
        Gas:0,
    })

    useEffect(()=>{
        const sensorRef =ref(database,"SensorData");   
        onValue(sensorRef, (snapshot)=>{
            const data = snapshot.val();
            if(data){
                setSensorData(data);
            }
        });    
    },[]);

  return (
    <>
<h1>Sensor Data Fetching</h1>

<div className="data">
    <h1>Temperature</h1>
    <p>{sensorData.Temperature}</p>
</div>

<div className="data">
    <h1>Humidity</h1>
    <p>{sensorData.Humidity}</p>
</div>

<div className="data">
    <h1>Gas</h1>
    <p>{sensorData.Gas}</p>
</div>

    </>
  )
}
export default Dashboard
