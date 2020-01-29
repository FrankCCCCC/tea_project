const config = require('../config/serverConfig')
const fs = require('fs');


function shortStr(str){
    return String(str).substring(0, 12) + '...'
}

function log(str, is_show=true){
    let now = new Date();
    let localTime = now.toLocaleString({hour: '2-digit', hour12: false, timeZone: 'Asia/Taipei' });
    fs.appendFile(`${__dirname}/../log/server.log`, 
            `${now.toISOString()} Local: ${localTime} ${String(str)} \n`,
            (err) => {
                if(err != null){
                    console.log(err)
                }       
            }
        )
    
    if(is_show){
        // console.log("UTIL")
        // console.log(str)
        console.log(`${localTime} ${String(str)}`)    
    }   
}

function makeRes(resOgj, is_success=true){
    var res = {
        status:config.success,
        result: resOgj
    };
    if(!is_success){
        res.status = config.error
    }
    console.log(res)
    
    return res
}

function checkInt(i, paramName){
    if(typeof(i) !== 'number' || parseInt(i, 10) !== i){
        log(`Warning: ${paramName} = ${i} is not a Integer`)
        throw `Warning: ${paramName} = ${i} is not a Integer`
    }
    return parseInt(i, 10)
}

function checkNumber(i, paramName){
    if(typeof(i) !== 'number'){
        log(`Warning: ${paramName} = ${i} is not a Number`)
    }
    return Number(i)
}

function checkString(i, paramName){
    if(typeof(i) !== 'string'){
        log(`Warning: ${paramName} = ${i} is not a String`)
        throw `Warning: ${paramName} = ${i} is not a String`
    }
    return String(i)
}

function checkObject(i, paramName){
    if(typeof(i) !== 'object'){
        log(`Warning: ${paramName} = ${i} is not an Object`)
        return null
    }else if(i === null){
        log(`Warning: ${paramName} = ${i} is null`)
        return i
    }else{
        return i
    }
}

function checkArray(i, paramName){
    if(!Array.isArray(i)){
        log(`Warning: ${paramName} = ${i} is not an Array`)
        return []
    }else{
        return i
    }
}



exports.log = log
exports.shortStr = shortStr
exports.makeRes = makeRes
exports.checkInt = checkInt
exports.checkNumber = checkNumber
exports.checkString = checkString
exports.checkObject = checkObject
exports.checkArray = checkArray