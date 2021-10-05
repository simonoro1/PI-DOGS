const router = require('express').Router()
const dotenv = require('dotenv').config();
const axios = require('axios').default;


router.get('/', async (req, res) => {
    let name = req.query.name
    let id = req.query.id
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`)
        if(name) {
            const filtered = response.data.filter( dog => dog.name.includes(name))
            if(!filtered.length) console.log('no existe el perrito')
            res.status(200).send(filtered);
        }

        else if (id){

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