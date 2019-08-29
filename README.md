**Assumptions**

1. Mongodb running at **mongodb://localhost:27017/graphqldb**

## Steps to run

[![Greenkeeper badge](https://badges.greenkeeper.io/siristechnology/nepaltoday-db-service.svg)](https://greenkeeper.io/)

1. npm install
2. download .env file from https://drive.google.com/drive/u/0/folders/1Y3xx-qzCzDxnxN1byfG5rtcBhHF1ObGr
3. add the downloaded .env file to root folder
4. jest --runInBand -t 'saveArticle() should save an article successfully' -- it will run tests with `saveArticle() should save an article successfully` in `it` description
5. don't checkin .env file

## Key points

1. Uses mongoose as ORM for mongodb
2. Mongoose schema at /src/database/mongooseSchema.js

## Most basic MongoDB commands (terminal)

- `show dbs` --to show all dbs
- `use nepaltodaydb` --to switch to nepaltodaydb
- `show collections` --to show all collections/tables
- `db.articles.find()` --to show all articles in the collection
- `db.articles.find({title: 'new title'})` --to show article/articles with title = 'new title'
- `db.articles.find({}, {title: 1})` --to show title field of all articles (no criteria)
- `db.articles.remove({})` --to remove all articles documents
- `db.articles.remove({title: 'new title'})` --to remove all articles with title = 'new title'
- `db.articles.update({_id:{$exists:true}}, { $set: {createdDate: '2019-01-01'}}, {multi: true})` --to update multiple articles with createdDate = '2019-01-01'
