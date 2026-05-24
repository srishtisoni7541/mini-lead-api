const express = require("express");
const validate = require("../middlewares/validate.middleware");
const { createLeadSchema, updateLeadSchema, addNoteSchema } = require("../validations/lead.validation");
const { createLead, getLeads, updateLead, addNote } = require("../controller/lead.controller");

const router = express.Router();






router.post(
  "/",
  validate(createLeadSchema),
  createLead
);

router.get("/", getLeads);

router.patch(
  "/:id",
  validate(updateLeadSchema),
  updateLead
);

router.post(
  "/:id/notes",
  validate(addNoteSchema),
  addNote
);

module.exports = router;