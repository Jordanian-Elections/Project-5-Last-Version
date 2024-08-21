// // services/authService.js
// const knex = require('knex')(require('../knexfile').development);
// require('dotenv').config();

// const jwt = require('jsonwebtoken');
// const emailService = require('./emailService');

// exports.handleLogin = async (national_id) => {
//   const user = await knex('users').where({ national_id }).first();
//   if (!user) {
//     throw new Error('User not found');
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   await knex('users').where({ id: user.id }).update({ otp });

//   await emailService.sendOTPEmail(user.email, otp);
//   return 'OTP sent to your email';
// };

// exports.handleVerify = async (national_id, otp) => {
//   const user = await knex('users').where({ national_id, otp }).first();
//   if (!user) {
//     throw new Error('Invalid OTP');
//   }

//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   await knex('users').where({ id: user.id }).update({ otp: null });

//   return token;
// };



const knex = require('../knex-config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const emailService = require('./emailService'); // استيراد خدمة إرسال البريد الإلكتروني

exports.handleLogin = async (national_id, name) => {
  try {
    // البحث عن المستخدم باستخدام national_id
    let user = await knex('users').where({ national_id }).first();
    if (!user) {
      // إذا لم يكن المستخدم موجودًا، قم بإنشائه
      user = {
        national_id,
        name,
        email: `${national_id}@example.com`, // يجب استبدال البريد الإلكتروني بهذا البريد إذا كان متاحًا
        password: await bcrypt.hash('temporary_password', 10)
      };
      await knex('users').insert(user);
    }

    // إنشاء OTP عشوائي
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // تحديث قاعدة البيانات بالـ OTP
    await knex('users').where({ national_id }).update({ otp });

    // إرسال OTP إلى بريد المستخدم الإلكتروني
    await emailService.sendOTPEmail(user.email, otp);

    return { message: 'OTP sent to your email.' }; // رسالة للرد على العميل
  } catch (error) {
    console.error('Error in handleLogin:', error); // تسجيل الخطأ
    throw new Error('Login failed'); // إلقاء خطأ إذا فشل
  }
};

exports.handleVerify = async (national_id, otp) => {
  try {
    const user = await knex('users').where({ national_id }).first();
    if (!user) {
      console.log(`User not found for national_id: ${national_id}`);
      throw new Error('User not found');
    }

    if (user.otp !== otp) {
      console.log(`OTP mismatch for national_id: ${national_id}`);
      throw new Error('Invalid OTP');
    }

    await knex('users').where({ national_id }).update({ otp: null });

    const token = jwt.sign({ national_id: user.national_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
  } catch (error) {
    console.error('Error in handleVerify:', error);
    throw error;
  }
};