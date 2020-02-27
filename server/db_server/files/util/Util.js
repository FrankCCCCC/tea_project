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

function checkInt(i, paramName, isRequired=true){
    if(typeof(i) !== 'number' || parseInt(i, 10) !== i || i === null || i === undefined || Number.isNaN(i)){
        if(isRequired){
            log(`Warning: ${paramName} = ${i} is not a Integer`)
            throw `Warning: ${paramName} = ${i} is not a Integer`
        }else{
            return null
        }
    }else{
        return parseInt(i, 10)
    }
}

function checkNumber(i, paramName, isRequired=true){
    if(typeof(i) !== 'number' || i === null || i === undefined || Number.isNaN(i)){
        if(isRequired){
            log(`Warning: ${paramName} = ${i} is not a Number`)
            throw `Warning: ${paramName} = ${i} is not a Number`
        }else{
            return null
        }
    }else{
        return Number(i)
    }
}

function checkBool(i, paramName, isRequired=true){
    if(typeof(i) !== 'boolean' || i === null || i === undefined || Number.isNaN(i)){
        if(isRequired){
            log(`Warning: ${paramName} = ${i} is not a Boolean`)
            throw `Warning: ${paramName} = ${i} is not a Boolean`
        }else{
            return null
        }
    }else{
        return Boolean(i)
    }
}

function checkString(i, paramName, isRequired=true){
    if(typeof(i) !== 'string' || i === "" || i === null || i === undefined || Number.isNaN(i)){
        if(isRequired){
            log(`Warning: ${paramName} = ${i} is not a String`)
            throw `Warning: ${paramName} = ${i} is not a String`
        }else{
            return null
        }
    }else{
        return String(i)
    }
}

function checkObject(i, paramName, isRequired=true){
    if(typeof(i) !== 'object' || Object.keys(i).length <=0 || i === null || i === undefined || Number.isNaN(i)){
        if(isRequired){
            log(`Warning: ${paramName} = ${i} is not an Object`)
            throw `Warning: ${paramName} = ${i} is not an Object`
        }else{
            return null
        }
    }else{
        return i
    }
}

// function checkArray(i, paramName, isRequired=true){
//     if(!Array.isArray(i)){
//         log(`Warning: ${paramName} = ${i} is not an Array`)
            // throw `Warning: ${paramName} = ${i} is not an Array`
//         return []
//     }else{
//         if(isRequired){
//             if(i === null || i === undefined || i === NaN || i === "" || i=== {} || i=== []){
//                 log(`Warning: ${paramName} = ${i} is Required`)
//                 throw `Warning: ${paramName} = ${i} is Required`
//             }
//         }else{
//             if(i === null || i === undefined || i === NaN || i === "" || i=== {} || i=== []){
//                 return null
//             }else{
//                 return i
//             }
//         }
//     }
// }

function checkArray(i, paramName, isRequired=true){
    if(!Array.isArray(i) || i.length <= 0 || i === undefined || i === null || Number.isNaN(i)){
        if(isRequired){
            log(`Warning: ${paramName} = ${i} is not an Array`)
            throw `Warning: ${paramName} = ${i} is not an Array`
        }else{
            return null
        }
    }else{
        return i
    }
}

function NaNUndefinedtoNull(i){
    if(i === undefined || Number.isNaN(i)){return null}
    else{return i}
}

// console.log(checkString(undefined, "", false));

function string2bool(str){
    if(str === "true"){return true}
    else if(str === "false"){return false}
    else{return undefined}
}

exports.log = log
exports.shortStr = shortStr
exports.makeRes = makeRes
exports.checkInt = checkInt
exports.checkNumber = checkNumber
exports.checkBool = checkBool
exports.checkString = checkString
exports.checkObject = checkObject
exports.checkArray = checkArray
exports.NaNUndefinedtoNull = NaNUndefinedtoNull
exports.string2bool = string2bool