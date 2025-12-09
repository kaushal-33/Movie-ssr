const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    rating: {
        type: String,
        require: true,
    },
    details: {
        type: String,
        require: true,
    },
    posterURL: {
        type: String,
        require: true,
    }
})

const MovieModel = mongoose.model("MovieModel", movieSchema);

module.exports = MovieModel;