const { User } = require('./database/mongooseSchema')
// const { getUsers } = require('./UserDbService')
// const mongoose = require('mongoose')

describe('User Db service ', () => {
	it('get all user from db', async () => {
		jest.spyOn(User, 'find').mockImplementationOnce(() => {})
		// const leanSpy = jest.spyOn(mongoose, 'lean').mockImplementationOnce(() => {})
		// expect(leanSpy).toHaveBeenCalled()
		// await getUsers()
		// expect(findSpy).toHaveReturned()
	})
})
