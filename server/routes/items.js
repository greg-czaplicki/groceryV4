const router = require("express-promise-router")();

const ItemsController = require("../controllers/items");
const { validateId, schemas } = require("../middleware/routeHelpers");

router
  .route("/")
  .get(ItemsController.index)
  .post(ItemsController.newItem);

router.use("/:id", validateId(schemas.idSchema));
router
  .route("/:id")
  .get(ItemsController.getItem)
  .patch(ItemsController.patchItem)
  .delete(ItemsController.deleteItem);

module.exports = router;
