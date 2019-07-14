const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys')


const app = express();
passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken)
    console.log(refreshToken);
    console.log(profile);
    console.log(done)
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/adool',(req,res)=>{
    res.json(({
        text:'hey'
    }))
})


const port = process.env.port || 5000;
app.listen(port);