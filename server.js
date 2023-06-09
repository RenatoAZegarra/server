const express = require('express');
const app = express();

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// load .env vars
require('dotenv').config()
// access the .env vars
const port = process.env.PORT

// Require / import the file
// this file doesn't need to export anything
require("./config/mongoose.config")

// require the routes here to run
require("./routes/joke.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));