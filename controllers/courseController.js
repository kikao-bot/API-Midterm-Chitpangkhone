const courseModel = require("../models/courseModel");

const handleGreeting = (req, res) => {
    res.send("Hello, Lao-Top API");
};

const handleGetCourse = (req, res) => {
    const courseData = courseModel.getAllCourse();
    res.json(courseData);
};

const CourseController = {
    handleGreeting,
    handleGetCourse,
};

module.exports = CourseController;