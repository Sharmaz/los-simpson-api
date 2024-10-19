const { v4 } = require('uuid');

const { models } = require('../libs/sequelize.js');

class CharacterService {
  async create(data) {
    const newCharacter = await models.Character.create({
      id: v4(),
      ...data,
      createdAt: new Date(),
    });

    return newCharacter;
  }
  async find() {
    const characters = await models.Character.findAll({
      attributes: ['id', 'name', 'age', 'description', 'image'],
    });

    if (!characters) {
      return [];
    }

    return characters;
  }
  async findOne(characterId) {
    const character = await models.Character.findByPk(characterId);
    
    return character;
  }
  async update(characterId, changes) {
    const character = await this.findOne(characterId);
    await character.update(changes);
    return { characterId, changes };
  }
  async delete(characterId) {
    const character = await this.findOne(characterId);
    await character.destroy();
  }
}

module.exports = CharacterService;
