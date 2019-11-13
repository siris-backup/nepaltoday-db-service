const { User } = require("./database/mongooseSchema");

module.exports = {
  getUsers: async () => {
    return await User.find();
  }
};
