exports.seed = function(knex) {
  
  return knex('potlucks').insert([
    {name: 'Potluck1', location: 'Home', time: '6pm', date: '2/13/2021', user_id: 1 },
    {name: 'Potluck2', location: 'Work', time: '6pm', date: '2/14/2021', user_id: 2 },
    {name: 'Potluck3', location: 'Somewhere', time: '6pm', date: '2/15/2021', user_id: 3 }
  ]);

};
