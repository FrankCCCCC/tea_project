const ds = require('../dataStructure');
const {Pool, Client} = require('pg');
const util = require('../util/Util');
const dbConfig = require('../config/dbConfig')

const pool = new Pool(dbConfig.config)

function createProducerType(){
    let command = `
    DO $$ BEGIN
        CREATE TYPE ${ds.dataStructure.Producer.type_name} AS (${ds.dataStructure.Producer.id.schema}, ${ds.dataStructure.Producer.name.schema});
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;`;
    util.log(command);
    return pool.query(command).then(
        (resolve) => {
            // console.log(resolve)
            util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
            return resolve;
        }
    ).catch(
        (reject) => {
            // console.log("Error: ", reject)
            util.log(`Error: ${reject}`)
            return reject;
        }
    )
}

function createSpecType(){
    let command = `
    DO $$ BEGIN
        CREATE TYPE ${ds.dataStructure.Spec.type_name} AS (${ds.dataStructure.Spec.property.schema}, ${ds.dataStructure.Spec.value.schema});
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;`;
    util.log(command);
    return pool.query(command).then(
        (resolve) => {
            // console.log(resolve)
            util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
            return resolve;
        }
    ).catch(
        (reject) => {
            // console.log("Error: ", reject)
            util.log(`Error: ${reject}`)
            return reject;
        }
    )
}

function createItemsTable(){
    let command = `
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
    ${ds.dataStructure.item.create_on.schema});`;
    util.log(command);
    return pool.query(command).then(
        (resolve) => {
            // console.log(resolve)
            util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
            return resolve;
        }
    ).catch(
        (reject) => {
            // console.log("Error: ", reject)
            util.log(`Error: ${reject}`)
            return reject;
        }
    );
}

