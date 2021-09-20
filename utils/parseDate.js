const parseDate = (raw_date) => {
  let date
  let parsedDate

  if (raw_date) date = new Date(raw_date)

  return parsedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export default parseDate
