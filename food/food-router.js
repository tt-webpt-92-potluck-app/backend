const router = require('express').Router();

const Food = require('./food-model');
const UserFood = require('./user_food_model');
const db = require('../data/db-config');

// GET all foods 
router.get('/', (req, res) => {
    Food.find()
        .then(foods => {
        console.log(foods);
        res.status(200).send(foods);
    })
    .catch(error => {
        console.log(error);
        console.log({message: 'There was an error in getting food from the database'});
    })
});

// GET food by id
router.get('/:id', (req, res) => {
    const user_id = req.user.id;
    const food_id = req.params.id;

    Food.findById(food_id)
    .then(food => {
        console.log(food);
        res.status(200).send(food);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message: 'Error while retriving food by id from database'})
    })
});

// ADD a new food item
router.post('/', validateFoodData, (req, res) => {
    let foodData = req.body;

    Food.add(foodData)
    .then(food => {
        console.log(food);
        res.status(200).send(food);
    })
    .catch(error => {
        res.status(503).json({message: "Error occured while adding food item"})
        console.log(error);
    })
})

// GET all food by user id
router.get('/user/:id', (req, res) => {

    console.log(req.user.id);

    UserFood.find(req.user.id)
    .then(userFood => {
        res.status(200).send(userFood);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).send({message: 'Error while retriving users food items from database'})
    })
});

// ADD a new food item for user 
router.post('/user/:id', (req, res) => {
    let userFood = req.body
    const user_id = req.user.id;
    userFood["user_id"] = user_id

    UserFood.add(userFood)
    .then(foods => {
        console.log(foods);
        res.status(201).send(foods);
    })
    .catch(error => {
        res.status(503).json({message: "Error while adding user food"});
        console.log(error)
    })
});

// DELETE a user food
router.delete('/user/:id', (req, res) => {
    const user_id = req.user.id;
    const food_id = req.params.id;

    UserFood.remove(user_id, food_id)
    .then(food => {
        console.log(food);
        res.status(200).send({message: 'This food item was deleted from user.'})
    })
    .catch(error => {
        console.log(error);
        res.status(500).send({message: "Error ocurred while deleting user food item."})
    })
});

function validateFoodData(req, res, next) {
    const foodData = req.body;

    if(!foodData.name) {
        res.status(400).send({message: 'Food name is required.'})
    } else {
        next();
    }
}

module.exports = router;