const router = require("express-promise-router")();

const itemsController = require("../controllers/items");
const {
  validateId,
  validateBody,
  schemas
} = require("../middleware/routeHelpers");

router
  .route("/")
  .get(itemsController.index)
  .post(itemsController.addItem);

router.use("/:id", validateId(schemas.idSchema));
router
  .route("/:id")
  .get(itemsController.getItem)
  .patch(validateBody(schemas.itemSchema), itemsController.patchItem)
  .delete(itemsController.deleteItem);

module.exports = router;
