const parseDate = raw_date => {
  if (!raw_date) throw new Error('Pass in valid date to parse')
  const date = new Date(raw_date)

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export default parseDate
