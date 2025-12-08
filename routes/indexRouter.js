const express = require("express");
const { getMovies, movieRoutes } = require("../controllers/movieController");
const router = express.Router();

router.get("/", movieRoutes);

module.exports = router;