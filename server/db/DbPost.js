const ds = require('./dataStructure');
const Db = require('./Db')
const util = require('../util/Util')

function createPostsTable(){
    let command = `CREATE TABLE IF NOT EXISTS ${ds.dataStructure.post.table_name}(${ds.dataStructure.post.id.schema},${ds.dataStructure.post.title.schema},${ds.dataStructure.post.subtitle.schema},${ds.dataStructure.post.author.schema},${ds.dataStructure.post.content.schema},${ds.dataStructure.post.cover_img.schema},${ds.dataStructure.post.create_on.schema}, ${ds.dataStructure.post.latest_modify.schema})`;

    return Db.query(command)
}

function queryPostsCountAll(){
    let command = `SELECT COUNT(*) FROM ${ds.dataStructure.post.table_name};`;
    
    return Db.query(command)
}

function queryPostList(count, offset){
    util.checkInt(count)
    util.checkInt(offset)

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
    

    return Db.query(command)
}

function queryPost(id){
    util.checkInt(id)
    let command = `SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = '${Number(id)}';`
    
    return Db.query(command)
}

function insertPost(title, subtitle, author, content, cover_img){
    util.checkString(title)
    util.checkString(subtitle)
    util.checkString(author)
    util.checkString(content)
    util.checkString(cover_img)
    var content_new = content.replace(/'/g, `''`);
    let command = `INSERT INTO ${ds.dataStructure.post.table_name}(${ds.dataStructure.post.title.key}, ${ds.dataStructure.post.subtitle.key}, ${ds.dataStructure.post.author.key}, ${ds.dataStructure.post.content.key}, ${ds.dataStructure.post.cover_img.key}) VALUES('${title}', '${subtitle}', '${author}', '${util.shortStr(content_new)}', '${cover_img}') RETURNING ${ds.dataStructure.post.id.key};`
    
    return Db.query(command)
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

exports.createPostsTable = createPostsTable;
exports.queryPostsCountAll = queryPostsCountAll;
exports.queryPostList = queryPostList;
exports.queryPost = queryPost;
exports.insertPost = insertPost;