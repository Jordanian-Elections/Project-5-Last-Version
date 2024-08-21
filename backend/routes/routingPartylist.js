// const express = require('express');
// const router = express.Router();
// const knex = require('../knex-config');
// const cors = require("cors");

// router.get('/parties', async (req, res) => {
//     try {
//       const parties = await knex('candidates')
//         .distinct('party')
//         .select('party');

//       res.json(parties);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to retrieve party list' });
//     }
//   });

// router.patch('/votedparty', async (req, res) => {
//     const { user, candidate } = req.body;
//     const { national_id } = user;
//     const { party } = candidate;

//     try {
//       // Verify user exists
//       const userRecord = await knex('users').where({ national_id }).first(); // Ensure correct table name

//       if (!userRecord) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       // Increment the vote count for the specified party
//       await knex('candidates').where({ party }).increment('party_votes', 1); // Ensure field name is correct

//       // Mark the user as having voted for a party
//       await knex('users').where({ national_id }).update({ isVotedparty: true });

//       res.status(200).json({ message: 'Vote recorded' });
//     } catch (error) {
//       console.error('Failed to record vote:', error); // Log the error for debugging
//       res.status(500).json({ error: 'Failed to record vote' });
//     }
//   });

// module.exports = router;
const express = require("express");
const router = express.Router();
const knex = require("../knex-config");
const cors = require("cors");

// Get list of parties
router.get("/parties", async (req, res) => {
  try {
    const parties = await knex("candidates").distinct("party").select("party");

    res.json(parties);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve party list" });
  }
});

// Record vote for a party or white paper
router.patch("/votedparty", async (req, res) => {
  const { user, candidate } = req.body;
  const { national_id } = user;
  const { party } = candidate;

  try {
    // Verify user exists
    const userRecord = await knex("users").where({ national_id }).first();
    if (!userRecord) {
      return res.status(404).json({ error: "User not found" });
    }

    if (party) {
      // Increment the vote count for the specified party
      await knex("candidates").where({ party }).increment("party_votes", 1);
    } else {
      // Increment the white paper vote count
      await knex("whitepaper").where({ id: 1 }).increment("partylist", 1);
    }

    // Mark the user as having voted
    await knex("users").where({ national_id }).update({ isVotedparty: true });

    res.status(200).json({ message: "Vote recorded" });
  } catch (error) {
    console.error("Failed to record vote:", error);
    res.status(500).json({ error: "Failed to record vote" });
  }
});

module.exports = router;
