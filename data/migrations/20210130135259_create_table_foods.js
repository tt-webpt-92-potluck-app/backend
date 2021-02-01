
exports.up = function(knex) {
    return knex.schema
    .createTable('foods', tbl => {
      tbl.increments();
      tbl.string('name', 64).unique().notNullable();
    })
    .createTable('users_potluck_food', tbl => {
      tbl.increments();
      tbl.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('potluck_id')
        .unsigned()
        .references('id')
        .inTable('potlucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('food_id')
        .unsigned()
        .references('id')
        .inTable('foods')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users_potluck_food')
    .dropTableIfExists('foods');
};
