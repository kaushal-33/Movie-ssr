const MovieModel = require("../models/movieSchema");
const path = require("path");
const fs = require("fs");
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

exports.viewMovie = async (req, res) => {
    try {
        const movie = await MovieModel.findById(req.params.id);
        res.render("viewMovie", { movie })
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const obj = await MovieModel.findById(id);
        await MovieModel.findByIdAndDelete(id);
        const filePath = path.join(__dirname, "..", obj?.posterURL);
        console.log(filePath, obj)
        fs.unlink(filePath, (err) => {
            if (err) console.log(err);
        })
        return res.redirect("/admin");
    } catch (error) {
        console.log(error)
    }
}

exports.getMovie = async (req, res) => {
    try {
        const movie = await MovieModel.findById(req.params.id);
        return res.render("updateForm", { movie });
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const updateData = req.body;

        if (req.file) {
            let obj = await MovieModel.findById(req.params.id);
            console.log(obj)
            const filePath = path.join(__dirname, "..", obj?.posterURL);
            fs.unlink(filePath, (err) => {
                if (err) console.log(err);
            })
            updateData.posterURL = req.file.path;
        }
        await MovieModel.findByIdAndUpdate(req.params.id, updateData);

        return res.redirect("/admin");
    } catch (error) {
        console.log(error);
    }
};
