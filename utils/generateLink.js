const generateLink = (data, blog) => {
  if (data.category === 'jooga') return window.location.origin + '/yoga/' + data._id
  if (blog) return '/posts/' + data._id
  return '/fitness/' + data._id
}

export default generateLink
