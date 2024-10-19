const { CharacterSchema, CHARACTER_TABLE } = require('../models/characters.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
  }
};
