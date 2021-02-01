const db = require('../data/db-config');

const { add } = require('./user-model');

describe('users model', () => {
  describe('insert', () => {
    beforeEach(async () => {
      await db('users').truncate();
    });

    it('should insert a user', async () => {
      await add({firstName:'Harry', lastName: 'Potter', username: 'harry', 'password': 'harry'});

      const users = await db('users');
      expect(users).toHaveLength(1);
    });

    it('should insert the provided user', async () => {
      await add({firstName:'Harry', lastName: 'Potter', username: 'harry', 'password': 'harry'});
      await add({firstName:'Ron', lastName: 'Weasley', username: 'ron', 'password': 'ron'});

      const users = await db('users');

      expect(users).toHaveLength(2);
      expect(users[0].username).toBe('harry');
      expect(users[1].username).toBe('ron');
    });
  });
});