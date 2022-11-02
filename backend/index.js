const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const carRoutes = require('./routes/carDetailsRoutes')

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", carRoutes);

mongoose.connect("mongodb+srv://sanskaaar:sanskaaar@cluster0.4ckca3t.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to MongoDB!");
    app.listen(5000, function(){
        console.log("Server started on port 5000!");
    });
});
