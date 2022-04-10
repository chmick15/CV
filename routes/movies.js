var request = require('sync-request')
var express = require('express');
var router = express.Router();

const movieModel = require('../models/movies');

router.get('/', async function (req, res, next) {
    var data = await request("GET", `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_MOVIE_DB}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&region=FR&include_image_language=fr,null`);
    var dataAPI = await JSON.parse(data.body)
    res.json({ result: true, dataAPI });
});


router.post('/search-movies', async function (req, res, next) {
    var search = req.body.searchMovie
    var data = await request("GET", `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_MOVIE_DB}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&region=FR&include_image_language=fr,null&query=${search}`);
    var dataAPI = await JSON.parse(data.body);
    console.log(dataAPI);
    res.json({ result: true, dataAPI });
});


router.post('/favorites', async function (req, res, next) {
    var newMovie = await new movieModel({
        movieTitle: req.body.title,
        movieImage: req.body.image,
    })
    var movieSave = await newMovie.save();
    res.json({ result: true, movieSave });
});

router.delete('/favorites/:title', async function (req, res, next) {
    var remove = await movieModel.deleteOne({ title: req.params.title });
    res.json({ result: true, remove });
});


router.get('/favorites', async function (req, res, next) {
    var favorites = await movieModel.find();
    res.jsons({ result: true, favorites });
});

module.exports = router;
