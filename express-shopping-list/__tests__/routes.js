// routes.js
const express = require('express');
const router = express.Router();
const items = require('./fakeDb');

// GET /items - Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// POST /items - Add a new item
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newItem = { name, price };
  items.push(newItem);
  res.status(201).json({ added: newItem });
});

// GET /items/:name - Get a single item by name
router.get('/:name', (req, res) => {
  const item = items.find(i => i.name === req.params.name);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// PATCH /items/:name - Update an item's name and/or price
router.patch('/:name', (req, res) => {
  const item = items.find(i => i.name === req.params.name);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  item.name = req.body.name || item.name;
  item.price = req.body.price || item.price;

  res.json({ updated: item });
});

// DELETE /items/:name - Delete an item
router.delete('/:name', (req, res) => {
  const itemIndex = items.findIndex(i => i.name === req.params.name);
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(itemIndex, 1);
  res.json({ message: 'Deleted' });
});

module.exports = router;
