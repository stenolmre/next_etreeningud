const generateLink = (data, blog) => {
  const slug = `?${data.slug}`
  if (data.category === 'jooga') return '/yoga/' + data._id + slug
  if (blog) return '/posts/' + data._id + slug
  return '/fitness/' + data._id + slug
}

export default generateLink
