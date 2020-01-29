const ds = require('../dataStructure');
const {Pool, Client} = require('pg');
const dbConfig = require('../config/dbConfig')
const util = require('../util/Util')
// import 'express';


const pool = new Pool(dbConfig.config);

function createPostsTable(){
    let command = `CREATE TABLE IF NOT EXISTS ${ds.dataStructure.post.table_name}(${ds.dataStructure.post.id.schema},${ds.dataStructure.post.title.schema},${ds.dataStructure.post.subtitle.schema},${ds.dataStructure.post.author.schema},${ds.dataStructure.post.content.schema},${ds.dataStructure.post.cover_img.schema},${ds.dataStructure.post.create_on.schema}, ${ds.dataStructure.post.latest_modify.schema})`;
    util.log(command);

    return pool.query(command).then(
        (resolve) => {
            util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
            return resolve;
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            return reject;
        }
    )
}

function queryPostsCountAll(){
    let command = `SELECT COUNT(*) FROM ${ds.dataStructure.post.table_name};`;
    util.log(command)
    return pool.query(command).then(resolve => {
        // console.log(resolve)
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}, post count: ${resolve.rows[0].count}`)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });
}

function queryPostList(count, offset){
    if(typeof(count) != "number"){util.log("Error: query_post_list parameter count is not a number");}
    if(typeof(offset) != "number"){util.log("Error: query_post_list parameter offset is not a number");}

    let row_counts = ""
    let row_offset = ""
    if(count == -1){
    }else{
        row_counts = "LIMIT " + String(count);
    }

    if(offset < 0){
    }else{
        row_offset = "OFFSET " + String(offset);
    }
    let command = `SELECT * FROM ${ds.dataStructure.post.table_name} ORDER BY ${ds.dataStructure.post.latest_modify.key} DESC ${row_counts} ${row_offset};`
    util.log(command)

    return pool.query(command).then(resolve => {
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });
}

function queryPost(id){
    if(typeof(id) != "number"){util.log("Error: query_post parameter id is not a number");}
    let command = `SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = '${Number(id)}';`
    util.log(command)
    return pool.query(command).then(resolve => {
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject;
    })
}

function insertPost(title, subtitle, author, content, cover_img){
    if(typeof(title) != 'string' || typeof(title) != 'string' || typeof(subtitle) != 'string' || typeof(author) != 'string' || typeof(content) != 'string' || typeof(cover_img) != 'string'){return -1;}
    var content_new = content.replace(/'/g, `''`);
    let command = `INSERT INTO ${ds.dataStructure.post.table_name}(${ds.dataStructure.post.title.key}, ${ds.dataStructure.post.subtitle.key}, ${ds.dataStructure.post.author.key}, ${ds.dataStructure.post.content.key}, ${ds.dataStructure.post.cover_img.key}) VALUES('${title}', '${subtitle}', '${author}', '${util.shortStr(content_new)}', '${cover_img}') RETURNING ${ds.dataStructure.post.id.key};`
    util.log(command);
    return pool.query(command).then((resolve) => {
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        return resolve;
    }).catch((reject) => {
        util.log(`Error: ${reject}`)
        return reject;
    })
}

// query_test();
// create_slider();
// insert_slider_data('test.jpg', 'test_title', 'test_subtitle');
// create_posts_table();
// insert_posts('Test Title', 'Test Subtile', 'Test Author', '# Hi Test Post', 'child.jpg');
// query_posts(-1);

// util.log(ds.dataStructure.post.title)
// queryPostsCountAll()

// pool.end();

exports.pool = pool;
exports.createPostsTable = createPostsTable;
exports.queryPostsCountAll = queryPostsCountAll;
exports.queryPostList = queryPostList;
exports.queryPost = queryPost;
exports.insertPost = insertPost;