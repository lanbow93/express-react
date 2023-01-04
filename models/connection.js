const mongoose = require("mongoose")
require("dotenv").config()

const DATABASE_URL = process.env.DATABASE_URL
// Establishing a connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Connection events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

module.exports = mongoose