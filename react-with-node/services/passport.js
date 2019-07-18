const googleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
    }) 
    new User({
        googleId: profile.id
    }).save();
}));