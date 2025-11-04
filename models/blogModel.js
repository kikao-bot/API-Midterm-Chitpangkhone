// models/blogModel.js

const Bp_manage_user = [
    { user_id: "001", user_name: "Kank", user_age: 20 },
    { user_id: "002", user_name: "Bank", user_age: 20 },
    { user_id: "003", user_name: "Ton", user_age: 20 },
    { user_id: "004", user_name: "Chanachon", user_age: 24 },
];

const Bp_posts = [
    { post_id: 1, user_id: "001", title: "My first blog", content: "Hello world!" },
    { post_id: 2, user_id: "002", title: "My second blog", content: "Lao-Top API test" },
];

const Bp_comments = [
    { comment_id: 1, post_id: 1, user_id: "002", text: "Nice post!" },
    { comment_id: 2, post_id: 1, user_id: "003", text: "Interesting!" },
];

const Bp_tags = [
    { tag_id: 1, name: "Tech" },
    { tag_id: 2, name: "Learning" },
];

const blogModel = {
    getAllUsers: () => Bp_manage_user,
    getAllPosts: () => Bp_posts,
    getAllComments: () => Bp_comments,
    getAllTags: () => Bp_tags,

    // ✅ เพิ่มฟังก์ชันรวมทั้งหมด
    getAllData: () => ({
        users: Bp_manage_user,
        posts: Bp_posts,
        comments: Bp_comments,
        tags: Bp_tags,
    }),
};

module.exports = blogModel;