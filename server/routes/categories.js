const router = require("express-promise-router")();

const CategoriesController = require("../controllers/categories");
const {
  validateId,
  validateBody,
  schemas
} = require("../middleware/routeHelpers");

router
  .route("/")
  .get(CategoriesController.index)
  .post(validateBody(schemas.categorySchema), CategoriesController.newCategory);

router.use("/:id", validateId(schemas.idSchema));
router
  .route("/:id")
  .get(CategoriesController.getCategory)
  .put(
    validateBody(schemas.categorySchema),
    CategoriesController.updateCategory
  )
  .delete(CategoriesController.deleteCategory);

module.exports = router;
