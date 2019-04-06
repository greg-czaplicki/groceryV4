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

      if (!req.value) {
        req.value = {};
      }

      req.value.params = result.value;
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

      if (!req.value) {
        req.value = {};
      }

      req.value.body = result.value;
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
    })
  }
};
