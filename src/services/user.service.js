const { v4 } = require('uuid');
const { hash } = require('bcrypt');

const { models } = require('../libs/sequelize.js');

class UserService {

  async create(data) {
    const encyptedPassword = await hash(data.password, 10);
    const newUser = await models.User.create({
      id: v4(),
      ...data,
      password: encyptedPassword,
      createdAt: new Date(),
    });

    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll({
      attributes: ['id', 'email', 'role'],
    });

    return users;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findOne(userId) {
    const user = await models.User.findByPk(userId, {
      include: ['characters'],
    });

    delete user.dataValues.password;
    return user;
  }

  async update(userId, changes) {
    const user = await this.findOne(userId);
    await user.update(changes);
    return { userId, changes };
  }

  async delete(userId) {
    const user = await this.findOne(userId);
    await user.destroy();
  }
}

module.exports = UserService;
