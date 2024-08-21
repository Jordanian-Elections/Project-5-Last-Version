const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const authenticateToken = (req, res, next) => {
  // استخراج التوكن من الكوكيز
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  // التحقق من التوكن واستخراج المعلومات
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // إلحاق معلومات المستخدم بالطلب
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
