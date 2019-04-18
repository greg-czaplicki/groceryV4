const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter an item name"
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  quantity: { type: Number, default: 1 },
  isComplete: { type: Boolean, default: false }
});

itemSchema.pre("save", function(next) {
  this.name = this.name
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  next();
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
