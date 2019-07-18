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
require('./react-with-node/routes/authRoutes')(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('./react-with-node/models/user');
require('./react-with-node/services/passport')



mongoose
  .connect(
    'mongodb+srv://adelamr:c1AwIwfVuv7XIJel@cluster0-4tyoy.mongodb.net/test?retryWrites=true&w=majority'
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













const port = process.env.port || 5000;
app.listen(port);