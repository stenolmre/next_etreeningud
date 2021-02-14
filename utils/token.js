import jwt from 'jsonwebtoken'

export default function (id) {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '30d' })
}
