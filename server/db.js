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

function create_farmers_items_table(){
    var farmers_table = pool.query(`
        CREATE TABLE IF NOT EXISTS ${ds.dataStructure.farmer.table_name}(
        ${ds.dataStructure.farmer.id.schema},
        ${ds.dataStructure.farmer.name.schema},
        ${ds.dataStructure.farmer.country.schema},
        ${ds.dataStructure.farmer.province.schema},
        ${ds.dataStructure.farmer.county.schema},
        ${ds.dataStructure.farmer.township.schema},
        ${ds.dataStructure.farmer.village.schema},
        ${ds.dataStructure.farmer.road.schema},
        ${ds.dataStructure.farmer.description.schema},
        ${ds.dataStructure.farmer.items.schema},
        ${ds.dataStructure.farmer.cover_img.schema},
        ${ds.dataStructure.farmer.imgs.schema},
        ${ds.dataStructure.farmer.create_on.schema}
    )`).then(resolve => {
        console.log(resolve)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });

    var items_table = pool.query(`
        CREATE TABLE IF NOT EXISTS ${ds.dataStructure.item.table_name}(
        ${ds.dataStructure.item.id.schema},
        ${ds.dataStructure.item.name.schema},
        ${ds.dataStructure.item.producer.schema},
        ${ds.dataStructure.item.price.schema},
        ${ds.dataStructure.item.unit.schema},
        ${ds.dataStructure.item.description.schema},
        ${ds.dataStructure.item.spec.schema},
        ${ds.dataStructure.item.cover_img.schema},
        ${ds.dataStructure.item.imgs.schema},
        ${ds.dataStructure.item.create_on.schema}
    )`).then(resolve => {
        console.log(resolve)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });

    return Promise.all([farmers_table, items_table])
}

function query_farmer(id){
    if(typeof(id) != "number"){console.log("Error: query_farmer parameter id is not a number");}
    console.log(`SELECT * FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.farmer.id.key} = ${Number(id)}`)
    return pool.query(`
        SELECT * FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.farmer.id.key} = ${Number(id)}
    `).then(resolve => {
        // console.log(resolve)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject;
    })
}

