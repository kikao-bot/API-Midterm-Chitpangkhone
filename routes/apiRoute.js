const express = require("express");
const StudentController = require("../controllers/studentController");
const CourseController = require("../controllers/courseController");
const BlogController = require("../controllers/blogController");
const apiRouter = express.Router();

//root path: /
apiRouter.get("/", StudentController.handleGreeting);
apiRouter.get("/", CourseController.handleGreeting);
apiRouter.get("/", BlogController.handleGreeting);

//Students Courses path: /students courses
apiRouter.get("/students", StudentController.handleGetStudents);
apiRouter.get("/courses", CourseController.handleGetCourse);
apiRouter.get("/blogPosts", BlogController.handleGetBlogPosts);

module.exports = apiRouter;