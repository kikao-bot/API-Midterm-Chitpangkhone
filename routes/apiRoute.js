const express = require("express");
const StudentController = require("../controllers/studentController");
const CourseController = require("../controllers/courseController");
const apiRouter = express.Router();

//root path: /
apiRouter.get("/", StudentController.handleGreeting);
apiRouter.get("/", CourseController.handleGreeting);

//Students Courses path: /students courses
apiRouter.get("/students", StudentController.handleGetStudents);
apiRouter.get("/courses", CourseController.handleGetCourse);

module.exports = apiRouter;