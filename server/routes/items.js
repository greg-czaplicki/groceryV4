const router = require("express-promise-router")();

const ItemsController = require("../controllers/items");

router
  .route("/")
  .get(ItemsController.index)
  .post(ItemsController.newItem);

module.exports = router;
