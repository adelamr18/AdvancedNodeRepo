// const express = require('express');
// const app = express();
// const crypto = require('crypto');
// const cluster = require('cluster');
// process.env.UV_THREADPOOL_SIZE = 1;

// if (cluster.isMaster) {
//     //cause index.js to be executed again but in child mode
//     cluster.fork();
// } else {
//     app.get('/', (req, res) => {
//         crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//             res.send('Hi there')
//         });
//     });

//     app.get('/fast', (req, res) => {

//         res.send('This was fast')
//     })

//     app.listen(3000);
// }
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('./react-with-node/models/user');
require('./react-with-node/services/passport')
require('./react-with-node/models/Survey');
require('./react-with-node/models/Recipient');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./react-with-node/config/keys');


mongoose
  .connect(
    keys.mongoUri
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());
require('./react-with-node/routes/authRoutes')(app);
require('./react-with-node/routes/billingRoutes')(app);
require('./react-with-node/routes/surveyRoutes')(app);
//the two require statements both return a function and we make this function take the app
//as a parameter to execute the function on it


const port = process.env.port || 5000;
app.listen(port);