const MovieModel = require("../models/movieSchema");

exports.adminMovies = (req, res) => {
    return res.render("adminIndex");
};

exports.movieRoutes = (req, res) => {
    return res.render("index");
}

exports.addMovie = async (req, res) => {
    try {
        console.log(req.file);
        const movieObj = new MovieModel({ ...req.body, photoURL: req.file.path });
        await movieObj.save();
    } catch (error) {
        console.log(error);
    }
}