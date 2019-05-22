module.exports = {
    up: async (queryInterface, Sequelize) => {
      const data = [{
        name: 'focaccia',
        type: 'bread',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        name: 'french bread',
        type: 'bread',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        name: 'muffin',
        type: 'bread',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        name: 'candy',
        type: 'sweets',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        name: 'chocolate',
        type: 'sweets',
        updatedAt: new Date(),
        createdAt: new Date()
      }];
      return await queryInterface.bulkInsert('Food', data);
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Food', null, {});
    },
  };