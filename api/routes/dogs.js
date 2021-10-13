const router = require('express').Router()
const dotenv = require('dotenv').config();
const axios = require('axios').default;
const {Dog} = require('../db.js')
api_key = process.env.API_KEY

router.get('/', async (req, res) => {
    let name = req.query.name
    let db = await Dog.findAll()
    let created = db.map( dog => {
        dog.dataValues.id = dog.dataValues.id + 1000
        return  dog.dataValues
    })
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${api_key}`)
        response.data.map( dog => {

            if(dog.id === 196 || dog.id === 197 || dog.id === 211 || dog.id === 232) {
                
                return dog.weight.imperial = '15'
            }
            if(dog.id == 261){
                return dog.weight.imperial = '45'
            }
        })
        const dogs = response.data.concat(created)
        

        if(name) {
            const filtered = dogs.filter( dog => dog.name.toLowerCase().includes(name.toLowerCase()))
            if(!filtered.length) console.log('no existe el perrito')
            res.status(200).send(filtered);
        }

        else {
            res.status(200).send(dogs);
        }
        
    } catch (error) {
        console.log(error);
    }

})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    if(id >= 1000) {
        let db = await Dog.findAll()
        let filtered = db.filter( dog => {
            let resta = id - 1000
            return dog.dataValues.id === resta
        
        })

        res.status(200).send(filtered)
    }
    else {

        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${api_key}`)
            if (id){
                const filtered = response.data.filter(dog => dog.id.toString() === id)
                if(!filtered.length) console.log('no existe el perrito')
                res.status(200).send(filtered)
            }
            else {
                res.status(400).send(error)
            } 
        } catch (error) {
            res.status(400).send(error)
        }
    }


})


router.post('/', async (req, res) => {
    const {name, minWeight, maxWeight, minHeight, maxHeight, minLifespan, maxLifespan, temperament, url} = req.body
    temperaments = temperament.toString()


    dog = await Dog.create({
        name: name,
        weight:
        {
            imperial: `${minWeight} - ${maxWeight}`,
        },
        height:
        {
            imperial: `${minHeight} - ${maxHeight}`,
        },
        life_span:`${minLifespan} - ${maxLifespan}`,
        temperament: temperaments,
        image: 
        {
            url: url
        } 
    })
    res.status(200).send(dog)
    
    // catch(error) {
    //     console.log(error.message)
    //     res.status(400).send(error)
    // })
})

module.exports = router