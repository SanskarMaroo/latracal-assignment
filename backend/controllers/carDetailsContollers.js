const CarDetails = require('../model/carDetailsModel');

exports.CreateCarDetail = function (req, res) {
    var data = req.body;
    var result = new CarDetails(data);
    result.save(function (err, result) {
        if (err) {
            res.status(400).json({
                message: "Something went wrong!",
            })
        } else {
            res.status(200).json({
                result
            })
        }
    });
}

exports.UpdateCarDetail = async function (req, res) {
    try {
        const updatedCarDetails = await CarDetails.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({
            updatedCarDetails
        })
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }
}

exports.getCarsInGarage = async function (req, res) {
    try {
        const data = await CarDetails.find();
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }
}

exports.getCarDetail = async function (req, res) {
    try {
        const data = await CarDetails.findById(req.params.id);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong"
        })
    }
}