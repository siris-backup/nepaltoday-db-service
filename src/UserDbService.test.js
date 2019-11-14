const userDbService = require('./userDbService.js')

require('dotenv').config()

describe('User Db service ', () => {
	it('get all user from db', async () => {
		const users = await userDbService.getUsers()

		expect(users).toBeDefined()
	})
})
