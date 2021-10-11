const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const dogsRoute = require('./routes/dogs')
const temperamentRoute = require('./routes/temperament')
const { Sequelize } = require('sequelize');
const { conn } = require('./db.js')

// const sequelize = new Sequelize(`postgres://postgres:123@localhost/dogs`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });



app.use(express.json())
app.use('/dogs', dogsRoute)
app.use('/temperament', temperamentRoute)




const authenticate = async () => {

    try {
        // await conn.authenticate();
        await conn.sync();
        console.log("All models were synchronized successfully.");
        
    } catch(error) {
        console.log(error)
    }
}




app.listen(process.env.PORT || 5000, function() {
    authenticate()
    console.log('Backend server is runnning!')
})