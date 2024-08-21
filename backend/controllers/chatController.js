
// const knex = require("knex")(require("../knexfile").development);

// exports.UserAddMessage = async (req, res) => {
//   const { UserMessage } = req.body;
//   try {
//     await knex("chat").insert({
//       national_id: "1001000000",
//       Message: UserMessage,
//       admin: false,
//       Deleted: false,
//     });
//     res.status(201).json({ message: "تمت إضافة رسالة بنجاح!" });
//   } catch (error) {
//     res.status(500).json({ error: "حدث خطأ أثناء إرسال الرسالة." });
//   }
// };

// exports.getMessages = async (req, res) => {
//   try {
//     const Messages = await knex("chat").select("*").where({
//       Deleted: false,
//     });
//     res.status(200).json(Messages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "حدث خطأ أثناء جلب الرسائل." });
//   }
// };


//////

const knex = require("knex")(require("../knexfile").development);
const jwt = require('jsonwebtoken');

exports.UserAddMessage = async (req, res) => {
  const { UserMessage } = req.body;
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "لم يتم توفير التوكن" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const national_id = decoded.userId;

    await knex("chat").insert({
      national_id: national_id,
      Message: UserMessage,
      admin: false,
      Deleted: false,
    });


    res.status(201).json({ message: "تمت إضافة رسالة بنجاح!" });
  } catch (error) {
    console.error('Error in UserAddMessage:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "التوكن غير صالح" });
    }
    res.status(500).json({ error: "حدث خطأ أثناء إرسال الرسالة." });
  }
};

exports.getMessages = async (req, res) => {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "لم يتم توفير التوكن" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const national_id = decoded.userId;

    const Messages = await knex("chat")
      .select("*")
      .where({
        national_id: national_id,
        Deleted: false,
      })
      .orderBy('timestamp', 'asc');

    res.status(200).json(Messages);
  } catch (error) {
    console.error('Error in getMessages:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "التوكن غير صالح" });
    }
    res.status(500).json({ error: "حدث خطأ أثناء جلب الرسائل." });
  }
};
