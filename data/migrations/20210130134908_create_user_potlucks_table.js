
exports.up = function(knex) {
    return knex.schema.debug().createTable('user_potlucks', tbl => {
        // tbl.integer('id').unsigned()
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('potluck_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('potlucks')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.boolean('accepted')
          .notNullable()
          .defaultTo(false)
        tbl.primary(['user_id', 'potluck_id']);
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_potlucks');
};
