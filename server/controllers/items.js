const Item = require("../models/item");

module.exports = {
  index: async (req, res, next) => {
    const items = await Item.find();
    res.status(200).json(items);
  },

  newItem: async (req, res, next) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(200).json(newItem);
  },

  getItem: async (req, res, next) => {
    const { id } = req.value.params;
    const result = await Item.findById(id);
    res.status(200).json(result);
  },

  patchItem: async (req, res, next) => {
    const { id } = req.value.params;
    const patchItem = req.body;

    const result = await Item.findByIdAndUpdate(id, patchItem, { new: true });
    res.status(200).json(result);
  },

  deleteItem: async (req, res, next) => {
    const { id } = req.value.params;
    const result = await Item.findByIdAndDelete(id);
    res.status(200).json(`${result.name} was successfully deleted.`);
  }
};
