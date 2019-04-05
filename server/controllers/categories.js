const Category = require("../models/category");

module.exports = {
  index: async (req, res, next) => {
    const categories = await Category.find();
    res.status(200).json(categories);
  },

  newCategory: async (req, res, next) => {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json(newCategory);
  }
};
