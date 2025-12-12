const { name } = require("ejs");
const MovieModel = require("../models/movieSchema");

let movies = [{
    movieName: "dhurandar",
    genre: "action",
    date: "2 feb",
    rating: "4",
    posterURL: "images/Poster-Dhurandhar-2025.webp",
    detail: "action comedy"

}];

exports.adminMovies = async (req, res) => {
    try {
        const movieArr = await MovieModel.find();
        console.log(movieArr);
        return res.render("adminIndex", { movies, movieArr });
    } catch (error) {
        console.log(error);
    }
};

exports.movieRoutes = (req, res) => {
    return res.render("index");
}

exports.movieForm = (req, res) => {
    return res.render("form");
}

exports.addMovie = async (req, res) => {
    try {
        // console.log(req.file);
        const movieObj = new MovieModel({ ...req.body, posterURL: req.file.path });
        await movieObj.save();
        return res.redirect("/admin");
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        await MovieModel.findByIdAndDelete(id);
        return res.redirect("/admin");
    } catch (error) {
        console.log(error)
    }
}