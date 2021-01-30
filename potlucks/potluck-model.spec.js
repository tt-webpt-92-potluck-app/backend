const db = require('../data/db-config');

const { add } = require('./potluck-model');

describe('potlucks model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('potluck').truncate();
        });

        it('should insert a potluck', async () => {
            await add({name: 'Potluck1', location: 'home', date: '1/29/2021', 'time': '2pm'});

            const potlucks = await db('potlucks');
            expect(potlucks).toHaveLength(1);
        });

        it('should insert the provided potluck', async () => {
            await add({name:'Potluck1', location: 'home', date: '11/24/2019', 'time': '6pm'});
            await add({name:'Potluck2', location: 'home', date: '11/24/2019', 'time': '6pm'});
      
            const potlucks = await db('potlucks');
      
            expect(potlucks).toHaveLength(2);
            expect(potlucks[0].name).toBe('Potluck1');
            expect(potlucks[1].name).toBe('Potluck2');
          });
      
          it('should return the inserted potluck', async function() {
            let potluck = await add({name:'Potluck1', location: 'home', date: '11/24/2019', 'time': '6pm'});
            expect(potluck.name).toBe('Potluck1');
            expect(potluck.id).toBeDefined(); 
      
            potluck = await add({name:'Potluck2', location: 'home', date: '11/24/2019', 'time': '6pm'});
            expect(potluck.name).toBe('Potluck2');
            expect(potluck.id).toBeDefined();
          });

    });
});