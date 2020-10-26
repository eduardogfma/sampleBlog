const db = require("../config/database");

/// Method responsible for the rendering of the Compose page
exports.renderPage = (req, res) => {
  res.render("./compose");
};

/// Method reponsible for creating a new Post
exports.createPost = async (req, res) => {
  const post = req.body;
  const {
    rows,
  } = await db.query(
    "INSERT INTO posts (postTitle, postBody) VALUES ($1, $2)",
    [post.postTitle, post.postBody],
  );

  console.log(
    `Posted blog with title: '${post.postTitle}'`,
  );

  res.redirect("./");
};
