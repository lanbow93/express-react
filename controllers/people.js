// Imports
const People = require("../models/people")
const router = require('express').Router()

// People index route
router.get("/", async (request, response) => {
    try {
        response.json(await People.find({}))
    } catch (error) {
        response.status(400).json(error)
    }
})

// People destroy route
router.delete("/:id", async (request,response) => {
    try {
        response.json(await People.findByIdAndDelete(request.params.id))
    } catch (error) {
        response.status(400).json(error)
    }
})

// People update route
router.put("/:id", async (request, response) => {
    try {
        response.json(await People.findByIdAndUpdate(request.params.id, request.body, {new: true}))
    } catch(error) {
        response.status(400).json(error);
    }
})

// People create route
router.post("/", async (request, response) => {
    try {
        response.json(await People.create(request.body))
    } catch(error) {
        response.status(400).json(error)
    }
})


module.exports = router