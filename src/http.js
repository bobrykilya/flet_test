const getDataAPI = async (sourceName, limit) => {
	try {
		return await fetch(`https://jsonplaceholder.typicode.com/${sourceName}${limit ? '/?_limit=' + limit : ''}`).then(res => res.json())
	} catch (err) {
		throw new Error(err)
	}
}

export {
	getDataAPI,
}