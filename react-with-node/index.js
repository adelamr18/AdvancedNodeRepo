const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys')


const app = express();
passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken)
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));




const port = process.env.port || 5000;
app.listen(port);
