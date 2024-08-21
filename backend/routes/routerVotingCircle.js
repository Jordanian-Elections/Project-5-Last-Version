const express = require("express");
const router = express.Router();
const knex = require("../knex-config"); // Import your knex instance
const cors = require("cors");

console.log("test");

router.get("/users", async (req, res) => {
  const users = await knex.select().from("users");
  res.send(users);
});

router.get("/candidate", async (req, res) => {
  const candidates = await knex.select().from("candidates");
  res.send(candidates);
});

router.get("/whitepaper", async (req, res) => {
  const whitepaper = await knex.select().from("whitepaper");
  res.send(whitepaper);
});

// router.get('/candidates-by-circle', async (req, res) => {
//     // Step 1: Fetch all circles
//     const circles = await knex('candidates').distinct('circle').select('circle');

//     const results = [];

//     for (const circle of circles) {
//       const circleName = circle.circle;

//       // Step 2: Fetch all lists for the current circle
//       const lists = await knex('candidates')
//         .distinct('list')
//         .where({ circle: circleName })
//         .select('list');

//       const listsWithCandidates = [];

//       for (const list of lists) {
//         const listName = list.list;

//         // Step 3: Fetch all candidates for the current list
//         const candidates = await knex('candidates')
//           .where({ circle: circleName, list: listName })
//           .select('*');

//         listsWithCandidates.push({
//           list: listName,
//           candidates: candidates
//         });
//       }

//       results.push({
//         circle: circleName,
//         lists: listsWithCandidates
//       });
//     }

//     res.json(results);

// });

