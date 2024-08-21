// // const knex = require('knex')(require('../knexfile').development);

// // exports.createAd = async (req, res) => {
// //   try {
// //     const { candidateName, imageUrl, description } = req.body;
    
// //     // Basic validation
// //     if (!candidateName || typeof candidateName !== 'string' ||
// //         !imageUrl || typeof imageUrl !== 'string' ||
// //         !description || typeof description !== 'string') {
// //       return res.status(400).json({ error: 'Invalid input data' });
// //     }
    
// //     // Insert data into the database
// //     const newAd = await knex('ads')
// //       .insert({ candidate_name: candidateName, image_url: imageUrl, description })
// //       .returning('*');
    
// //     // Respond with the inserted ad
// //     res.status(201).json(newAd);
// //   } catch (error) {
// //     console.error('Error creating ad:', error);
// //     res.status(500).json({ error: 'Failed to create ad' });
// //   }
// // };


// // exports.getAllAds = async (req, res) => {
// //   try {
// //     const ads = await knex('ads').select('*');
// //     res.status(200).json(ads);
// //   } catch (error) {
// //     console.error('Error fetching ads:', error);
// //     res.status(500).json({ error: 'Failed to fetch ads' });
// //   }
// // };

// // exports.getAdById = async (req, res) => {
// //   try {
// //     const ad = await knex('ads').where({ id: req.params.id }).first();
// //     if (!ad) {
// //       return res.status(404).json({ error: 'Ad not found' });
// //     }
// //     res.status(200).json(ad);
// //   } catch (error) {
// //     console.error('Error fetching ad:', error);
// //     res.status(500).json({ error: 'Failed to fetch ad' });
// //   }
// // };
// // console.log("test");








// const knex = require('knex')(require('../knexfile').development);

// exports.createAd = async (req, res) => {
//   try {
//     const { candidateName, imageUrl, description, price, status } = req.body;
// console.log(req.body)    // Basic validation
//     if (
//       !candidateName || typeof candidateName !== 'string' ||
//       !imageUrl || typeof imageUrl !== 'string' ||
//       !description || typeof description !== 'string' ||
//       isNaN(parseFloat(price)) || parseFloat(price) <= 0 ||
//       !status || (status !== 'approved' && status !== 'rejected')
//     ) {
//       return res.status(400).json({ error: 'Invalid input data' });
//     }

//     // Insert data into the database
//     const [newAd] = await knex('ads')
//       .insert({
//         candidate_name: candidateName,
//         image_url: imageUrl,
//         description,
//         price: parseFloat(price),
//         status
//       })
//       .returning('*');

//     // Respond with the inserted ad
//     res.status(201).json(newAd);
//   } catch (error) {
//     console.error('Error creating ad:', error);
//     res.status(500).json({ error: 'Failed to create ad' });
//   }
// };

// exports.getAllAds = async (req, res) => {
//   try {
//     const ads = await knex('ads').select('*');
//     res.status(200).json(ads);
//   } catch (error) {
//     console.error('Error fetching ads:', error);
//     res.status(500).json({ error: 'Failed to fetch ads' });
//   }
// };

// exports.getAdById = async (req, res) => {
//   try {
//     const ad = await knex('ads').where({ id: req.params.id }).first();
//     if (!ad) {
//       return res.status(404).json({ error: 'Ad not found' });
//     }
//     res.status(200).json(ad);
//   } catch (error) {
//     console.error('Error fetching ad:', error);
//     res.status(500).json({ error: 'Failed to fetch ad' });
//   }
// };


const knex = require('knex')(require('../knexfile').development);

exports.createAd = async (req, res) => {
  try {
    const { candidateName, imageUrl, description, price, status } = req.body;
    console.log(req.body); // Debugging

    // Basic validation
    if (
      !candidateName || typeof candidateName !== 'string' ||
      !imageUrl || typeof imageUrl !== 'string' ||
      !description || typeof description !== 'string' ||
      isNaN(parseFloat(price)) || parseFloat(price) <= 0 ||
      !status || (status !== 'approved' && status !== 'rejected')
    ) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Insert data into the database
    const [newAd] = await knex('ads')
      .insert({
        candidate_name: candidateName,
        image_url: imageUrl,
        description,
        price: parseFloat(price),
        status
      })
      .returning('*');

    // Respond with the inserted ad
    res.status(201).json(newAd);
  } catch (error) {
    console.error('Error creating ad:', error);
    res.status(500).json({ error: 'Failed to create ad' });
  }
};

exports.getAllAds = async (req, res) => {
  try {
    const ads = await knex('ads').select('*');
    res.status(200).json(ads);
  } catch (error) {
    console.error('Error fetching ads:', error);
    res.status(500).json({ error: 'Failed to fetch ads' });
  }
};

exports.getAdById = async (req, res) => {
  try {
    const ad = await knex('ads').where({ id: req.params.id }).first();
    if (!ad) {
      return res.status(404).json({ error: 'Ad not found' });
    }
    res.status(200).json(ad);
  } catch (error) {
    console.error('Error fetching ad:', error);
    res.status(500).json({ error: 'Failed to fetch ad' });
  }
};
