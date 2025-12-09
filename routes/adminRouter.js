const express = require("express");
const { adminMovies, addMovie } = require("../controllers/movieController");
const upload = require("../middlewares/multer");
const router = express.Router();

router.get("/", adminMovies);
router.post("/add-movie", upload.single("posterURL"), addMovie)

module.exports = router;