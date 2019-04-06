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
  },

  getCategory: async (req, res, next) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.status(200).json(category);
  },

  updateCategory: async (req, res, next) => {
    const { id } = req.params;
    const newCategory = req.body;
    const result = await Category.findByIdAndUpdate(id, newCategory, {
      new: true
    });
    res.status(200).json(result);
  },

  deleteCategory: async (req, res, next) => {
    const { id } = req.params;
    const result = await Category.findByIdAndDelete(id);
    res.status(200).json(`${result.name} category was successfully deleted.`);
  }
};
