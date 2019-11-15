const { Notification } = require('./database/mongooseSchema')

module.exports = {
	saveNotifications: async notifications => {
		try {
			const savedNotificationLogs = await Notification.insertMany(notifications, {
				ordered: false
			})
			return savedNotificationLogs
		} catch (error) {
			if (error.code === 11000 || error.code === 11001) {
				console.log('________ignored duplicates________')
			} else {
				console.log(error)
			}
			return error
		}
	},
	getNotification: async date => {
		const notificationHistory = await Notification.find({
			createdAt: {
				$gte: date
			}
		})
		return notificationHistory
	},
	deleteNotification: async conditions => {
		const deletedNotifications = await Notification.deleteMany(conditions)
		return deletedNotifications
	}
}
