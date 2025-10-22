const studentModel = require("../models/studentModel");

const handleGreeting = (req, res) => {
    res.send("Hello, Lao-Top API");
};

const handleGetStudents = (req, res) => {
    const studentData = studentModel.getAllStudents();
    res.json(studentData);
};

const StudentController = {
    handleGreeting,
    handleGetStudents,
};

module.exports = StudentController;