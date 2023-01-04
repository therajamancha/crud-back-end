const employeeScema = require("../models/EmployeeModel.js");

const getEmployee = async (req, res) => {
  try {
    const data = await employeeScema.find({});
    res.json(data);
  } catch (error) {
    res.send(error);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const data = await employeeScema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.send(error);
  }
};

const addEmployee = async (req, res) => {
  try {
    await employeeScema.create(req.body);
    res.send("added successfully");
  } catch (error) {
    res.send(error);
  }
};

const editEmployee = async (req, res) => {
  try {
    await employeeScema.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated successfully");
  } catch (error) {
    res.send(error);
  }
};

const removeEmployee = async (req, res) => {
  try {
    await employeeScema.findByIdAndRemove(req.params.id);
    res.send("deleted succesfully");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getEmployee,
  getEmployeeById,
  addEmployee,
  editEmployee,
  removeEmployee,
};
