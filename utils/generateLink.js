const generateLink = (data, blog) => {
  const slug = `?${data.slug}`
  if (data.category === 'jooga') return 'https://www.youtube.com/watch?v=' + data.video
  if (blog) return '/posts/' + data._id + slug
  return '/fitness/' + data._id + slug
}

export default generateLink
