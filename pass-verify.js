const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$M8BdbTf65FDcvxKgCQajzupe5AmHuOkgPwmK57995Dp4HErK.W.d6';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
