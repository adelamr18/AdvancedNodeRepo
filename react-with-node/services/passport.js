const googleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

//user here is what we just pulled out of the database
passport.serializeUser((user, done) => {
    //the id here is the automatic id generated by mongo databas
    //we use the automatic generated id because we may have several authentication technniques
    //we use profile.id to identify a user coming from the OAuth flow
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});
passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
    }).then((existingUser) => {
        if (existingUser) {
            done(null, existingUser);
        }
        else {
            new User({
                googleId: profile.id
            }).save()
                .then(user => {
                    done(null, user);
                })
        }
    })
}));