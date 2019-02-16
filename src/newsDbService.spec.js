require('dotenv').config()
const expect = require('chai').expect;
const newsDbService = require('./newsDbService.js');

// mocha -g saveArticle    -- it will run tests with saveArticle in `it` description

describe('NewsDbService', () => {
	it('saveArticle() should save an article successfully.', async () => {
		const article = { title: 'dummy title' };
		const articleSaved = await newsDbService.saveArticle(article);
		expect(articleSaved._id).to.not.be.empty;
		expect(articleSaved.createdDate).to.not.be.undefined;
		expect(articleSaved.modifiedDate).to.not.be.undefined;
	});

	it('saveArticle() should not save publishedDate by default.', async () => {
		const article = { title: 'dummy title' };
		const articleSaved = await newsDbService.saveArticle(article);
		expect(articleSaved.publishedDate).to.be.undefined;
	});

	it('saveArticle() should save given publishedDate.', async () => {
		const date1 = new Date(2013, 4, 30, 16, 5)
		const article = { title: 'dummy title', publishedDate: date1 };
		const articleSaved = await newsDbService.saveArticle(article);
		expect(articleSaved.publishedDate).to.equal(date1);
	});
});

describe('newsDbService', () => {
	it('getArticles() should fetch news from mongodb.', async () => {
		const articles = await newsDbService.getArticles();
		expect(articles).to.have.length.greaterThan(0);
	});
});