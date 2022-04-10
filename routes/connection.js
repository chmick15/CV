var express = require('express');
var router = express.Router();

const userModel = require('../models/users');

//Sign-up connection
router.post('/sign-up', async function (req, res) {

  var error = []
  var result = false
  var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (regexMail.test(req.body.email)) {

    const data = await userModel.findOne({
      email: req.body.email
    })

    if (data != null) {
      error.push(`You're already in the Database, please use the sign-in form`)
    }

    if (req.body.username == ''
      || req.body.email == ''
      || req.body.password == ''
    ) {
      error.push(`Please fill all the inputs`)
    }

    if (error.length == 0) {
      var newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })

      var saveUser = await newUser.save()
      result = true;
    }
  } else {
    error.push(`It does not seems to be an email`)
  }
  res.json({ result, saveUser, error })
});


//Sign-in connection
router.post('/sign-in', async function (req, res) {
  let result = false;
  let error = [];

  var user = await userModel.findOne({ email: req.body.email })

  if (user) {
    if (req.body.password == user.password) {
      result = true
      console.log('visiteur enregisté');
    } else {
      error.push(`This is not the password you registered with...`);
    }
  } else {
    if (!req.body.password || !req.body.email) {
      error.push(`Please fill all the inputs`);
    } else {
      error.push(`You are not in the database, sign-up first`);
    }
  }
  res.json({ result, user, error })
});

module.exports = router;
