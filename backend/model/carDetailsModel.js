const mongoose = require('mongoose');

const carDetailsModel = mongoose.Schema(
    {
        vehicleNumber: {
            type: String,
            required: true,
        },
        driverName: {
            type: String,
            required: true,
        },
        checkInTime: {
            type: String,
            required: true,
        },
        checkOutTime: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const CarDetails = mongoose.model("CarDetails", carDetailsModel);

module.exports = CarDetails;