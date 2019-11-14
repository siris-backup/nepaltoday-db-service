const { User } = require('./database/mongooseSchema')

describe('User Db service ', () => {
	it('get all user from db', async () => {
		jest.spyOn(User, 'find').mockImplementation(() => {})
	})
})
