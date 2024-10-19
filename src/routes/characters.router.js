const express = require('express');

const CharacterService = require('../services/character.service');

const router = express.Router();
const characterService = new CharacterService();

router.get('/', async (req, res) => {
  const characters = await characterService.find();
  res.status(200).json(characters);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const character = await characterService.findOne(id);
  res.status(200).json(character);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const newCharacter = await characterService.create(body);
  res.status(201).json(newCharacter);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedCharacter = await characterService.update(id, body);
  res.status(200).json(updatedCharacter);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await characterService.delete(id);
  res.status(204).json();
});

module.exports = router;
