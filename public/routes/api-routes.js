//Dependencies
const router = require("express").Router();
const { Router } = require("mongoose");
const db = require("../models");

//GET route
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err)
    })
});

//POST route
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

//PUT (update) route
router.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findbyIDAndUpdate(
        params.id,
        {
            $push: {
                exercise: body
            }
        },
        {
            new: true,
        }
    )
    .then((result) =>{
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    })
})

//GET route for 7 day workout range
outer.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports = router;