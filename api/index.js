const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dogsRoute = require('./routes/dogs')
const temperamentRoute = require('./routes/temperament')




mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB conection successfull'))
    .catch((err) => console.log(err))



app.use(express.json())
app.use('/dogs', dogsRoute)
app.use('/temperament', temperamentRoute)











app.listen(process.env.PORT || 5000, function() {
    console.log('Backend server is runnning!')
})