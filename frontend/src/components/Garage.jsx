import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Garage = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const carsInGarage = async () => {
            const result = await axios.get("http://localhost:5000/data");
            setCars(result.data.data.filter(data=>{
                return data.checkOutTime === null;
            }));
            console.log(cars);

        }
        carsInGarage();
    }, []);

    return (
        <div>
            <h3>
                {cars.length} Cars in Garage!
            </h3>
        </div>
    )
}

export default Garage