const Item = require("../models/item");
const Category = require("../models/category");

module.exports = {
  index: async (req, res, next) => {
    const items = await Item.find().populate("category", "name");
    res.status(200).json(items);
  },

  getItem: async (req, res, next) => {
    const { id } = req.params;
    const result = await Item.findById(id);
    res.status(200).json(result);
  },

  patchItem: async (req, res, next) => {
    const { id } = req.params;
    const patchItem = req.body;

    const result = await Item.findByIdAndUpdate(id, patchItem, { new: true });
    res.status(200).json(result);
  },

  deleteItem: async (req, res, next) => {
    const { id } = req.params;
    const result = await Item.findByIdAndDelete(id);
    res.status(200).json(`${result.name} was successfully deleted.`);
  }
};
