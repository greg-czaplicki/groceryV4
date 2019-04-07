const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: "Please enter a category name! " },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
