const Joi = require("joi");

module.exports = {
  validateId: schema => {
    return (req, res, next) => {
      const result = Joi.validate({ id: req.params.id }, schema);
      if (result.error)
        return res.status(400).json({
          status: "Invalid request ID",
          message: result.error.message
        });

      next();
    };
  },

  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json({
          error: result.error.message
        });
      }

      next();
    };
  },

  schemas: {
    idSchema: Joi.object().keys({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    }),
    categorySchema: Joi.object().keys({
      name: Joi.string()
        .regex(/^[A-Za-z]+$/)
        .required()
    }),
    itemSchema: Joi.object().keys({
      name: Joi.string().regex(/^[0-9A-Za-z \s \/ \.]+$/),
      category: Joi.string(),
      quantity: Joi.number(),
      isComplete: Joi.boolean()
    })
  }
};
