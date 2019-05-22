const { Food } = require('../models');
describe('Food Model', () => {
    test('Total of Food is 5', async () => {
        const total = await Food.count();
        expect(total).toBe(5);
    });

    describe('create', () => {
        describe('succeeded', () => {
            test('type of bread', async () => {
                const food = await Food.create({
                    name: 'jam bread',
                    type: 'bread',
                    updatedAt: new Date(),
                    createdAt: new Date()
                }, { validate: true });
                expect(food.id).not.toBeUndefined();
                expect(food.name).toBe('jam bread');
                expect(food.type).toBe('bread');
            });

            test('type of sweets', async () => {
                const food = await Food.create({
                    name: 'strawberry cake',
                    type: 'sweets',
                    updatedAt: new Date(),
                    createdAt: new Date()
                }, { validate: true });
                expect(food.id).not.toBeUndefined();
                expect(food.name).toBe('strawberry cake');
                expect(food.type).toBe('sweets');
            });
        });

        describe('failed', () => {
            test('type of chair', async () => {
                await expect(Food.create({
                    name: 'reclining chair',
                    type: 'chair',
                    updatedAt: new Date(),
                    createdAt: new Date()
                }, { validate: true })).
                rejects.toThrow();
            });

            // 追加分
            test('type of chair(failed)', async () => {
                const food = await Food.create({
                    name: 'reclining chair',
                    type: 'chair',
                    updatedAt: new Date(),
                    createdAt: new Date()
                }, { validate: true });
                expect(food.id).not.toBeUndefined();
                expect(food.name).toBe('reclining chair');
                expect(food.type).toBe('chair');
            });
        });
    });
});