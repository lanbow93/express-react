// Importing dependencies
require("dotenv").config();
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const peopleRouter = require("./controllers/people")

// Creating Application Object
const app = express();

// Middleware
app.use(cors()); // To prevent cors errors, open access to all origins
app.use(morgan("dev"));
app.use(express.json()); // Parses json bodies
app.use("/people", peopleRouter);

// ~~~~~~~~~~ Routes ~~~~~~~~~ //
// Route to test server is working
app.get("/", (request, response) => {
    response.send("Server is functional")
})






// Listener
const PORT = process.env.PORT || 5555
app.listen(PORT, (request, response) => {
    console.log(`Listening on port: ${PORT}`)
})