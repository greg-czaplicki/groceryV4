const router = require("express-promise-router")();

const CategoriesController = require("../controllers/categories");

router
  .route("/")
  .get(CategoriesController.index)
  .post(CategoriesController.newCategory);

module.exports = router;
