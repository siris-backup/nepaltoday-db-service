require('dotenv').config()
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const newsDbService = require('./newsDbService.js')

// mocha -g saveArticle    -- it will run tests with saveArticle in `it` description

describe('NewsDbService', () => {
	it('saveArticle() should save an article successfully.', async () => {
		const article = { title: 'dummy title' };
		const articlesSaved = await newsDbService.saveArticles([article]);

		expect(articlesSaved[0]._id).to.not.be.empty;
		expect(articlesSaved[0].createdDate).to.not.be.undefined;
		expect(articlesSaved[0].modifiedDate).to.not.be.undefined;
	});

	it('saveArticle() should not save publishedDate by default.', async () => {
		const article = { title: 'dummy title' };
		const articlesSaved = await newsDbService.saveArticles([article]);
		expect(articlesSaved[0].publishedDate).to.be.undefined;
	});

	it('saveArticle() should save given publishedDate.', async () => {
		const date1 = new Date(2013, 4, 30, 16, 5)
		const article = { title: 'dummy title', publishedDate: date1 };
		const articlesSaved = await newsDbService.saveArticles([article]);

		expect(articlesSaved[0].publishedDate).to.equal(date1);
	});

	it('saveArticles() should save source too.', async () => {
		const date1 = new Date(2013, 4, 30, 16, 5)
		const sources = await newsDbService.getAllSources()
		const article = { title: 'dummy title', publishedDate: date1, source: sources[0]._id };
		const articlesSaved = await newsDbService.saveArticles([article]);

		expect(articlesSaved[0].source._id).to.equal(sources[0]._id);
	});

	it('saveArticles() should save multile sources', async () => {
		const article1 = { title: 'dummy title' };
		const article2 = { title: 'dummy title 2' };
		const articlesSaved = await newsDbService.saveArticles([article1, article2]);

		expect(articlesSaved[1]).to.not.be.undefined
	})
});

describe('newsDbService', () => {
	it('getArticles() should fetch news from mongodb.', async () => {
		const articles = await newsDbService.getArticles();
		expect(articles).to.have.length.greaterThan(0);
	});
});

describe('newsDbService', () => {
	it('getAllSources() should all sources.', async () => {
		const sources = await newsDbService.getAllSources()
		expect(sources).to.have.length.greaterThan(1);
	});
});
