const ds = require('../dataStructure');
const {Pool, Client} = require('pg');
const Util = require('../util/Util');
const dbConfig = require('../config/dbConfig')
const Db = require('./Db')

const pool = new Pool(dbConfig.config);

function dbQuery(command){
    util.log(command)
    return pool.query(command).then(
        (resolve) => {
            util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
            return resolve
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            return reject;
        }
    )
}

function createGoodType(){
    let command = `DO $$ BEGIN
        CREATE TYPE ${ds.dataStructure.Good.type_name} AS (${ds.dataStructure.Good.id.schema}, ${ds.dataStructure.Good.name.schema});
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;`;

    return Db.query(command)
    // util.log(command)
    // return pool.query(command).then(
    //     (resolve) => {
    //         // console.log(resolve)
    //         util.log(`command: ${resolve.command}, rowCount: ${resolve.rowCount}`)
    //     }
    // ).catch(
    //     (reject) => {
    //         util.log(`Error: ${reject}`)
    //         return reject;
    //     }
    // )
}

function createSectionType(){
    let command = `DO $$ BEGIN
        CREATE TYPE ${ds.dataStructure.Section.type_name} AS (${ds.dataStructure.Section.title.schema}, ${ds.dataStructure.Section.subtitle.schema}, ${ds.dataStructure.Section.description.schema}, ${ds.dataStructure.Section.img.schema});
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;`

    return Db.query(command)
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
    ${ds.dataStructure.farmer.slogan.schema},
    ${ds.dataStructure.farmer.description.schema},
    ${ds.dataStructure.farmer.content.schema},
    ${ds.dataStructure.farmer.items.schema},
    ${ds.dataStructure.farmer.cover_img.schema},
    ${ds.dataStructure.farmer.imgs.schema},
    ${ds.dataStructure.farmer.create_on.schema},
    ${ds.dataStructure.farmer.latest_modify.schema})`;

    return Db.query(command)
}

function queryFarmerById(farmerId){
    if(typeof(farmerId) != "number"){
        util.log("Error: queryFarmerById parameter farmerId is not a number");}

    let command = `SELECT 
    ${ds.dataStructure.farmer.id.key},
    ${ds.dataStructure.farmer.name.key},
    ${ds.dataStructure.farmer.country.key},
    ${ds.dataStructure.farmer.province.key},
    ${ds.dataStructure.farmer.county.key},
    ${ds.dataStructure.farmer.township.key},
    ${ds.dataStructure.farmer.village.key},
    ${ds.dataStructure.farmer.road.key},
    ${ds.dataStructure.farmer.slogan.key},
    ${ds.dataStructure.farmer.description.key},
    array_to_json(${ds.dataStructure.farmer.content.key}) AS ${ds.dataStructure.farmer.content.key},
    array_to_json(${ds.dataStructure.farmer.items.key}) AS ${ds.dataStructure.farmer.items.key},
    ${ds.dataStructure.farmer.cover_img.key},
    array_to_json(${ds.dataStructure.farmer.imgs.key}) AS ${ds.dataStructure.farmer.imgs.key},
    ${ds.dataStructure.farmer.create_on.key}
    FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.farmer.id.key} = '${parseInt(farmerId, 10)}';`;

    return Db.query(command)
}

function queryFarmerList(count, offset){
    Util.checkInt(count)
    Util.checkInt(offset)

    let row_counts = ""
    let row_offset = ""
    if(count == -1){
    }else{
        row_counts = `LIMIT ${count}`;
    }

    if(offset < 0){
    }else{
        row_offset = `OFFSET ${offset}`;
    }

    let command = `SELECT 
    ${ds.dataStructure.farmer.id.key},
    ${ds.dataStructure.farmer.name.key},
    ${ds.dataStructure.farmer.country.key},
    ${ds.dataStructure.farmer.province.key},
    ${ds.dataStructure.farmer.county.key},
    ${ds.dataStructure.farmer.township.key},
    ${ds.dataStructure.farmer.village.key},
    ${ds.dataStructure.farmer.road.key},
    ${ds.dataStructure.farmer.slogan.key},
    ${ds.dataStructure.farmer.description.key},
    array_to_json(${ds.dataStructure.farmer.content.key}) AS ${ds.dataStructure.farmer.content.key},
    array_to_json(${ds.dataStructure.farmer.items.key}) AS ${ds.dataStructure.farmer.items.key},
    ${ds.dataStructure.farmer.cover_img.key},
    array_to_json(${ds.dataStructure.farmer.imgs.key}) AS ${ds.dataStructure.farmer.imgs.key},
    ${ds.dataStructure.farmer.create_on.key} 
    FROM ${ds.dataStructure.farmer.table_name} ORDER BY ${ds.dataStructure.farmer.latest_modify.key} DESC ${row_counts} ${row_offset};`

    return Db.query(command)
}

function insertFarmer(name, country, province, county, township, village, road, slogan, description, content, items, cover_img, imgs) {
    Util.checkString(name, 'DbFarmer.insertFarmer name')
    Util.checkString(country, 'DbFarmer.insertFarmer country')
    Util.checkString(province, 'DbFarmer.insertFarmer province')
    Util.checkString(country, 'DbFarmer.insertFarmer county')
    Util.checkString(township, 'DbFarmer.insertFarmer township')
    Util.checkString(village, 'DbFarmer.insertFarmer village')
    Util.checkString(road, 'DbFarmer.insertFarmer road')
    Util.checkString(slogan, 'DbFarmer.insertFarmer slogan')
    Util.checkString(description, 'DbFarmer.insertFarmer description')
    Util.checkArray(content, 'DbFarmer.insertFarmer content')
    Util.checkArray(items, 'DbFarmer.insertFarmer items')
    Util.checkString(cover_img, 'DbFarmer.insertFarmer cover_img')
    Util.checkArray(imgs, 'DbFarmer.insertFarmer imgs')

    var description_new = description.replace(/'/g, `''`);
    let command = `INSERT INTO ${ds.dataStructure.farmer.table_name}(
        ${ds.dataStructure.farmer.name.key},
        ${ds.dataStructure.farmer.country.key},
        ${ds.dataStructure.farmer.province.key},
        ${ds.dataStructure.farmer.county.key},
        ${ds.dataStructure.farmer.township.key},
        ${ds.dataStructure.farmer.village.key},
        ${ds.dataStructure.farmer.road.key},
        ${ds.dataStructure.farmer.slogan.key},
        ${ds.dataStructure.farmer.description.key},
        ${ds.dataStructure.farmer.content.key},
        ${ds.dataStructure.farmer.items.key},
        ${ds.dataStructure.farmer.cover_img.key},
        ${ds.dataStructure.farmer.imgs.key})
        VALUES('${name}', '${country}', '${province}', '${county}', '${township}', '${village}', '${road}', '${slogan}', '${description_new}', ARRAY(SELECT json_populate_record(null::Section, json_array_elements('${JSON.stringify(content)}'))), ARRAY(SELECT json_populate_record(null::Good, json_array_elements('${JSON.stringify(items)}'))), '${cover_img}', ARRAY(SELECT json_array_elements_text('${JSON.stringify(imgs)}'))) RETURNING ${ds.dataStructure.farmer.id.key};`;
    return Db.query(command)
}

createGoodType()
createSectionType()
createFarmersTable()


let sections = [
    {title: "The Best", subtitle: "Best", description: "Universal Best Better Tea", img: "tea.jpg"},
    {title: "The Better", subtitle: "Better", description: "Universal Better Tea", img: "tea_tree.jpg"},
]
let items = [
    {id: 1, name: "Oolong Tea",},
    {id: 3, name: "Black Tea"}
]
let imgs = ["hill1.jpg", "hill2.jpg", "child.jpg"]
insertFarmer(1, "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", imgs)
insertFarmer(2, "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", imgs)
insertFarmer("Dai3", "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", imgs)
queryFarmerById(1)
queryFarmerList(-1,1)


exports.createGoodType = createGoodType;
exports.createSectionType = createSectionType;
exports.createFarmersTable = createFarmersTable;
exports.insertFarmer = insertFarmer;
exports.queryFarmerById = queryFarmerById;
exports.queryFarmerList = queryFarmerList;