const router = require("express-promise-router")();

const categoriesController = require("../controllers/categories");
const {
  validateId,
  validateBody,
  schemas
} = require("../middleware/routeHelpers");

router
  .route("/")
  .get(categoriesController.index)
  .post(validateBody(schemas.categorySchema), categoriesController.newCategory);

router.use("/:id", validateId(schemas.idSchema));
router
  .route("/:id")
  .get(categoriesController.getCategory)
  .put(
    validateBody(schemas.categorySchema),
    categoriesController.updateCategory
  )
  .delete(categoriesController.deleteCategory);

router.route("/:id/items").get(categoriesController.getCategoryItems);

router
  .route("/:id/items/complete")
  .get(categoriesController.getCategoryCompletedItems);

module.exports = router;
