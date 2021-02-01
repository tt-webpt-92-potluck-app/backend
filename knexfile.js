// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/potluck_planner.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      migrations: {
        directory: './data/seeds'
      }
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      //tableName: 'knex_migrations'
      directory: './data/migrations'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
