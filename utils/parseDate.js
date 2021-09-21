const parseDate = (raw_date) => {
  if (!raw_date) return
  const date = new Date(raw_date)

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export default parseDate
