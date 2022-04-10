var mongoose = require('mongoose');

movieSchema = mongoose.Schema({
    title: String,
    image: String,
});

var movieModel = mongoose.model('movies', movieSchema)

module.exports = movieModel;