import React, { useState, useEffect } from 'react'
import axios from 'axios';

const DisplayCars = () => {

    const [allCars, setAllCars] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [checkOutTime, setcheckOutTime] = useState("");

    useEffect(() => {
        const carsInGarage = async () => {
            const result = await axios.get("http://localhost:5000/data");
            setAllCars(result.data.data.filter(data=>{
                return data.checkOutTime === null;
            }));
        }
        carsInGarage();
    }, []);

    // console.log(allCars);
    const handleCheckOut = () => {
        setToggle(!toggle);
    }

    const handleSubmit = (id) => {
        try {
            const res = axios.put("http://localhost:5000/data/"+ id, {
                checkOutTime,
            })
            alert("Saved Successfully!");
            window.location.reload();
        } catch (error) {
            alert("Error! Not Saved");
        }
    }

    return (
        <div>
            {allCars.map(item => (
                <div driver-details>
                    <p>Driver Name - {item.driverName}</p>
                    <p>Vehical Number - {item.vehicleNumber}</p>
                    <p>Check In Time - {item.checkInTime}</p>
                    <button onClick={handleCheckOut}>Check Out</button>
                    {toggle ? 
                    <div>
                        <label for='check-out'>Check Out Time : </label>
                        <input onChange={(e) => setcheckOutTime(e.target.value)} type='time' value={checkOutTime} name='check-out-time' id='check-out' /><br />
                        <button onClick={() => handleSubmit(item._id)}>Submit</button>
                    </div> : null
                    }

                </div>

            ))}
        </div>
    )
}

export default DisplayCars