const { en } = require('../lang/en')
const { TwitterHandle } = require('../database/mongooseSchema')

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

function insertInitialHandles () {
	try {
		const initialHandles = TwitterHandle.find()
		if (!initialHandles) {
			TwitterHandle.insertMany(handles, { ordered: false })
		}
		console.log('Handles already exist')
	} catch (error) {
		if (error.code === 11000 || error.code === 11001) {
			console.log('ignored duplicates')
		} else {
			console.log(error)
		}
	}
	return null
}

insertInitialHandles()
