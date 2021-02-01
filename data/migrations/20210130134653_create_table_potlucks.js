exports.up = function(knex) {
    return knex.schema.createTable('potlucks', tbl => {
        tbl.increments();
    
        tbl.string('name', 64).notNullable();
        tbl.string('location', 128).notNullable();
        tbl.date('date').notNullable();
        tbl.time('time').notNullable();
        tbl.integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')  
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('potlucks');  
};
