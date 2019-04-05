const Item = require("../models/item");
const Category = require("../models/category");

module.exports = {
  index: async (req, res, next) => {
    const items = await Item.find();
    res.status(200).json(items);
  },

  newItem: async (req, res, next) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(200).json(newItem);
  }
};
