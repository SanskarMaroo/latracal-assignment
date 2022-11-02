import React, { useState } from 'react'
import axios from 'axios';

const Home = () => {

    const [vehicleNumber, setVehicleNumber] = useState("");
    const [driverName, setDriverName] = useState("");
    const [checkInTime, setCheckInTime] = useState("");
    const [checkOutTime, setcheckOutTime] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:5000/data", {
                vehicleNumber,
                driverName,
                checkInTime,
                checkOutTime
            })
            alert("Saved Successfully!");
        } catch (error) {
            alert("Error! Not Saved");
        }
        setVehicleNumber("");
        setDriverName("");
        setCheckInTime("");
    }

    return (
        <>
        <h1>Enter the Details : </h1>
            <form onSubmit={handleSubmit}>
                <label for='vehicle'>Vehicle Number : </label>
                <input onChange={(e) => setVehicleNumber(e.target.value)} type='text' value={vehicleNumber} placeholder='Vehical Number' id='vehicle' name='vehicle' /><br />
                <label for='name'>Driver Name : </label>
                <input onChange={(e) => setDriverName(e.target.value)} type='text' value={driverName} placeholder='Driver Name' id='name' name='driver-name' /><br />
                <label for='check-in'>Check In Time : </label>
                <input onChange={(e) => setCheckInTime(e.target.value)} type='time' value={checkInTime} name='check-in-time' id='check-in' /><br />
                <button>Save</button>
            </form>
        </>
    )
}

export default Home