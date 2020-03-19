export function assertNumber(i, is_required = false){
    if(typeof(i) === "Number" || (i === undefined && is_required)){return true}
    else{console.log("Error: Not a Number"); return false}
}

export function assertInteger(i, is_required = false){
    if((typeof(i) === "Number" && parseInt(i, 10) === i)  || (i === undefined && is_required)){return true}
    else{console.log("Error: Not a Integer"); return false}
}

export function assertString(i, is_required = false){
    if(typeof(i) === "String" || (i === undefined && is_required)){return true}
    else{console.log("Error: Not a String"); return false}
}

export function assertObject(i, is_required = false){
    if(typeof(i) === "Object" || (i === undefined && is_required)){return true}
    else{console.log("Error: Not an Object"); return false}
}

export function assertArray(i, is_required = false){
    if((typeof(i) === "Object" && Array.isArray(i)) || (i === undefined && is_required)){return true}
    else{console.log("Error: Not an Array"); return false}
}