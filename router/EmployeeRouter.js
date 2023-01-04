// routes here
const express = require("express");
const router = express.Router();
const {
  getEmployee,
  getEmployeeById,
  addEmployee,
  editEmployee,
  removeEmployee,
} = require("../controller/EmployeeController.js");

router.get("/get-employee", getEmployee);
router.get("/get-employee/:id", getEmployeeById);
router.post("/add-employee", addEmployee);
router.put("/edit-employee/:id", editEmployee);
router.delete("/remove-employee/:id", removeEmployee);

module.exports = router;