function insertItem(name, producer, price, unit, description, spec, cover_img, imgs){
    var description_new = description.replace(/'/g, `''`);
    let command = `
INSERT INTO ${ds.dataStructure.item.table_name}(
${ds.dataStructure.item.name.key},
${ds.dataStructure.item.producer.key},
${ds.dataStructure.item.price.key},
${ds.dataStructure.item.unit.key},
${ds.dataStructure.item.description.key},
${ds.dataStructure.item.spec.key},
${ds.dataStructure.item.cover_img.key},
${ds.dataStructure.item.imgs.key})
VALUES('${name}', json_populate_record(null::Producer, '${JSON.stringify(producer)}'), '${price}', '${unit}', '${description_new}', json_populate_record(null::Spec, '${JSON.stringify(spec)}'), '${cover_img}', ARRAY(SELECT json_array_elements_text('${JSON.stringify(imgs)}'))) RETURNING id;`;
    console.log(command);

    return pool.query(command).then(
            (resolve) => {
                // console.log(resolve)
                util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount} return id = ${resolve.rows[0].id}`)
                return resolve;
            }
        ).catch(
            (reject) => {
                // console.log("Error: ", reject)
                util.log(`Error: ${reject}`)
                return reject;
            }
        );
}

function queryItemsCountAll(){
    let command = `SELECT COUNT(*) FROM ${ds.dataStructure.item.table_name};`;
    util.log(command)
    return pool.query(command).then(resolve => {
        // console.log(resolve)
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });
}

function queryItemById(itemId){
    // console.log(itemId)
    let command = `SELECT 
    ${ds.dataStructure.item.id.key},
    ${ds.dataStructure.item.name.key},
    row_to_json(${ds.dataStructure.item.producer.key}) AS ${ds.dataStructure.item.producer.key},
    ${ds.dataStructure.item.price.key},
    ${ds.dataStructure.item.unit.key},
    ${ds.dataStructure.item.description.key},
    row_to_json(${ds.dataStructure.item.spec.key}) AS ${ds.dataStructure.item.spec.key},
    ${ds.dataStructure.item.cover_img.key},
    array_to_json(${ds.dataStructure.item.imgs.key}) AS ${ds.dataStructure.item.imgs.key},
    ${ds.dataStructure.item.create_on.key} 
    FROM ${ds.dataStructure.item.table_name} WHERE ${ds.dataStructure.item.id.key} = '${Number(itemId)}';`;
    // console.log(command);

    return pool.query(command).then(
            (resolve) => {
                // console.log(resolve);
                util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
                return resolve;
            }
        ).catch(
            (reject) => {
                // console.log("Error: ", reject)
                util.log(`Error: ${reject}`)
                return reject;
            }
        );
}

function queryItemByName(itemName){
    let command = `SELECT 
    ${ds.dataStructure.item.id.key},
    ${ds.dataStructure.item.name.key},
    row_to_json(${ds.dataStructure.item.producer.key}) AS ${ds.dataStructure.item.producer.key},
    ${ds.dataStructure.item.price.key},
    ${ds.dataStructure.item.unit.key},
    ${ds.dataStructure.item.description.key},
    row_to_json(${ds.dataStructure.item.spec.key}) AS ${ds.dataStructure.item.spec.key},
    ${ds.dataStructure.item.cover_img.key},
    array_to_json(${ds.dataStructure.item.imgs.key}) AS ${ds.dataStructure.item.imgs.key},
    ${ds.dataStructure.item.create_on.key}
    FROM ${ds.dataStructure.item.table_name} WHERE ${ds.dataStructure.item.name.key} = '${String(itemName)}';`;
    // console.log(command);

    return pool.query(command).then(
            (resolve) => {
                util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
                return resolve;
            }
        ).catch(
            (reject) => {
                // console.log("Error: ", reject)
                util.log(`Error: ${reject}`)
                return reject;
            }
        );
}

function queryItemByProducerId(producerId){
    let command = `SELECT 
    ${ds.dataStructure.item.id.key},
    ${ds.dataStructure.item.name.key},
    row_to_json(${ds.dataStructure.item.producer.key}) AS ${ds.dataStructure.item.producer.key},
    ${ds.dataStructure.item.price.key},
    ${ds.dataStructure.item.unit.key},
    ${ds.dataStructure.item.description.key},
    row_to_json(${ds.dataStructure.item.spec.key}) AS ${ds.dataStructure.item.spec.key},
    ${ds.dataStructure.item.cover_img.key},
    array_to_json(${ds.dataStructure.item.imgs.key}) AS ${ds.dataStructure.item.imgs.key},
    ${ds.dataStructure.item.create_on.key} 
    FROM ${ds.dataStructure.item.table_name} WHERE (${ds.dataStructure.item.producer.key}).${ds.dataStructure.Producer.id.key} = '${Number(producerId)}';`;
    // console.log(command);

    return pool.query(command).then(
            (resolve) => {
                // console.log(resolve);
                util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
                return resolve;
            }
        ).catch(
            (reject) => {
                // console.log("Error: ", reject)
                util.log(`Error: ${reject}`)
                return reject;
            }
        );
}

function queryItemByProducerName(producerName){
    let command = `SELECT 
    ${ds.dataStructure.item.id.key},
    ${ds.dataStructure.item.name.key},
    row_to_json(${ds.dataStructure.item.producer.key}) AS ${ds.dataStructure.item.producer.key},
    ${ds.dataStructure.item.price.key},
    ${ds.dataStructure.item.unit.key},
    ${ds.dataStructure.item.description.key},
    row_to_json(${ds.dataStructure.item.spec.key}) AS ${ds.dataStructure.item.spec.key},
    ${ds.dataStructure.item.cover_img.key},
    array_to_json(${ds.dataStructure.item.imgs.key}) AS ${ds.dataStructure.item.imgs.key},
    ${ds.dataStructure.item.create_on.key} 
    FROM ${ds.dataStructure.item.table_name} WHERE (${ds.dataStructure.item.producer.key}).${ds.dataStructure.Producer.name.key} = '${String(producerName)}';`;
    // console.log(command);

    return pool.query(command).then(
            (resolve) => {
                // console.log(resolve);
                util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
                return resolve;
            }
        ).catch(
            (reject) => {
                // console.log("Error: ", reject)
                util.log(`Error: ${reject}`)
                return reject;
            }
        );
}

function queryItemList(count, offset){
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
    let command = `SELECT 
    ${ds.dataStructure.item.id.key}, 
    ${ds.dataStructure.item.name.key},
    row_to_json(${ds.dataStructure.item.producer.key}) AS ${ds.dataStructure.item.producer.key}, 
    ${ds.dataStructure.item.price.key}, 
    ${ds.dataStructure.item.unit.key},
    ${ds.dataStructure.item.description.key},
    row_to_json(${ds.dataStructure.item.spec.key}) AS ${ds.dataStructure.item.spec.key},
    ${ds.dataStructure.item.cover_img.key},
    array_to_json(${ds.dataStructure.item.imgs.key}) AS ${ds.dataStructure.item.imgs.key},
    ${ds.dataStructure.item.create_on.key}
    FROM ${ds.dataStructure.item.table_name} AS ${ds.dataStructure.item.table_name} ORDER BY ${ds.dataStructure.item.create_on.key} DESC ${row_counts} ${row_offset};`
    util.log(command)

    return pool.query(command).then(resolve => {
        // console.log(resolve)
        util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
        return resolve;
    }).catch(reject => {
        util.log(`Error: ${reject}`)
        return reject
    });
}

// createProducerType();
// createSpecType();
// createItemsTable();
// insertItem("Green Tea", {id: 3, name: "Lin"}, 500, "NTD", "# Traditional Flavor", {property: "100g", value: "Heavily Baked", comment: "Strongest"}, "farmer1.jpg", ['hill1.jpg', 'tea.jpg', 'child.jpg'])
// queryItemsCountAll();
// queryItemById('1');
// queryItemByName(`1=1`);
// queryItemByProducerId(2);
// queryItemByProducerName('dai');
// queryItemList(3,2);

exports.createProducerType = createProducerType;
exports.createSpecType = createSpecType;
exports.createItemsTable = createItemsTable;
exports.insertItem = insertItem;
exports.queryItemsCountAll = queryItemsCountAll;
exports.queryItemById = queryItemById;
exports.queryItemByName = queryItemByName;
exports.queryItemByProducerId = queryItemByProducerId;
exports.queryItemByProducerName = queryItemByProducerName;
exports.queryItemList = queryItemList;

// DO $$ BEGIN
//     CREATE TYPE Good AS (id INTEGER, name TEXT);
// EXCEPTION
//     WHEN duplicate_object THEN null;
// END $$;