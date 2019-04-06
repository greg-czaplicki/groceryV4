const router = require("express-promise-router")();

const CategoriesController = require("../controllers/categories");

router
  .route("/")
  .get(CategoriesController.index)
  .post(CategoriesController.newCategory);

router
  .route("/:id")
  .get(CategoriesController.getCategory)
  .put(CategoriesController.updateCategory)
  .delete(CategoriesController.deleteCategory);

module.exports = router;
