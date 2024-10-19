const { Character, CharacterSchema } = require('./characters.model');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
}

module.exports = setupModels;
