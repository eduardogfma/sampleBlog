const express = require("express");
const composeController = require("../controllers/compose.controller");

const router = express.Router();

router.get("/compose", composeController.renderPage);

router.post("/compose", composeController.createPost);

module.exports = router;