function query_farmer_list(count, offset){
    if(typeof(count) != "number"){console.log("Error: query_farmer_list parameter count is not a number");}
    if(typeof(offset) != "number"){console.log("Error: query_farmer_list parameter offset is not a number");}

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
    console.log("Command: ", `SELECT * FROM ${ds.dataStructure.farmer.table_name} ORDER BY ${ds.dataStructure.farmer.latest_modify.key} DESC ${row_counts} ${row_offset};`);

    return pool.query(`
    SELECT * FROM ${ds.dataStructure.farmer.table_name} ORDER BY ${ds.dataStructure.farmer.latest_modify.key} DESC ${row_counts} ${row_offset};
    `).then(resolve => {
        // console.log(resolve)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });
}

function insert_item(name, producer, price, unit, description, spec, cover_img, imgs){
    var description_new = description.replace(/'/g, `''`);
    console.log(`
    INSERT INTO ${ds.dataStructure.farmer.table_name}(
        ${ds.dataStructure.farmer.name.key},
        ${ds.dataStructure.farmer.producer.key},
        ${ds.dataStructure.farmer.price.key},
        ${ds.dataStructure.farmer.county.key},
        ${ds.dataStructure.farmer.unit.key},
        ${ds.dataStructure.farmer.village.key},
        ${ds.dataStructure.farmer.description.key},
        ${ds.dataStructure.farmer.spec.key},
        ${ds.dataStructure.farmer.items.key},
        ${ds.dataStructure.farmer.cover_img.key},
        ${ds.dataStructure.farmer.imgs.key})
        VALUES('${name}', '${producer}', '${price}', '${unit}', '${description}', '${spec}', '${description_new}', '${cover_img}', '${JSON.stringify(imgs)}') RETURNING ${ds.dataStructure.farmer.id.key};
    `);

    return pool.query(`
        INSERT INTO ${ds.dataStructure.farmer.table_name}(
            ${ds.dataStructure.farmer.name.key},
            ${ds.dataStructure.farmer.producer.key},
            ${ds.dataStructure.farmer.price.key},
            ${ds.dataStructure.farmer.county.key},
            ${ds.dataStructure.farmer.unit.key},
            ${ds.dataStructure.farmer.village.key},
            ${ds.dataStructure.farmer.description.key},
            ${ds.dataStructure.farmer.spec.key},
            ${ds.dataStructure.farmer.items.key},
            ${ds.dataStructure.farmer.cover_img.key},
            ${ds.dataStructure.farmer.imgs.key})
            VALUES('${name}', '${producer}', '${price}', '${unit}', '${description}', '${spec}', '${description_new}', '${cover_img}', '${JSON.stringify(imgs)}') RETURNING ${ds.dataStructure.farmer.id.key};
        `).then(
            (resolve) => {
                console.log(resolve)
                return resolve;
            }
        ).catch(
            (reject) => {
                util.log(`Error: ${reject}`)
                return reject;
            }
        )
}

function insert_farmer(name, country, province, county, township, village, road, slogan, description, content, items, cover_img, imgs) {
    if(typeof(name) != 'string' || 
        typeof(country) != 'string' || 
        typeof(province) != 'string' || 
        typeof(county) != 'string' || 
        typeof(township) != 'string' || 
        typeof(village) != 'string' || 
        typeof(road) != 'string' || 
        typeof(slogan) != 'string' || 
        typeof(description) != 'string' || 
        typeof(content) != 'string' || 
        typeof(items) != 'string' || 
        typeof(cover_img) != 'string' ||
        typeof(imgs) != 'string'){
            console.log("Error: insert_farmer parameter is not a number");
    }
    var description_new = description.replace(/'/g, `''`);
    console.log(`
    INSERT INTO ${ds.dataStructure.farmer.table_name}(
        ${ds.dataStructure.farmer.name.key},
        ${ds.dataStructure.farmer.country.key},
        ${ds.dataStructure.farmer.province.key},
        ${ds.dataStructure.farmer.county.key},
        ${ds.dataStructure.farmer.township.key},
        ${ds.dataStructure.farmer.village.key},
        ${ds.dataStructure.farmer.road.key},
        ${ds.dataStructure.farmer.description.key},
        ${ds.dataStructure.farmer.items.key},
        ${ds.dataStructure.farmer.cover_img.key},
        ${ds.dataStructure.farmer.imgs.key})
        VALUES('${name}', '${country}', '${province}', '${country}', '${township}', '${village}', '${road}', '${description_new}', '${JSON.stringify(itemsId)}', '${cover_img}', '${JSON.stringify(imgs)}') RETURNING ${ds.dataStructure.farmer.id.key};
    `);
    return pool.query(`
        INSERT INTO ${ds.dataStructure.farmer.table_name}(
            ${ds.dataStructure.farmer.name.key},
            ${ds.dataStructure.farmer.country.key},
            ${ds.dataStructure.farmer.province.key},
            ${ds.dataStructure.farmer.county.key},
            ${ds.dataStructure.farmer.township.key},
            ${ds.dataStructure.farmer.village.key},
            ${ds.dataStructure.farmer.road.key},
            ${ds.dataStructure.farmer.description.key},
            ${ds.dataStructure.farmer.items.key},
            ${ds.dataStructure.farmer.cover_img.key},
            ${ds.dataStructure.farmer.imgs.key})
            VALUES('${name}', '${country}', '${province}', '${country}', '${township}', '${village}', '${road}', '${description_new}', '${JSON.stringify(items)}', '${cover_img}', '${JSON.stringify(imgs)}') RETURNING ${ds.dataStructure.farmer.id.key};
    `).then((resolve) => {
        console.log(resolve);
        return resolve;
    }).catch((reject) => {
        util.log(`Error: ${reject}`);
        return reject;
    })
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

function query_posts_count_all(){
    return pool.query(`
    SELECT COUNT(*) FROM ${ds.dataStructure.post.table_name};
    `).then(resolve => {
        console.log(resolve)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
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
        util.log(`Error: ${reject}`)
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
    if(typeof(id) != "number"){console.log("Error: query_post parameter id is not a number");}
    console.log(`SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = ${id}`)
    return pool.query(`
        SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = ${id}
    `).then(resolve => {
        // console.log(resolve)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject;
    })
}

function insert_post(title, subtitle, author, content, cover_img){
    if(typeof(title) != 'string' || typeof(title) != 'string' || typeof(subtitle) != 'string' || typeof(author) != 'string' || typeof(content) != 'string' || typeof(cover_img) != 'string'){return -1;}
    var content_new = content.replace(/'/g, `''`);
    console.log(`
    INSERT INTO ${ds.dataStructure.post.table_name}(
        ${ds.dataStructure.post.title.key}, 
        ${ds.dataStructure.post.subtitle.key}, 
        ${ds.dataStructure.post.author.key}, 
        ${ds.dataStructure.post.content.key}, 
        ${ds.dataStructure.post.cover_img.key}) 
        VALUES('${title}', '${subtitle}', '${author}', '${content_new}', '${cover_img}') RETURNING ${ds.dataStructure.post.id.key};
    `);
    return pool.query(`
        INSERT INTO ${ds.dataStructure.post.table_name}(
            ${ds.dataStructure.post.title.key}, 
            ${ds.dataStructure.post.subtitle.key}, 
            ${ds.dataStructure.post.author.key}, 
            ${ds.dataStructure.post.content.key}, 
            ${ds.dataStructure.post.cover_img.key}) 
            VALUES('${title}', '${subtitle}', '${author}', '${content_new}', '${cover_img}') RETURNING ${ds.dataStructure.post.id.key};
    `).then((resolve) => {
        console.log(resolve);
        return resolve;
    }).catch((reject) => {
        util.log(`Error: ${reject}`);
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