const router = require('express').Router()
const dotenv = require('dotenv').config();
const axios = require('axios').default;
const {Temperament} = require('../db.js')




router.get('/', async (req, res) => {

    
    try {
        
        let db = await Temperament.findAll()
        const temperaments = db.map( temperament => {
            return temperament.name
        })
        res.status(200).send(temperaments)
    }
    catch(e) {
        res.status(400).send(e)
    }

    // try {
    //     const response = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${api_key}`)
    //     const temperaments = []
    //     response.data.forEach((dog) => {
    //         if(dog.temperament !== undefined) temperaments.push(dog.temperament)
    //     })
    //     const temperamentsSplit = temperaments.map(temperament => {
            
    //         if(temperament) return  temperament.split(', ')
    //     })
    //     const temperamentsFlat = temperamentsSplit.flat()
    //     const result = temperamentsFlat.filter((item, index)=>{
    //         return temperamentsFlat.indexOf(item) === index;
    //     })

    //     const names = result.map( temperament => {
    //             return {
    //                 name: temperament
    //             }
        
    //     })      
    //     create(names)

        
    // } catch (error) {
    //     console.log(error);
    // }

})

module.exports = router