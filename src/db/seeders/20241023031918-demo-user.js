const { USER_TABLE } = require('../models/user.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(USER_TABLE, [{
      id: '71310b41-1265-4bb3-85d0-ba9900ee42fb',
      email: 'demo@los-simpson.com',
      password: 'demo',
      role: 'admin',
      createdAt: new Date(),
    }]);

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
