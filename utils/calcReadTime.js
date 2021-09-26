const calcReadTime = text => {
	const wordsPerMin = 200
	const wordsInText = text.split(' ').length

	if (wordsInText > 0) return `${Math.ceil(wordsInText / wordsPerMin)} min read`
	return null
}

export default calcReadTime
