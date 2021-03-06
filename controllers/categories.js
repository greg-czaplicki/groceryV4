const Category = require("../models/category");
const Item = require("../models/item");

module.exports = {
  index: async (req, res, next) => {
    const categories = await Category.find()
      .sort("name")
      .select("-items");
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
  },

  getCategoryItems: async (req, res, next) => {
    const { id } = req.params;
    const result = await Category.findById(id).populate({
      path: "items",
      select: "-category",
      options: {
        sort: { name: 1 }
      }
    });
    res.status(200).json(result);
  },

  getCategoryCompletedItems: async (req, res, next) => {
    const { id } = req.params;
    const result = await Category.findById(id).populate({
      path: "items",
      select: "-category",
      match: { isComplete: true },
      options: {
        sort: { name: 1 }
      }
    });
    res.status(200).json(result);
  },

  addItemToCategory: async (req, res, next) => {
    const newItem = new Item(req.body);
    const category = await Category.findById(req.body.category);
    category.items.push(newItem);
    await category.save();
    const result = await newItem.save();
    res.status(200).json(result);
  }
};
