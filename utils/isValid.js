import isEmail from '@utils/isEmail'
import isURL from '@utils/isURL'
import isImage from '@utils/isImage'

const isValid = (setErrors, data) => {
  if (typeof data !== 'object') throw new Error('Second parameter must be an object.')
  
  let errors = {}
  let is_valid = true
  
  Object.entries(data).forEach(([key, value]) => {
    if (key === 'email' && !isEmail(value)) {
      is_valid = false
      errors[key] = `${key[0].toUpperCase() + key.slice(1).toLowerCase()} is required.`
      return
    }
    
    if (key === 'password' && value.length < 6) {
      is_valid = false
      errors[key] = `${key[0].toUpperCase() + key.slice(1).toLowerCase()} is required and must be longer than 6 chars.`
      return
    }
    
    if (key === 'image' && (!isURL(value) || !isImage(value))) {
      is_valid = false
      errors[key] = `${key[0].toUpperCase() + key.slice(1).toLowerCase()} is required and it must be URL with an ending of |jpeg jpg gif png|.`
      return
    }
    
    if (value == null || value === '') {
      is_valid = false
      errors[key] = `${key[0].toUpperCase() + key.slice(1).toLowerCase()} is required.`
      return
    }
    
    return
  })
  
  setErrors(errors)
  return is_valid
}

export default isValid
