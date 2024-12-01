const mongoose = require("mongoose");

mongoose.connect(process.env.DB || 'mongodb://localhost:27017/mydatabase').then(() => {
    console.log("connection established...!");
}).catch((error) => {
    console.log(error);
})