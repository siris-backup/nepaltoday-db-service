const mongoose = require("mongoose");
const {
  Article,
  Source,
  TwitterHandlers
} = require("./database/mongooseSchema");

mongoose.promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

module.exports = {
  // articles
  saveArticles: async articles => {
    var articlesSaved = null;
    try {
      await Article.insertMany(articles, { ordered: false });
    } catch (error) {
      if (error.code === 11000 || error.code === 11001) {
        console.log("ignored duplicates");
      } else {
        console.log(error);
      }
    }
    return articlesSaved;
  },
  getArticles: async () => {
    const newsArticles = await Article.find();
    return newsArticles;
  },
  // save Tweeter handler
  saveTwitterHandler: async handlers => {
    var twitterHandlerSaved = null;
    try {
      await TwitterHandlers.insertMany(handlers, { ordered: false });
    } catch (error) {
      if (error.code === 11000 || error.code === 11001) {
        console.log("ignored duplicates");
      } else {
        console.log(error);
      }
    }
    return twitterHandlerSaved;
  },
  getTweeterHandlers: async () => {
    const tweeterHandlers = await TwitterHandlers.find();
    return tweeterHandlers;
  },

  // sources
  getAllSources: async () => {
    const sources = await Source.find();
    return sources;
  },
  // if link exist
  isExist: async newslink => {
    const count = await Article.count({ link: newslink });
    return count > 0;
  }
};
