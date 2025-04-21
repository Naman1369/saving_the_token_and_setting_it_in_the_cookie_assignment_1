const jwt = require('jsonwebtoken');

// Secret key to sign/verify the token
const secretKey = 'myveryownsecretkey356';

const encrypt = (payload) => {
  try {
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    console.log('Encrypted Token:', token);
    return token;
  } catch (error) {
    console.error('Encryption failed:', error.message);
  }
};

const decrypt = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decrypted Payload:', decoded);
    return decoded;
  } catch (error) {
    console.error('Decryption failed:', error.message);
  }
};

// Sample test
const payload = { username: 'Naman', role: 'admin' };
const token = encrypt(payload);
const result = decrypt(token);

// Check your answer
if (result && result.username === payload.username && result.role === payload.role) {
  console.log('Success');
} else {
  console.log('Try Again!');
}

module.exports = {
  encrypt,
  decrypt,
};