const blogModel = require("../models/blogModel");

const handleGreeting = (req, res) => {
    res.send("Hello, Lao-Top API");
};

const handleGetBlogPosts = (req, res) => {
    const blogPostsData = blogModel.getAllData();
    res.json(blogPostsData);
};

const blogController = {
    handleGreeting,
    handleGetBlogPosts,
};

module.exports = blogController;