const jwt = require('jsonwebtoken');
const SECRET_KEY = 'INIRAHASIA';

function generateToken(payload){
    const token = jwt.sign(
        payload, 
        SECRET_KEY, 
        {expiresIn: '2h'}
        );
    return token;
}

function verifyToken(token){
    const decoded =  jwt.verify(token, SECRET_KEY);
    return decoded;
}

module.exports={generateToken, verifyToken};