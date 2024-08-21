const express = require("express");
const router = express.Router();
const knex = require("../knex-config");
const cors = require("cors");


// Function to calculate the threshold and assign seats
const calculateSeats = async (totalAllocatedSeats) => {
  // 1. Calculate the total votes for all parties from the candidates table
  const partyVotes = await knex("candidates")
    .select("party")
    .sum("party_votes as voted_count")
    .groupBy("party");

  // Sum total votes for all parties
  const totalPartyVotes = partyVotes.reduce(
    (sum, item) => sum + item.voted_count,
    0
  );


  // Threshold is 2.5% of the total votes
  const threshold = 0.025 * totalPartyVotes;

  // 2. Filter parties that pass the threshold
  const listsPassingThreshold = partyVotes.filter(
    (item) => item.voted_count >= threshold
  );

  // 3. Calculate the total votes of passing lists
  const totalVotesOfPassingLists = listsPassingThreshold.reduce(
    (sum, row) => sum + row.voted_count,
    0
  );

  // 4. Assign seats based on the formula
  const results = [];
  for (let list of listsPassingThreshold) {
    let seats =
      (totalAllocatedSeats / totalVotesOfPassingLists) * list.voted_count;

    // Round the seats
    seats = seats % 1 >= 0.5 ? Math.ceil(seats) : Math.floor(seats);

    // Update the totalSeats in the database
    await knex("candidates").where("party", list.party).update({
      isPassparty: true, // Mark as passed
      totalSeatsparty: seats,
    });

    // Collect the result
    results.push({
      party: list.party,
      party_votes: list.voted_count,
      totalSeats: seats,
    });
  }

  return results;
};

// Endpoint to trigger the seat calculation and return results
router.get("/calculate-seats", async (req, res) => {
  const totalAllocatedSeats = 41; // Assuming 41 seats for example
  try {
    const result = await calculateSeats(totalAllocatedSeats);
    res.json(result);
  } catch (error) {
    console.error("Error calculating seats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
console.log("11");

module.exports = router;
