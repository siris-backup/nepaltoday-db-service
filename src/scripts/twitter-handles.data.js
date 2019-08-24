const { en } = require('../lang/en')
const { TwitterHandle } = require('../database/mongooseSchema')
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
;(async function () {
	try {
		const initialHandles = await getTwitterHandles()
		if (!initialHandles) {
			saveTwitterHandles(handles)
		}
		console.log('Handles already exist data are ==', initialHandles)
	} catch (error) {
		if (error.code === 11000 || error.code === 11001) {
			console.log('ignored duplicates')
		} else {
			console.log(error)
		}
	}
	return null
})()
