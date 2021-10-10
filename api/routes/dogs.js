const router = require('express').Router()
const dotenv = require('dotenv').config();
const axios = require('axios').default;

api_key = process.env.API_KEY
router.get('/', async (req, res) => {
    let name = req.query.name
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${api_key}`)
        if(name) {
            const filtered = response.data.filter( dog => dog.name.includes(name))
            if(!filtered.length) console.log('no existe el perrito')
            res.status(200).send(filtered);
        }

        else {
            res.status(200).send(response.data);
        }
        
    } catch (error) {
        console.log(error);
    }

})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${api_key}`)
        if (id){
            const filtered = response.data.filter(dog => dog.id.toString() === id)
            if(!filtered.length) console.log('no existe el perrito')
            res.status(200).send(filtered)
        }
        else {
            res.status(200).send(response.data);
        } 
    } catch (error) {
        console.log(error);
    }

})




module.exports = router