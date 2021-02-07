
exports.seed = function(knex) {
  
  return knex('users').insert([
    {username: 'harry', password: '$2a$12$A4IxfMvUkBQeWK0cN.aShOGxRVggZUXQylzGKXFqRujd8aLs/ztha', firstName: 'Harry', lastName: 'Potter' },
    {username: 'ron', password: '$2a$12$wOyl9a6m/uFWpvWQ9kad5OKPT.oSZGiBBJ0mz3Ptq.4Y6ePMHIdN2', firstName: 'Ron', lastName: 'Weasley' },
    {username: 'ginny', password: '$2a$12$e3JSXQgzX0ozaU6S347pHeKpUYoVprAqQKZv2PTxtpKc05bJ.9qB2', firstName: 'Ginny', lastName: 'Weasley' }
  ]);

};
