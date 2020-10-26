const db = require("../config/database");

const listAllProducts = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM posts ORDER BY postId ASC",
  );
  return response.rows;
};

exports.renderPage = async (req, res) => {
  const posts = await listAllProducts();

  res.render("index", {
    posts: posts,
  });
};
