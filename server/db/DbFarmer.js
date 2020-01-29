const ds = require('../dataStructure');
const {Pool, Client} = require('pg');
const util = require('../util/Util');
const dbConfig = require('../config/dbConfig')

const pool = new Pool(dbConfig.config);

function createGoodType(){
    let command = `DO $$ BEGIN
        CREATE TYPE ${ds.dataStructure.Good.type_name} AS (${ds.dataStructure.Good.id.schema}, ${ds.dataStructure.Good.name.schema});
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;`;
    util.log(command)

    return pool.query(command).then(
        (resolve) => {
            // console.log(resolve)
            util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            return reject;
        }
    )
}

function createFarmersTable(){
    let command = `CREATE TABLE IF NOT EXISTS ${ds.dataStructure.farmer.table_name}(
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
    ${ds.dataStructure.farmer.create_on.schema})`;

    util.log(command)
    return pool.query(command).then(resolve => {
        // console.log(resolve)
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        return resolve;
    }).catch(reject => {
        console.log("Error: ", reject)
        return reject
    });
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
        console.log("Error: ", reject)
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
        console.log("Error: ", reject)
        return reject
    });
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
        console.log("Error: ", reject);
        return reject;
    })
}

createGoodType()
createFarmersTable()

exports.insert_farmer = insert_farmer;
exports.query_farmer = query_farmer;
exports.query_farmer_list = query_farmer_list;