const should = require('should')
const DbPost = require('../db/DbPost');

var allPostCount = 0;

describe('DbPost.createPostTable', () => {
    it('should create posts_table', done => {
        DbPost.createPostsTable().then((resolve) => {
            resolve.command.should.equal('CREATE')
            done()
        })
    })
})

describe('DbPost.queryPostsCountAll', () => {
    it('should count all posts in posts_table', done => {
        DbPost.queryPostsCountAll().then((resolve) => {
            allPostCount = parseInt(resolve.rows[0].count);
            console.log(`All Post Count: ${allPostCount}`)
            resolve.command.should.equal('SELECT')
            done()
        })
    })
})



describe('DbPost.queryPostList', () => {
    it(`should list posts in posts_table count=3, offset=2, ${allPostCount}`, done => {
        DbPost.queryPostList(3, 2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allPostCount - 2)
            resolve.rowCount.should.equal(3)
            done()
        })
    })
    it(`should list all posts in posts_table count=-1, offset=0, ${allPostCount}`, done => {
        DbPost.queryPostList(-1, 0).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allPostCount)
            resolve.rowCount.should.equal(allPostCount)
            done()
        })
    })
    it(`should list all posts in posts_table count=-1, offset=-2, ${allPostCount}`, done => {
        DbPost.queryPostList(-1, -1).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allPostCount)
            resolve.rowCount.should.equal(allPostCount)
            done()
        })
    })
})

describe('DbPost.queryPost', () => {
    it(`should query post in posts_table id=2`, done => {
        DbPost.queryPost(2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rowCount.should.equal(1)
            resolve.rows[0].id.should.equal(2)
            done()
        })
    })
})