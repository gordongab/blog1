const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// else {
// // Express serve up index.html file if it doesn't recognize route
// const path = require('path');
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
// });
// }
// }

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://gordongab:reactblog1@ds011705.mlab.com:11705/heroku_wcjlssfq");

// Add routes, both API and view
require('./routes/api-routes')(app);
require('./routes/user-routes')(app);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});