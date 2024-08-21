// const knex = require('../knex-config');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const secret = 'your_secret_key'; // Replace with your actual secret key

// // Authenticate user
// exports.authenticateUser = async (req, res) => {
//   const { name, email, password, nationalID } = req.body;

//   try {
//     const user = await knex('users')
//       .where({ name, email, nationalID })
//       .first();

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
//////////////////////////////////

// // controllers/userAuthController.js
// const knex = require('../knex-config');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const dotenv = require('dotenv');

// dotenv.config();
// const secret = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

// exports.authenticateUser = async (req, res) => {
//   const { name, email, password, nationalID } = req.body;

//   try {
//     const user = await knex('users')
//       .where({ name, email, nationalID })
//       .first();

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' });
//     res.json({ token });
//   } catch (err) {
//     console.error('Error in authenticateUser:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
/////////////////////


// // controllers/userAuthController.js
// const knex = require('../knex-config');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const dotenv = require('dotenv');

// dotenv.config();
// const secret = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

// exports.authenticateUser = async (req, res) => {
//   const { name, email, password, nationalID } = req.body;

//   try {
//     // Use national_id instead of nationalID
//     const user = await knex('users')
//       .where({ name, email, national_id: nationalID }) // Correct column name
//       .first();

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' });
//     res.json({ token });
//   } catch (err) {
//     console.error('Error in authenticateUser:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex-config'); // تأكد من أن المسار صحيح

exports.authenticateUser = async (req, res) => {
  const { name, email, password, nationalID } = req.body;

  try {
    // البحث عن المستخدم في قاعدة البيانات
    console.log('Searching for user with:', { national_id: nationalID, email, name });
    const user = await knex('users').where({ national_id: nationalID, email, name }).first();

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'معلومات الدخول غير صحيحة' });
    }

    // التحقق من كلمة المرور
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'معلومات الدخول غير صحيحة' });
    }

    // إنشاء التوكن
    const token = jwt.sign({ userId: user.national_id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // إرسال التوكن
// <<<<<<< HEAD
//     // res.status(200).json({ token });
//     res.status(200).json({ token, national_id: nationalID });
//     req.json({token})


    res.status(200).json({ token, national_id: nationalID });

  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'حدث خطأ أثناء تسجيل الدخول' });
  }
};
