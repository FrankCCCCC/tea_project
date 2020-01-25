const ds = require('./dataStructure');
const {Pool, Client} = require('pg');
// import 'express';


const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "playdb",
    password: "0910shc",
    port: "5432",
})



async function query_test(){
    var q = await pool.query('SELECT * FROM posts', (err, res) => {
        console.log(err, res);
        // pool.end();
    });
}

async function create_slider(){
    var q = await pool.query(`CREATE TABLE IF NOT EXISTS slider0(
        id serial PRIMARY KEY NOT NULL,
        image TEXT NOT NULL,
        caption_title TEXT NOT NULL,
        caption_subtitle TEXT NOT NULL,
        create_on TIMESTAMP
    );`, (err, res) => {
        console.log(err, res);
        // pool.end();
    });
}

async function create_posts_table(){
    let q = await pool.query(`CREATE TABLE IF NOT EXISTS ${ds.dataStructure.post.table_name}(
        ${ds.dataStructure.post.id.schema},
        ${ds.dataStructure.post.title.schema},
        ${ds.dataStructure.post.subtitle.schema},
        ${ds.dataStructure.post.author.schema},
        ${ds.dataStructure.post.content.schema},
        ${ds.dataStructure.post.cover_img.schema},
        ${ds.dataStructure.post.create_on.schema},
        ${ds.dataStructure.post.latest_modify.schema}
    )`, (res, err) => {
        console.log(err, res);
    })
}

async function query_slider_data(count){
    if(typeof(count)  != "number"){return -1;}
    let row_counts = ""
    if(count == -1){
    }else{
        row_counts = "TOP " + count.toString();
    }
    var q = await pool.query(`
        SELECT ${row_counts} * FROM slider ORDER BY create_on ASC;
        `)
}

function query_posts_count_all(){
    return pool.query(`
    SELECT COUNT(*) FROM ${ds.dataStructure.post.table_name};
    `).then(resolve => {
        console.log(resolve)
        return resolve;
    }).catch(reject => {
        console.log("Error: ", reject)
        return reject
    });
}

function query_post_list(count, offset){
    if(typeof(count) != "number"){console.log("Error: query_post_list parameter count is not a number");}
    if(typeof(offset) != "number"){console.log("Error: query_post_list parameter offset is not a number");}

    let row_counts = ""
    let row_offset = ""
    if(count == -1){
    }else{
        row_counts = "LIMIT " + String(count);
    }

    if(offset == -1){
    }else{
        row_offset = "OFFSET " + String(offset);
    }
    // console.log("Command: ", `SELECT * FROM ${ds.dataStructure.post.table_name} ${row_counts};`)

    return pool.query(`
    SELECT * FROM ${ds.dataStructure.post.table_name} ORDER BY ${ds.dataStructure.post.latest_modify.key} DESC ${row_counts} ${row_offset};
    `).then(resolve => {
        // console.log(resolve)
        return resolve;
    }).catch(reject => {
        console.log("Error: ", reject)
        return reject
    });
}

async function insert_slider_data(img, caption_title, caption_subtitle){
    if(typeof(img) != 'string' || typeof(caption_title) != 'string' || typeof(caption_subtitle) != 'string'){return -1;}
    var q = await pool.query(`
        INSERT INTO slider0(image, caption_title, caption_subtitle) VALUES ('${String(img)}', '${String(caption_title)}', '${String(caption_subtitle)}');
    `);
}

function query_post(id){
    if(typeof(id) != "number"){return -1;}
    console.log(`SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = ${id}`)
    return pool.query(`
        SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = ${id}
    `).then(resolve => {
        // console.log(resolve)
        return resolve;
    }).catch(reject => {
        console.log("Error: ", reject)
        return reject;
    })
}

async function insert_post(title, subtitle, author, content, cover_img){
    if(typeof(title) != 'string' || typeof(title) != 'string' || typeof(subtitle) != 'string' || typeof(author) != 'string' || typeof(content) != 'string' || typeof(cover_img) != 'string'){return -1;}
    console.log(`
    INSERT INTO ${ds.dataStructure.post.table_name}(
        ${ds.dataStructure.post.title.key}, 
        ${ds.dataStructure.post.subtitle.key}, 
        ${ds.dataStructure.post.author.key}, 
        ${ds.dataStructure.post.content.key}, 
        ${ds.dataStructure.post.cover_img.key}) 
        VALUES('${title}', '${subtitle}', '${author}', '${content}', '${cover_img}');
`)
    return pool.query(`
        INSERT INTO ${ds.dataStructure.post.table_name}(
            ${ds.dataStructure.post.title.key}, 
            ${ds.dataStructure.post.subtitle.key}, 
            ${ds.dataStructure.post.author.key}, 
            ${ds.dataStructure.post.content.key}, 
            ${ds.dataStructure.post.cover_img.key}) 
            VALUES('${title}', '${subtitle}', '${author}', '${content}', '${cover_img}');
    `).then((resolve) => {
        console.log(resolve);
        return resolve;
    }).catch((reject) => {
        console.log("Error: ", reject);
        return reject;
    })
}

// query_test();
// create_slider();
// insert_slider_data('test.jpg', 'test_title', 'test_subtitle');
// create_posts_table();
// insert_posts('Test Title', 'Test Subtile', 'Test Author', '# Hi Test Post', 'child.jpg');
// query_posts(-1);

// console.log(ds.dataStructure.post.title)

// pool.end();

exports.pool = pool;
exports.query_posts_count_all = query_posts_count_all;
exports.query_post_list = query_post_list;
exports.query_post = query_post;
exports.insert_post = insert_post;