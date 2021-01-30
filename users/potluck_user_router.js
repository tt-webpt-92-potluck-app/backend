const router = require('express').Router();

const User = require('./user-model');
const Potluck = require('../potlucks/potluck-model');
const UserPotlucks = require('../potlucks/user_potlucks_model');

router.get('/all', (req, res) => {

  // console.log(req.user.id);

  User.findAllExpectId(req.user.id)
    .then(users => {
      res.status(200).send(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'There was a DB error.'});
    })
});

router.get('/organized', (req, res) => {
  const user_id = req.user.id;

  Potluck.findAllPotlucksByUser(user_id)
    .then(potlucks => {
      res.status(200).send(potlucks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'The databse could not get requested data.'});
    })
});

router.get('/attending', (req, res) => {
  const user_id = req.user.id;
  const isAttending = req.query.isAttending === 'true' ? 1 : 0;

  UserPotlucks.potlucksToAttend(user_id, isAttending)
    .then(potlucks => {
      console.log(potlucks);
      res.status(200).send(potlucks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'Database error'});
    })

});


module.exports = router;