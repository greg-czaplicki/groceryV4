const router = require("express-promise-router")();

const ItemsController = require("../controllers/items");
const {
  validateId,
  validateBody,
  schemas
} = require("../middleware/routeHelpers");

router
  .route("/")
  .get(ItemsController.index)
  .post(validateBody(schemas.itemSchema), ItemsController.newItem);

router.use("/:id", validateId(schemas.idSchema));
router
  .route("/:id")
  .get(ItemsController.getItem)
  .patch(validateBody(schemas.itemSchema), ItemsController.patchItem)
  .delete(ItemsController.deleteItem);

module.exports = router;
