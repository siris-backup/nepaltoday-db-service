const { en } = require('../lang/en')
const { getTwitterHandles, saveTwitterHandles } = require('../TweetDbService')

/* eslint-disable no-undef */
const { TECH } = en.category
const handles = [
	{
		name: 'Shrjan',
		handle: '@itsmeshrijan',
		category: TECH,
		weight: 20
	}
]

const insertTwitterHandles = async () => {
	try {
		const initialHandles = await getTwitterHandles()
		if (!initialHandles) {
			const savedHandles = await saveTwitterHandles(handles)
			console.log('saved handles', savedHandles)
		} else {
			console.log('Handles already exist data are ==', initialHandles)
		}
	} catch (error) {
		if (error.code === 11000 || error.code === 11001) {
			console.log('ignored duplicates')
		} else {
			console.log(error)
		}
	}
	return null
}

Promise.all([insertTwitterHandles()])
	.then(result => {
		console.log('Printing result', result);
	}).catch(reason => {
		console.log('Printing reason', reason);
	})
