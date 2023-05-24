const express = require("express");
const studentRouter = express.Router();
const studentController = require("../controllers/studentController");
const validation = require("../middlewares/validation");

studentRouter.get("/", studentController.getAllStudent);
studentRouter.get("/:id", studentController.getStudent);
studentRouter.post("/", validation.checkEmty, studentController.createStudent);
studentRouter.put("/:id", studentController.updateStudent);
studentRouter.delete("/:id", studentController.deleteStudent);

module.exports = studentRouter;
