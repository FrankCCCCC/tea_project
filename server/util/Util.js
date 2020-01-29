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

exports.log = log;
exports.shortStr = shortStr