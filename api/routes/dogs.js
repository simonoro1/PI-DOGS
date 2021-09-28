const router = require('express').Router()
const dotenv = require('dotenv').config();
const axios = require('axios').default;


router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`)
        res.status(200).send(response.data);
    } catch (error) {
        console.log(error);
    }
})


router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`)
        const filtered = response.data.filter( dog => dog.name.includes(req.query.name))
        res.status(200).send(filtered);
    } catch (error) {
        console.log(error);
    }
})


module.exports = router