router.get("/candidates-by-city", async (req, res) => {
  try {
    // Step 1: Fetch all distinct cities
    const cities = await knex("candidates").distinct("city").select("city");

    const results = [];

    // Process each city
    for (const city of cities) {
      const cityName = city.city;

      // Step 2: Fetch all distinct circles for the current city
      const circles = await knex("candidates")
        .distinct("circle")
        .where({ city: cityName })
        .select("circle");

      const circlesWithLists = [];

      // Process each circle
      for (const circle of circles) {
        const circleName = circle.circle;

        // Step 3: Fetch all distinct lists for the current circle in the current city
        const lists = await knex("candidates")
          .distinct("list")
          .where({ city: cityName, circle: circleName })
          .select("list");

        const listsWithCandidates = [];

        // Process each list
        for (const list of lists) {
          const listName = list.list;

          // Step 4: Fetch all candidates for the current list, circle, and city
          const candidates = await knex("candidates")
            .where({ city: cityName, circle: circleName, list: listName })
            .select("*");

          listsWithCandidates.push({
            list: listName,
            candidates: candidates,
          });
        }

        circlesWithLists.push({
          circle: circleName,
          lists: listsWithCandidates,
        });
      }

      results.push({
        city: cityName,
        circles: circlesWithLists,
      });
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Voting for circle and city
router.patch("/votedcircle", async (req, res) => {
  const { user, candidate } = req.body;
  const { national_id, circle: userCircle, city: userCity } = user;
  const {
    candidate_national_ids,
    circle_list: circle_list,
    circle: candidateCircle,
    city: candidateCity,
  } = candidate;

  const userRecord = await knex("users").where({ national_id }).first();
  if (!userRecord) {
    return res.status(404).json({ error: "User not found" });
  }

  if (userRecord.circle !== userCircle || userRecord.city !== userCity) {
    return res.status(400).json({
      error:
        "Provided user circle or city does not match the user's actual circle or city",
    });
  }

  if (userCircle !== candidateCircle || userCity !== candidateCity) {
    return res.status(400).json({
      error:
        "User's circle or city does not match the candidate's circle or city",
    });
  }

  // Step 3: Voting logic based on candidate_national_ids and circle_list
  if (candidate_national_ids && candidate_national_ids.length > 0) {
    // Validate that all candidate_national_ids belong to the provided circle and city
    const candidatesDetails = await knex("candidates")
      .whereIn("candidate_national_id", candidate_national_ids)
      .select("circle", "city");

    const allSameCircleAndCity = candidatesDetails.every(
      (c) => c.circle === candidateCircle && c.city === candidateCity
    );

    if (!allSameCircleAndCity) {
      return res.status(400).json({
        error:
          "All candidates must be from the same circle and city as the user",
      });
    }

    // Increment votes for each candidate
    await Promise.all(
      candidate_national_ids.map(async (id) => {
        await knex("candidates")
          .where({ candidate_national_id: id })
          .increment("candidate_votes", 1);
        await knex("candidates")
          .where({ candidate_national_id: id })
          .increment("list_votes", 1);
      })
    );
  } else if (circle_list) {
    // Step 4: Handle voting for a list
    const listExists = await knex("candidates")
      .where({ circle_list, circle: candidateCircle, city: candidateCity })
      .first();

    await knex("candidates")
      .where({ circle_list, circle: candidateCircle, city: candidateCity })
      .increment("list_votes", 1);
  } else {
    // Step 5: Handle voting for a whitepaper if no candidates or list is provided
    await knex("whitepaper").where({ id: 1 }).increment("locallist", 1);
  }

  // Step 6: Mark the user as having voted in the circle
  await knex("users").where({ national_id }).update({ isVotedcircle: true });

  res.status(200).json({ message: "Vote recorded" });
});

router.get("/countvotedcircle", async (req, res) => {
  try {
    // Query to count the number of users who have voted
    const result = await knex("users")
      .where({ isVotedcircle: true })
      .count("national_id as count")
      .first();

    // Send the count back as a response
    res.status(200).json({ count: result.count });
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error counting voted users:", error);
    res
      .status(500)
      .json({ error: "An error occurred while counting voted users" });
  }
});

router.get("/countvotedparty", async (req, res) => {
  try {
    // Query to count the number of users who have voted
    const result = await knex("users")
      .where({ isVotedparty: true })
      .count("national_id as count")
      .first();

    // Send the count back as a response
    res.status(200).json({ count: result.count });
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error counting voted users:", error);
    res
      .status(500)
      .json({ error: "An error occurred while counting voted users" });
  }
});

module.exports = router;

//back up to my patch code  :
// Voting for circle

//   router.patch('/votedcircle', async (req, res) => {
//     const { national_id, candidate_national_ids , circle_list } = req.body;

//       const user = await knex('users').where({ national_id }).first();
//       console.log(candidate_national_ids);

//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       // if (user.isVotedcircle) {
//       //   return res.status(400).json({ error: 'User has already voted in this circle' });
//       // }

//       // Get the user's circle
//          const userCircle = await knex('users')
//          .where({ national_id: user.national_id })
//          .select('circle')
//          .first();
//       if (!userCircle) {
//          return res.status(400).json({ error: 'User circle not found' });
//         }

//       // Validate that all candidate_national_ids belong to the same circle
//         if (candidate_national_ids && candidate_national_ids.length > 0) {
//         const candidatesCircles = await knex('candidates')
//         .whereIn('candidate_national_id', candidate_national_ids)
//         .select('circle');

//          const allSameCircle = candidatesCircles.every(c => c.circle === userCircle.circle);

//         if (!allSameCircle) {
//             return res.status(400).json({ error: 'All candidates must be from the same circle as the user' });
//         }

//       //  votes for each candidate
//       await Promise.all(candidate_national_ids.map(async (id) => {
//           await knex('candidates').where({ candidate_national_id: id }).increment('candidate_votes', 1);
//           await knex('candidates').where({ candidate_national_id: id }).increment('list_votes', 1);
//       }));
//      } else if (circle_list) {
//            // Vote for list
//            await knex('candidates').where({ circle_list, circle: userCircle.circle }).increment('list_votes', 1);
//     } else {
//           // Whitepaper vote
//           await knex('whitepaper').where({ id: 1 }).increment('locallist', 1);
//       }

//            // Mark user as voted
//           await knex('users').where({ national_id }).update({ isVotedcircle: true });

//       res.status(200).json({ message: 'Vote recorded' });

//   });

// Voting for circle
// Voting for circle

// شغاله انه يشيك على السيركل
// router.patch('/votedcircle', async (req, res) => {
//     const { user, candidate } = req.body;
//     const { national_id, circle: userCircle } = user;
//     const { candidate_national_ids, circle_list, circle: candidateCircle } = candidate;

//     try {
//       // Step 1: Fetch the user by national_id
//       const userRecord = await knex('users').where({ national_id }).first();
//       if (!userRecord) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       // Step 2: Compare the user's circle with the candidate's circle
//       if (userRecord.circle !== userCircle) {
//         return res.status(400).json({ error: 'Provided user circle does not match the user\'s actual circle' });
//       }

//       if (userCircle !== candidateCircle) {
//         return res.status(400).json({ error: 'User\'s circle does not match the candidate\'s circle' });
//       }

//       // Step 3: Voting logic based on candidate_national_ids and circle_list
//       if (candidate_national_ids && candidate_national_ids.length > 0) {
//         // Validate that all candidate_national_ids belong to the provided circle
//         const candidatesCircles = await knex('candidates')
//           .whereIn('candidate_national_id', candidate_national_ids)
//           .select('circle');

//         const allSameCircle = candidatesCircles.every(c => c.circle === candidateCircle);

//         if (!allSameCircle) {
//           return res.status(400).json({ error: 'All candidates must be from the same circle as the user' });
//         }

//         // Increment votes for each candidate
//         await Promise.all(candidate_national_ids.map(async (id) => {
//           await knex('candidates').where({ candidate_national_id: id }).increment('candidate_votes', 1);
//           await knex('candidates').where({ candidate_national_id: id }).increment('list_votes', 1);
//         }));

//       } else if (circle_list) {
//         // Step 4: Handle voting for a list
//         const listExists = await knex('candidates')
//           .where({ circle_list, circle: candidateCircle })
//           .first();

//         if (listExists) {
//           await knex('candidates').where({ circle_list, circle: candidateCircle }).increment('list_votes', 1);
//         } else {
//           return res.status(404).json({ error: 'List not found in the provided circle' });
//         }
//       } else {
//         // Step 5: Handle voting for a whitepaper if no candidates or list is provided
//         await knex('whitepaper').where({ id: 1 }).increment('locallist', 1);
//       }

//       // Step 6: Mark the user as having voted in the circle
//       await knex('users').where({ national_id }).update({ isVotedcircle: true });

//       res.status(200).json({ message: 'Vote recorded' });
//     } catch (error) {
//       console.error('Error processing vote:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
