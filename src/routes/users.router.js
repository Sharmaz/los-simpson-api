const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');
const userService = new UserService();

router.get('/', async (req, res) => {
  const users = await userService.find();
  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.findOne(id);
  res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const user = await userService.create(body);
  res.status(201).json(user);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedUser = await userService.update(id, body);
  res.status(200).json(updatedUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await userService.delete(id);
  res.status(204).json();
});

module.exports = router;
