const {Pool} = require('pg');
const util = require('../util/Util');
const dbConfig = require('../config/dbConfig')

const pool = new Pool(dbConfig.config);

function query(command){
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

exports.query = query