const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');

const app = express();
passport.use(new googleStrategy());


const port = process.env.port || 5000;
app.listen(port);