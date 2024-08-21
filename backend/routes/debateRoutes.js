// const express = require('express');
// const router = express.Router();
// const knex = require('../knex-config'); // Adjust this path to your database connection

// // Create a new debate
// router.post('/', async (req, res) => {
//   try {
//     const { name, start_time, end_time, candidate1_id, candidate2_id } = req.body;

//     // Check if candidates exist and are actually candidates
//     const candidates = await knex('users')
//       .whereIn('national_id', [candidate1_id, candidate2_id])
//       .andWhere('role', 'candidate');

//     if (candidates.length !== 2) {
//       return res.status(400).json({ error: 'Invalid candidate IDs' });
//     }

//     const debate = await knex('debates').insert({
//       name,
//       start_time,
//       end_time,
//       candidate1_id,
//       candidate2_id,
//     }).returning('*');

//     res.status(201).json(debate[0]);
//   } catch (error) {
//     console.error('Error creating debate:', error);
//     res.status(500).json({ error: 'An error occurred while creating the debate' });
//   }
// });

// // Get all debates
// router.get('/', async (req, res) => {
//   try {
//     const debates = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id');
//     res.json(debates);
//   } catch (error) {
//     console.error('Error fetching debates:', error);
//     res.status(500).json({ error: 'An error occurred while fetching debates' });
//   }
// });

// // Get a specific debate
// router.get('/:id', async (req, res) => {
//   try {
//     const debate = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.id', req.params.id)
//       .first();

//     if (!debate) {
//       return res.status(404).json({ error: 'Debate not found' });
//     }

//     res.json(debate);
//   } catch (error) {
//     console.error('Error fetching debate:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the debate' });
//   }
// });

// module.exports = router;


////////////



// const express = require('express');
// const router = express.Router();
// const knex = require('../knex-config'); // Adjust this path to your database connection

// // Create a new debate
// router.post('/', async (req, res) => {
//   try {
//     const { name, start_time, end_time, candidate1_id, candidate2_id } = req.body;

//     // Check if candidates exist and are actually candidates
//     const candidates = await knex('users')
//       .whereIn('national_id', [candidate1_id, candidate2_id])
//       .andWhere('role', 'candidate');

//     if (candidates.length !== 2) {
//       return res.status(400).json({ error: 'Invalid candidate IDs' });
//     }

//     const debate = await knex('debates').insert({
//       name,
//       start_time,
//       end_time,
//       candidate1_id,
//       candidate2_id,
//       isApproved: false // Set isApproved to false by default
//     }).returning('*');

//     res.status(201).json(debate[0]);
//   } catch (error) {
//     console.error('Error creating debate:', error);
//     res.status(500).json({ error: 'An error occurred while creating the debate' });
//   }
// });

// // Get all approved debates
// router.get('/', async (req, res) => {
//   try {
//     const debates = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.isApproved', true);
//     res.json(debates);
//   } catch (error) {
//     console.error('Error fetching debates:', error);
//     res.status(500).json({ error: 'An error occurred while fetching debates' });
//   }
// });

// // Get a specific debate
// router.get('/:id', async (req, res) => {
//   try {
//     const debate = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.id', req.params.id)
//       .first();

//     if (!debate) {
//       return res.status(404).json({ error: 'Debate not found' });
//     }

//     res.json(debate);
//   } catch (error) {
//     console.error('Error fetching debate:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the debate' });
//   }
// });

// // Approve a debate (new endpoint)
// router.patch('/:id/approve', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedDebate = await knex('debates')
//       .where('id', id)
//       .update({ isApproved: true })
//       .returning('*');

//     if (updatedDebate.length === 0) {
//       return res.status(404).json({ error: 'Debate not found' });
//     }

//     res.json(updatedDebate[0]);
//   } catch (error) {
//     console.error('Error approving debate:', error);
//     res.status(500).json({ error: 'An error occurred while approving the debate' });
//   }
// });

// module.exports = router;



/////


// const express = require('express');
// const router = express.Router();
// const knex = require('../knex-config'); // Adjust this path to your database connection

// // Create a new debate
// router.post('/', async (req, res) => {
//   try {
//     const { name, start_time, end_time, candidate1_id, candidate2_id } = req.body;

//     // Check if candidates exist and are actually candidates
//     const candidates = await knex('users')
//       .whereIn('national_id', [candidate1_id, candidate2_id])
//       .andWhere('role', 'candidate');

//     if (candidates.length !== 2) {
//       return res.status(400).json({ error: 'Invalid candidate IDs' });
//     }

//     const debate = await knex('debates').insert({
//       name,
//       start_time,
//       end_time,
//       candidate1_id,
//       candidate2_id,
//       isApproved: false // Set isApproved to false by default
//     }).returning('*');

//     res.status(201).json(debate[0]);
//   } catch (error) {
//     console.error('Error creating debate:', error);
//     res.status(500).json({ error: 'An error occurred while creating the debate' });
//   }
// });

// // Get all debates (new route)
// router.get('/all', async (req, res) => {
//   try {
//     const debates = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .orderBy('debates.start_time', 'asc');
//     res.json(debates);
//   } catch (error) {
//     console.error('Error fetching all debates:', error);
//     res.status(500).json({ error: 'An error occurred while fetching debates' });
//   }
// });

// // Get all approved debates
// router.get('/', async (req, res) => {
//   try {
//     const debates = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.isApproved', true)
//       .orderBy('debates.start_time', 'asc');
//     res.json(debates);
//   } catch (error) {
//     console.error('Error fetching approved debates:', error);
//     res.status(500).json({ error: 'An error occurred while fetching debates' });
//   }
// });

