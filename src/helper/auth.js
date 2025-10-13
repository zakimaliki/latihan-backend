import jwt from 'jsonwebtoken'
const generateToken = (payload) => {
    const verifyOpts = {
        expiresIn: '1h',
        issuer: 'campusku'
    }
    const token = jwt.sign(payload, process.env.SECRETE_KEY_JWT, verifyOpts)
    return token
}

export default {
    generateToken
}