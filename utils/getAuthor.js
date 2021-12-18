const getAuthor = (data, writers = []) => {
  const author = data.trainer || data.writer
  if (!writers.length || writers == null || writers.find(writer => writer.slug === author) == null) {
    return {
      name: null,
      image: null,
      social: null
    }
  } else {
    const writer = writers.find(writer => writer.slug === author)
    return {
      name: writer.name,
      image: writer.image,
      social: writer.social
    }
  }
}

export default getAuthor
