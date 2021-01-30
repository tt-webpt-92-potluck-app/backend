exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increment();

      users
      .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
      users.string('firstName', 255).notNullable();
      users.string('lastName', 255).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
