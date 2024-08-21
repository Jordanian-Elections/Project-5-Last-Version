// const db = require('../db/connection'); // قم بتعديل المسار حسب مكان ملف الاتصال بقاعدة البيانات

// // إنشاء مناظرة جديدة
// exports.createDebate = async (req, res) => {
//   try {
//     const { name, start_time, end_time, candidates } = req.body;

//     // التحقق من المرشحين
//     const existingCandidates = await db('users').whereIn('national_id', candidates).pluck('national_id');
//     if (existingCandidates.length !== candidates.length) {
//       return res.status(400).json({ message: 'One or more candidates are not registered.' });
//     }

//     // إدخال المناظرة
//     const [debateId] = await db('debates').insert({
//       name,
//       start_time,
//       end_time
//     }).returning('id');

//     // إدخال المرشحين
//     const candidatesData = candidates.map(national_id => ({ debate_id: debateId, user_id: national_id }));
//     await db('debate_candidates').insert(candidatesData);

//     res.status(201).json({ message: 'Debate created successfully', debateId });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating debate', error });
//   }
// };

// // الحصول على تفاصيل المناظرة
// exports.getDebate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const debate = await db('debates').where('id', id).first();
//     if (!debate) {
//       return res.status(404).json({ message: 'Debate not found' });
//     }

//     const candidates = await db('debate_candidates')
//       .join('users', 'debate_candidates.user_id', 'users.national_id')
//       .where('debate_candidates.debate_id', id)
//       .select('users.name');

//     res.status(200).json({ ...debate, candidates });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching debate', error });
//   }
// };

// // الموافقة على مناظرة
// exports.approveDebate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [debate] = await db('debates').where('id', id).update({ isApproved: true }).returning('*');
//     if (!debate) {
//       return res.status(404).json({ message: 'Debate not found' });
//     }
//     res.status(200).json({ message: 'Debate approved', debate });
//   } catch (error) {
//     res.status(500).json({ message: 'Error approving debate', error });
//   }
// };





// controllers/debateController.js
const db = require('../db/connection'); // Adjust as needed

exports.createDebate = async (req, res) => {
  try {
    const { name, start_time, end_time, candidate1_id, candidate2_id } = req.body;

    // Validate candidates
    const existingCandidates = await db('users').whereIn('national_id', [candidate1_id, candidate2_id]).pluck('national_id');
    if (existingCandidates.length !== 2) {
      return res.status(400).json({ message: 'One or more candidates are not registered.' });
    }

    // Insert debate
    const [debateId] = await db('debates').insert({
      name,
      start_time,
      end_time,
      candidate1_id,
      candidate2_id
    }).returning('id');

    res.status(201).json({ message: 'Debate created successfully', debateId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating debate', error });
  }
};
