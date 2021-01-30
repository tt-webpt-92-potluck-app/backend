const router = require('express').Router();
const bcrypt = require("bcryptjs"); // npm i bcryptjs
const User = require("./user-model");
const jwt = require('jsonwebtoken');
const requiresAuth = require("./authenticate-middleware");

function generateToken(user) {
  const payload = {
    username: user.username,
    id: user.id,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, process.env.JWT_SECRET || 'lkajsdlkjaskldj', options);
}

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  User
    .add(user)
    .then(id => {
      const token = generateToken(id);
      
      res.status(200).json({
           id: id[0],
           message: `User created with id ${id}!`,
           token
          });
    }) 
    .catch(error => {
      console.log(error);
      res.status(500).json({error: `Error occured while registering a user.`});
    });
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;
  User
    .findBy({ username })
    .first()
    .then(user => {
      // check that the password is valid
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
        res.status(200).json({
             id: user.id,
             message: `Welcome ${user.username}!`,
             token
            });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      console.log("login error", error);
      res.status(500).json({error: `Error occured while logging in a user.`});
    });
});

router.get('/', requiresAuth, (req, res) => {
  User
    .find()
      .then(users => res.status(200).json(users))
      .catch(err => {
        console.log(err);
        res.status(500).json({error: 'The users information could not be retrieved.'})
      });
});

router.get('/:id', requiresAuth, (req, res) => {
  const { id } = req.params;
  User
    .findById(id)
       .then(([user]) => {
            console.log(user);
            if (user) {
                 res.status(200).json(user);
            } else {
                 res.status(404).json({error: `This user id:${id} does not exist`})
            }
       });
});

module.exports = router;