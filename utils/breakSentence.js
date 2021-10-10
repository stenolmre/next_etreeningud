const breakSentence = string => {
  if (!string || string == null) throw new Error('Could not break sentence due to sentence not found')

  const words = string.split(' ')

  if (words.length <= 5) return { __html: `${ words.join(' ') }` }

  words.splice(3, 0, '<br/>')
  return { __html: `${ words.join(' ') }` }
}

export default breakSentence
