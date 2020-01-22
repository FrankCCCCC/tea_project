const {Pool, Client} = require('pg');
// import 'express';

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "playdb",
    password: "0910shc",
    port: "5432",
})

const config = {
    config:{
        fb_link: "fb_link TEXT",
        ig_link: "ig_link TEXT",

    },
    post: {
        id: {key: "id", schema: "id serial PRIMARY KEY NOT NULL"},
        title: {key: "title", schema: "title TEXT NOT NULL"},
        subtitle: {key: "subtitle", schema: "subtitle TEXT NOT NULL"},
        author: {key: "author", schema:"author TEXT NOT NULL"},
        content: {key: "content", schema: "content TEXT NOT NULL"},
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"},
        latest_modify: {key: "latest_modify", schema: "latest_modify TIMESTAMP default current_timestamp"},
        cover_img: {key: "cover_img", schema: "cover_img TEXT"}
    },
    farmer: {
        id: {key: "id", schema: "id serial PROMARY KEY NOT NULL"},
        name: {key: "name", schema: "name TEXT NOT NULL"},
        country: {key: "country", schema: "country TEXT NOT NULL"},
        province: {key: "province", schema: "province TEXT NOT NULL"},
        county: {key: "county", schema: "county TEXT NOT NULL"},
        township: {key: "township", schema: "township TEXT NOT NULL"},
        village: {key: "village", schema: "village TEXT NOT NULL"},
        road: {key: "road", schema: "road TEXT NOT NULL"},
        description: {key: "description", schema: "TEXT NOT NULL"},
        item: {key: "item", schema: "item item ARRAY"},
        cover_img: {key: "cover_img", schema: "cover_img TEXT NOT NULL"},
        img: {key: "img", schema: "img TEXT ARRAY"},
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"}
    },
    item: {
        name: {key: "name", schema: "name TEXT NOT NULL"},
        price: {key: "price", schema: "price TEXT NOT NULL"},
        options: {key: "options", schema: "options TEXT ARRAY"},
        description: {key: "description", schema: "description"}
    },
    section: {
        title: "title TEXT",
        text: "text TEXT",
        img: "img TEXT"
    },
    img: {
        name: "name TEXT NOT NULL",
        caption_title: "caption_title TEXT",
        caption_subtitle: "",
        caption_description: ""
    }
}

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
    let q = await pool.query(`CREATE TABLE IF NOT EXISTS posts_table(
        ${config.post.id.schema},
        ${config.post.title.schema},
        ${config.post.subtitle.schema},
        ${config.post.author.schema},
        ${config.post.content.schema},
        ${config.post.cover_img.schema},
        ${config.post.create_on.schema},
        ${config.post.latest_modify.schema}
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

async function query_posts(count){
    if(typeof(count) != "number"){return -1;}
    let row_counts = ""
    if(count == -1){
    }else{
        row_counts = "TOP " + count.toString();
    }
    var q = await pool.query(`
        SELECT ${row_counts} * FROM posts_table;
    `, (res, err) => {
        console.log(res, err);
    })
}

async function insert_slider_data(img, caption_title, caption_subtitle){
    if(typeof(img) != 'string' || typeof(caption_title) != 'string' || typeof(caption_subtitle) != 'string'){return -1;}
    var q = await pool.query(`
        INSERT INTO slider0(image, caption_title, caption_subtitle) VALUES ('${img}', '${caption_title}', '${caption_subtitle}');
    `);
}

async function insert_posts(title, subtitle, author, content, cover_img){
    if(typeof(title) != 'string' || typeof(title) != 'string' || typeof(subtitle) != 'string' || typeof(author) != 'string' || typeof(content) != 'string' || typeof(cover_img) != 'string'){return -1;}
    var q = await pool.query(`
        INSERT INTO posts_table(title, subtitle, author, content, cover_img) VALUES('${title}', '${subtitle}', '${author}', '${content}', '${cover_img}');
    `, (res, err) => {
        console.log(res, err);
    })
}

// query_test();
// create_slider();
// insert_slider_data('test.jpg', 'test_title', 'test_subtitle');
// create_posts_table();
// insert_posts('Test Title', 'Test Subtile', 'Test Author', '# Hi Test Post', 'child.jpg');
query_posts(-1);

pool.end();