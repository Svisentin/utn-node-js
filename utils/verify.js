
const jsonwebtoken = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authToken = req.headers['authorization'];
  if (!authToken) {
    return res.status(401).json({ message: 'Token debe ser enviado' });
  }
  const token = authToken.split(' ')[1];
  jsonwebtoken.verify(token, req.app.get('secretKey'), function (error, payload) {
    if (error) {
      return res.status(401).json({ message: error.message });
    } else {
      console.log(payload);
      next();
    }
  });
}

module.exports = verifyToken;
