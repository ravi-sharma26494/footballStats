const express = require("express");
const router = express.Router();
const FootballData = require("../models/footballSchema");

// Add data to the database
router.post("/add", async (req, res) => {
  try {
    const newData = new FootballData(req.body);
    await newData.save();
    res.status(201).send("Record added successfully");
  } catch (error) {
    res.status(400).send("Error adding record");
  }
});

// Update a record
router.post("/update", async (req, res) => {
  const { team, updates } = req.body;
  try {
    const updatedRecord = await FootballData.findOneAndUpdate(
      { team },
      updates,
      {
        new: true,
      }
    );
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).send("Error updating record");
  }
});

// Delete a record
router.post("/delete", async (req, res) => {
  try {
    const { team } = req.body;
    await FootballData.findOneAndDelete({ team });
    res.status(200).send("Record deleted successfully");
  } catch (error) {
    res.status(400).send("Error deleting record");
  }
});

// Total games played, draw, and won for a given year
router.get("/stats", async (req, res) => {
  try {
    const { year } = req.query;
    const stats = await FootballData.find({ year }, "gamesPlayed win draw");
    // console.log(stats);
    res.status(200).json(stats);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error fetching stats");
  }
});

// First 10 records with wins greater than X
router.get("/top10", async (req, res) => {
  const { minWins } = req.query;
  try {
    const records = await FootballData.find({ win: { $gt: minWins } })
      .limit(10)
      .exec();
    res.status(200).json(records);
  } catch (error) {
    res.status(400).send("Error fetching records");
  }
});

// Average goals for a given year
router.get("/averageGoals", async (req, res) => {
  const { year } = req.query;
  try {
    const results = await FootballData.aggregate([
      { $match: { year: parseInt(year) } },
      { $group: { _id: "$team", avgGoals: { $avg: "$goalsFor" } } },
    ]);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).send("Error fetching average goals");
  }
});

module.exports = router;
