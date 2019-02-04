require('dotenv').config()
const expect = require('chai').expect;
const newsDbService = require('./newsDbService.js');

// mocha -g saveArticle    -- it will run tests with saveArticle in `it` description

describe('NewsDbService', () => {
	it('saveArticle() should save an article successfully.', async () => {
		const article = { title: 'dummy title' };
		const articleSaved = await newsDbService.saveArticle(article);
		expect(articleSaved._id).to.not.be.empty;
	});
});

describe('newsDbService', () => {
	it('getArticles() should fetch news from mongodb.', async () => {
		const articles = await newsDbService.getArticles();
		expect(articles).to.have.length.greaterThan(0);
	});
});