const db = require('../data/db-config');

const find = () => {
    return db('foods');
};

const findById = (id) => {
    return db('foods').where({id}).first();
};

const add = (foodData) => {
    return db('foods').insert(foodData, 'id')
    .then(ids => {
        console.log(ids);
        return findById(ids[0]);
    })
};

// const update = (changes, id) => {
//   return db('foods')
//     .where({id})
//     .update(changes)
//     .then(count => {
//       console.log(count);
//       return findById(id);
//     })
// };

// const remove = (id) => {
//   return db('foods')
//     .where({id})
//     .del()
// };


module.exports = {
    find,
    findById,
    add,
    // update,
    // remove,
};