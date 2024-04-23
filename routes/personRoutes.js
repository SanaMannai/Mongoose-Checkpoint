const express = require("express");
const router = express.Router();
const controller = require("../handlers/person");

const {
  getAllPersons,
  onePerson,
  createPerson,
  updatePerson,
  deletePersonByName,
  removeById,
} = controller;

router.route("/").get(getAllPersons).post(createPerson);
router.route("/:id").get(onePerson).patch(updatePerson).delete(removeById);
router.route("/name").delete(deletePersonByName);
module.exports = router;
