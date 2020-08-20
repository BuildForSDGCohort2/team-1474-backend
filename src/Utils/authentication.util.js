import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export function hashPassword(password) {
      return bcrypt.hashSync(password, 10, (err, hash) => hash);
  }
export function comparePassword(password, hash) { return bcrypt.compareSync(password, hash, (err, res) => res); }

export function createToken(userInfo, rememberMe) {
  return jwt.sign(
    {rememberMe,...userInfo},
    process.env.PRIVATE_KEY,
    {
      expiresIn: '1 days',
    },
  );
}

export function verifyToken(token) {
  let userInfo = {};
  jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      userInfo = {
        error: 'unauthorized token',
      };
      return;
    }
    userInfo = decoded;
  });
  return userInfo;
}

export function  getToken(req) {
  return (req.headers['x-access-token'] || req.headers.authorization
  || req.headers.Authorization || req.body.token || req.params.token);
}

export function decodeToken(token) {
  const data = jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) return { error: err.message };
    return decoded;
  });
  return data;
}