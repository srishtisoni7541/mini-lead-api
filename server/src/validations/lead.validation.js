const Joi = require("joi");

const createLeadSchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email().required(),

  phone: Joi.string().required(),

  status: Joi.string()
    .valid("new", "contacted", "qualified", "lost")
    .optional(),
});

const updateLeadSchema = Joi.object({
  name: Joi.string(),

  email: Joi.string().email(),

  phone: Joi.string(),

  status: Joi.string().valid(
    "new",
    "contacted",
    "qualified",
    "lost"
  ),
});

const addNoteSchema = Joi.object({
  text: Joi.string().required(),
});

module.exports = {
  createLeadSchema,
  updateLeadSchema,
  addNoteSchema,
};