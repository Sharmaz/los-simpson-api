const { CHARACTER_TABLE } = require('../models/characters.model');

module.exports = {
  async up (queryInterface) {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    await queryInterface.bulkInsert(CHARACTER_TABLE, [{
      id: '2bc34306-d83f-481a-b37d-b6967872ea36',
      name: 'Homero Jay Simpson',
      age: 36 ,
      description: 'Es el padre de la familia Simpson y protagonista; es obeso, calvo y con poco sentido común, aunque ama a todos sus hijos, aun así, su relación con Bart muchas veces es temperamental y agresiva.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
      createdAt: new Date(),
    }]);
  },

  async down (queryInterface) {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    await queryInterface.bulkDelete(CHARACTER_TABLE, null, {});

  }
};
