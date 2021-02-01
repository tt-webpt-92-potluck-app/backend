const db = require('../data/db-config');

const find = () => {
    return db('potlucks');
};

const findById = (id) => {
    return db('potlucks').where({id}).first();
};

const add = (potluckData) => {
    return db('potlucks').insert(potluckData, 'id')
    .then(ids => {
        console.log(ids);
        return findById(ids[0])
    })
};

const update = (changes, id) => {
    return db('potlucks')
        .where({id})
        .update(changes)
        .then(count => {
            console.log(count);
            return findById(id); 
        })
};

const remove = (id) => {
    return db('potlucks')
    .where({id})
    .del()
};

const findDetailsById = (id) => {
    return db.from('users')
    .innerJoin('user_potlucks', 'user_potlucks.user_id', 'users.id')
    .innerJoin('potlucks', 'user_potlucks.putluck_id', 'potlucks.id')
    .select('users.firstName', 'users.lastName', 'potlucks.name', 'potlucks.location', 'potlucks.date', 'potlucks.time')
    .where({ accepted: 1, potluck_id: id })

    // SQL QUERY 
    // SELECT users.firstName, users.lastName, potlucks.name, potlucks.location, potlucks.date, potlucks.time 
    // FROM users
    // INNER JOIN user_potlucks
    // ON user_potlucks.user_id = users.id
    // INNER JOIN potlucks 
    // ON user_potlucks.potluck_id = potlucks.id
    // WHERE accepted = 1 AND potluck_id = 4;

};


const potluckDetails = (id) => {
    return db.from('potlucks as p')
      .innerJoin('users as u', 'p.user_id', 'u.id')
      .select('firstName', 'lastName', 'name', 'location', 'time', 'date')
      .where({'p.id': id})
      .first();
  
    // SELECT firstName, lastName, potlucks.* 
    // FROM potlucks 
    // JOIN users
    // ON potlucks.user_id = users.id
    // where potlucks.id = 4;
  };
  
  const findAllPotlucksByUser = (user_id) => {
    return db('potlucks').where({user_id}).select('id', 'location', 'date', 'time', 'name');
  }
  
  module.exports = {
    find,
    findDetailsById,
    findById,
    add, 
    update, 
    remove, 
    potluckDetails, 
    findAllPotlucksByUser
  };