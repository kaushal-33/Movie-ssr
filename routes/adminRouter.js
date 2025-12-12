const express = require("express");
const { adminMovies, addMovie, movieForm, deleteMovie } = require("../controllers/movieController");
const upload = require("../middlewares/multer");
const router = express.Router();

router.get("/", adminMovies);
router.post("/add-movie", upload.single("posterURL"), addMovie)
router.get("/add-movie", movieForm);
router.get("/delete-movie/:id", deleteMovie);

module.exports = router;