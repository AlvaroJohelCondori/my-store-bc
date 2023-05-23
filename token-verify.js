const jwt = require('jsonwebtoken');

const secret = 'myDog';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4NDgwOTkzMX0._WxMzFc9j6VDal_xcn0xtV173k4_9HV4LURNXjc4DFM';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
