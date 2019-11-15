const { User } = require('./database/mongooseSchema')
// const { getUsers } = require('./UserDbService')

describe('User Db service ', () => {
	it('get all user from db', async () => {
		jest.spyOn(User, 'find').mockImplementationOnce(() => {})
		// await getUsers()
		// expect(findSpy).toHaveReturned()
	})
})
