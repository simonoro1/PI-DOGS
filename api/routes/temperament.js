const router = require('express').Router()
const dotenv = require('dotenv').config();
const axios = require('axios').default;

router.get('/', async (req, res) => {

    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`)
        const temperaments = response.data.map((dog) => dog.temperament)
        const temperamentsSplit = temperaments.map(temperament => {

            if(temperament) return  temperament.split(', ')
        })
        // console.log(temperamentsSplit.flat())
        const temperamentsFlat = temperamentsSplit.flat()
        const result = temperamentsFlat.filter((item, index)=>{
            return temperamentsFlat.indexOf(item) === index;
        })
        
        res.status(200).send(result)

        
    } catch (error) {
        console.log(error);
    }

})

module.exports = router