// // Get a specific debate
// router.get('/:id', async (req, res) => {
//   try {
//     const debate = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.id', req.params.id)
//       .first();

//     if (!debate) {
//       return res.status(404).json({ error: 'Debate not found' });
//     }

//     res.json(debate);
//   } catch (error) {
//     console.error('Error fetching debate:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the debate' });
//   }
// });

// // Approve a debate
// router.patch('/:id/approve', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedDebate = await knex('debates')
//       .where('id', id)
//       .update({ isApproved: true })
//       .returning('*');

//     if (updatedDebate.length === 0) {
//       return res.status(404).json({ error: 'Debate not found' });
//     }

//     res.json(updatedDebate[0]);
//   } catch (error) {
//     console.error('Error approving debate:', error);
//     res.status(500).json({ error: 'An error occurred while approving the debate' });
//   }
// });

// module.exports = router;



////


// const express = require('express');
// const router = express.Router();
// const knex = require('../knex-config'); // Adjust this path to your database connection

// // Get all approved debates
// // Get all approved debates
// router.get('/', async (req, res) => {
//   try {
//     const debates = await db('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.isApproved', true)
//       .orderBy('debates.start_time', 'asc');
    
//     res.json(debates);
//   } catch (error) {
//     console.error('Error fetching approved debates:', error);
//     res.status(500).json({ error: 'An error occurred while fetching debates' });
//   }
// });

// // Create a new debate
// router.post('/', async (req, res) => {
//   try {
//     const { name, start_time, end_time, candidate1_id, candidate2_id } = req.body;
//     // Check if candidates exist and are actually candidates
//     const candidates = await knex('users')
//       .whereIn('national_id', [candidate1_id, candidate2_id])
//       .andWhere('role', 'candidate');
//     if (candidates.length !== 2) {
//       return res.status(400).json({ error: 'Invalid candidate IDs' });
//     }
//     const debate = await knex('debates').insert({
//       name,
//       start_time,
//       end_time,
//       candidate1_id,
//       candidate2_id,
//       isApproved: false // Set isApproved to false by default
//     }).returning('*');
//     res.status(201).json(debate[0]);
//   } catch (error) {
//     console.error('Error creating debate:', error);
//     res.status(500).json({ error: 'An error occurred while creating the debate' });
//   }
// });

// // Get a specific debate
// router.get('/:id', async (req, res) => {
//   try {
//     const debate = await knex('debates')
//       .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
//       .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
//       .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
//       .where('debates.id', req.params.id)
//       .andWhere('debates.isApproved', true)
//       .first();
//     if (!debate) {
//       return res.status(404).json({ error: 'Debate not found or not approved' });
//     }
//     res.json(debate);
//   } catch (error) {
//     console.error('Error fetching debate:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the debate' });
//   }
// });

// // Approve a debate
// router.patch('/:id/approve', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedDebate = await knex('debates')
//       .where('id', id)
//       .update({ isApproved: true })
//       .returning('*');
//     if (updatedDebate.length === 0) {
//       return res.status(404).json({ error: 'Debate not found' });
//     }
//     res.json(updatedDebate[0]);
//   } catch (error) {
//     console.error('Error approving debate:', error);
//     res.status(500).json({ error: 'An error occurred while approving the debate' });
//   }
// });

// module.exports = router;


////


const express = require('express');
const router = express.Router();
const db = require('../knex-config'); // Use the updated dbConfig file

// Get all approved debates
router.get('/', async (req, res) => {
  try {
    const debates = await db('debates')
      .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
      .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
      .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
      .where('debates.isApproved', true)
      .orderBy('debates.start_time', 'asc');
    
    res.json(debates);
  } catch (error) {
    console.error('Error fetching approved debates:', error);
    res.status(500).json({ error: 'An error occurred while fetching debates' });
  }
});

// Create a new debate
router.post('/', async (req, res) => {
  try {
    const { name, start_time, end_time, candidate1_id, candidate2_id } = req.body;
    const candidates = await db('users')
      .whereIn('national_id', [candidate1_id, candidate2_id])
      .andWhere('role', 'candidate');
    if (candidates.length !== 2) {
      return res.status(400).json({ error: 'Invalid candidate IDs' });
    }
    const debate = await db('debates').insert({
      name,
      start_time,
      end_time,
      candidate1_id,
      candidate2_id,
      isApproved: false
    }).returning('*');
    res.status(201).json(debate[0]);
  } catch (error) {
    console.error('Error creating debate:', error);
    res.status(500).json({ error: 'An error occurred while creating the debate' });
  }
});

// Get a specific debate
router.get('/:id', async (req, res) => {
  try {
    const debate = await db('debates')
      .select('debates.*', 'c1.name as candidate1_name', 'c2.name as candidate2_name')
      .leftJoin('users as c1', 'debates.candidate1_id', 'c1.national_id')
      .leftJoin('users as c2', 'debates.candidate2_id', 'c2.national_id')
      .where('debates.id', req.params.id)
      .andWhere('debates.isApproved', true)
      .first();
    if (!debate) {
      return res.status(404).json({ error: 'Debate not found or not approved' });
    }
    res.json(debate);
  } catch (error) {
    console.error('Error fetching debate:', error);
    res.status(500).json({ error: 'An error occurred while fetching the debate' });
  }
});

// Approve a debate
router.patch('/:id/approve', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDebate = await db('debates')
      .where('id', id)
      .update({ isApproved: true })
      .returning('*');
    if (updatedDebate.length === 0) {
      return res.status(404).json({ error: 'Debate not found' });
    }
    res.json(updatedDebate[0]);
  } catch (error) {
    console.error('Error approving debate:', error);
    res.status(500).json({ error: 'An error occurred while approving the debate' });
  }
});

module.exports = router;

