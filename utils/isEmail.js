const isEmail = email => {
  let regexp = /\S+@\S+\.\S+/
  return regexp.test(email)
}

export default isEmail
