const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const dogsRoute = require('./routes/dogs')
const temperamentRoute = require('./routes/temperament')
const { Sequelize } = require('sequelize');
const { conn } = require('./db.js')
const axios = require('axios').default;
const {Temperament} = require('./db.js')

// const sequelize = new Sequelize(`postgres://postgres:123@localhost/dogs`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });


app.use(express.json())
app.use('/dogs', dogsRoute)
app.use('/temperament', temperamentRoute)

const create = async (names) => { 
    console.table(names)
    await Temperament.bulkCreate(names)
}

const temperaments = async () => {

    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${api_key}`)
        const temperaments = []
        response.data.forEach((dog) => {
            if(dog.temperament !== undefined) temperaments.push(dog.temperament)
        })
        const temperamentsSplit = temperaments.map(temperament => {
            
            if(temperament) return  temperament.split(', ')
        })
        const temperamentsFlat = temperamentsSplit.flat()
        const result = temperamentsFlat.filter((item, index)=>{
            return temperamentsFlat.indexOf(item) === index;
        })

        const names = result.map( temperament => {
                return {
                    name: temperament
                }
        
        })
        create(names)
    } catch (error) {
        console.log(error);
    }
}



const authenticate = async () => {
    temperaments()

    try {
        // await conn.authenticate();
        await conn.sync({force: true});
        console.log("All models were synchronized successfully.");
        
    } catch(error) {
        console.log(error)
    }
}




app.listen(process.env.PORT || 5000, function() {
    authenticate()
    console.log('Backend server is runnning!')
})