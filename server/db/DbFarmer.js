const ds = require('../dataStructure');
const Util = require('../util/Util');
const dbConfig = require('../config/dbConfig')
const Db = require('./Db')

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

function queryFarmersCountAll(){
    let command = `SELECT COUNT(*) FROM ${ds.dataStructure.farmer.table_name};`;
    return Db.query(command)
}

function queryFarmerById(farmerId){
    Util.checkInt(farmerId, "DbFarmer.queryFarmerById farmerId")

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
    ${ds.dataStructure.farmer.create_on.key}, 
    ${ds.dataStructure.farmer.latest_modify.key}
    FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.farmer.id.key} = '${parseInt(farmerId, 10)}';`;

    return Db.query(command)
}

function queryFarmerByName(farmerName){
    Util.checkString(farmerName, 'DbFarmer.queryFarmerByName farmerName')

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
    ${ds.dataStructure.farmer.create_on.key}, 
    ${ds.dataStructure.farmer.latest_modify.key}
    FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.farmer.name.key} = '${String(farmerName)}';`;

    return Db.query(command)
}

function queryFarmerByItemId(ItemId){
    Util.checkInt(ItemId, "DbFarmer.queryFarmerByItemId ItemId")

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
    ${ds.dataStructure.farmer.create_on.key}, 
    ${ds.dataStructure.farmer.latest_modify.key}
    FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.item.id.key} = '${parseInt(ItemId, 10)}';`;

    return Db.query(command)
}

function queryFarmerByItemName(itemName){
    Util.checkString(itemName, 'DbFarmer.queryFarmerByItemName itemName')

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
    ${ds.dataStructure.farmer.create_on.key}, 
    ${ds.dataStructure.farmer.latest_modify.key}
    FROM ${ds.dataStructure.farmer.table_name} WHERE ${ds.dataStructure.farmer.name.key} = '${String(itemName)}';`;

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
    ${ds.dataStructure.farmer.create_on.key}, 
    ${ds.dataStructure.farmer.latest_modify.key}
    FROM ${ds.dataStructure.farmer.table_name} ORDER BY ${ds.dataStructure.farmer.latest_modify.key} DESC ${row_counts} ${row_offset};`

    return Db.query(command)
}

function insertFarmer(name, country, province, county, township, village, road, slogan, description, content, items, cover_img, imgs) {
    Util.checkString(name, 'DbFarmer.insertFarmer name')
    Util.checkString(country, 'DbFarmer.insertFarmer country')
    Util.checkString(province, 'DbFarmer.insertFarmer province')
    Util.checkString(county, 'DbFarmer.insertFarmer county')
    Util.checkString(township, 'DbFarmer.insertFarmer township')
    Util.checkString(village, 'DbFarmer.insertFarmer village')
    Util.checkString(road, 'DbFarmer.insertFarmer road')
    let reSlogan = Util.checkString(slogan, 'DbFarmer.insertFarmer slogan', false)
    Util.checkString(description, 'DbFarmer.insertFarmer description')
    Util.checkArray(content, 'DbFarmer.insertFarmer content')
    let reItems = Util.checkArray(items, 'DbFarmer.insertFarmer items', false)
    Util.checkString(cover_img, 'DbFarmer.insertFarmer cover_img')
    let reImgs = Util.checkArray(imgs, 'DbFarmer.insertFarmer imgs', false)

    if(reSlogan === null) {
        reSlogan = `null`
    }else{
        reSlogan = `'${reSlogan}'`
    }

    if(reItems === null){
        reItems = `null`
    }else{
        reItems = `ARRAY(SELECT json_populate_record(null::Good, json_array_elements('${JSON.stringify(items)}')))`
    }

    if(reImgs === null){
        reImgs = `null`
    }else{
        reImgs = `ARRAY(SELECT json_array_elements_text('${JSON.stringify(imgs)}'))`
    }

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
        VALUES('${name}', '${country}', '${province}', '${county}', '${township}', 
        '${village}', '${road}', ${reSlogan}, '${description_new}', 
        ARRAY(SELECT json_populate_record(null::Section, json_array_elements('${JSON.stringify(content)}'))), 
        ${reItems}, 
        '${cover_img}', ${reImgs}
        ) RETURNING ${ds.dataStructure.farmer.id.key};`;
        // `INSERT INTO ${ds.dataStructure.farmer.table_name}(
        // ${ds.dataStructure.farmer.name.key},
        // ${ds.dataStructure.farmer.country.key},
        // ${ds.dataStructure.farmer.province.key},
        // ${ds.dataStructure.farmer.county.key},
        // ${ds.dataStructure.farmer.township.key},
        // ${ds.dataStructure.farmer.village.key},
        // ${ds.dataStructure.farmer.road.key},
        // ${ds.dataStructure.farmer.slogan.key},
        // ${ds.dataStructure.farmer.description.key},
        // ${ds.dataStructure.farmer.content.key},
        // ${ds.dataStructure.farmer.items.key},
        // ${ds.dataStructure.farmer.cover_img.key},
        // ${ds.dataStructure.farmer.imgs.key})
        // VALUES('${name}', '${country}', '${province}', '${county}', '${township}', '${village}', '${road}', '${slogan}', '${description_new}', ARRAY(SELECT json_populate_record(null::Section, json_array_elements('${JSON.stringify(content)}'))), ARRAY(SELECT json_populate_record(null::Good, json_array_elements('${JSON.stringify(items)}'))), '${cover_img}', ARRAY(SELECT json_array_elements_text('${JSON.stringify(imgs)}'))) RETURNING ${ds.dataStructure.farmer.id.key};`;
    return Db.query(command)
}

// createGoodType()
// createSectionType()
// createFarmersTable()


let sections = [
    {title: "The Best", subtitle: "Best", description: "Universal Best Better Tea", img: "tea.jpg"},
    {title: "The Better", subtitle: "Better", description: "Universal Better Tea", img: "tea_tree.jpg"},
]
let items = [
    {id: 1, name: "Oolong Tea",},
    {id: 3, name: "Black Tea"}
]
let imgs = ["hill1.jpg", "hill2.jpg", "child.jpg"]
// queryFarmersCountAll()
// insertFarmer("Dai", "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", undefined)
// insertFarmer(2, "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", imgs)
// insertFarmer("Dai3", "Taiwan", "Taiwan", "Nantou", "Lu/Gu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", imgs)
// queryFarmerById(1)
// queryFarmerByItemId(1)
// queryFarmerList(-1,1)


exports.createGoodType = createGoodType;
exports.createSectionType = createSectionType;
exports.createFarmersTable = createFarmersTable;
exports.queryFarmersCountAll = queryFarmersCountAll;
exports.insertFarmer = insertFarmer;
exports.queryFarmerById = queryFarmerById;
exports.queryFarmerByName = queryFarmerByName;
exports.queryFarmerList = queryFarmerList;
exports.queryFarmerByItemId = queryFarmerByItemId;
exports.queryFarmerByItemName = queryFarmerByItemName;