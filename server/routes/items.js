const router = require("express-promise-router")();

const ItemsController = require("../controllers/items");

router
  .route("/")
  .get(ItemsController.index)
  .post(ItemsController.newItem);

router
  .route("/:id")
  .get(ItemsController.getItem)
  .patch(ItemsController.patchItem)
  .delete(ItemsController.deleteItem);

module.exports = router;
