const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users')

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB conection successfull'))
    .catch((err) => console.log(err))



app.use(express.json())
app.use('/api/users/', usersRoute)










app.listen(process.env.PORT || 5000, function() {
    console.log('Backend server is runnning!')
})