/**
 * @param {Number} i - The number for type assertion
 * @param {Boolean} is_required - The flag to control whether allow undefined input
 */
export function assertNumber(i, is_required = false){
    if(typeof(i) === "Number" || (i === undefined && is_required)){return true}
    else{console.log("Error: Not a Number"); return false}
}

/**
 * @param {Integer} i - The integer for type assertion
 * @param {Boolean} is_required - The flag to control whether allow undefined input
 */
export function assertInteger(i, is_required = false){
    if((typeof(i) === "Number" && parseInt(i, 10) === i)  || (i === undefined && is_required)){return true}
    else{console.log("Error: Not a Integer"); return false}
}

/**
 * @param {String} i - The string for type assertion
 * @param {Boolean} is_required - The flag to control whether allow undefined input
 */
export function assertString(i, is_required = false){
    if(typeof(i) === "String" || (i === undefined && is_required)){return true}
    else{console.log("Error: Not a String"); return false}
}

/**
 * @param {Object} i - The object for type assertion
 * @param {Boolean} is_required - The flag to control whether allow undefined input
 */
export function assertObject(i, is_required = false){
    if(typeof(i) === "Object" || (i === undefined && is_required)){return true}
    else{console.log("Error: Not an Object"); return false}
}

/**
 * @param {Object} i - The array for type assertion
 * @param {Boolean} is_required - The flag to control whether allow undefined input
 */
export function assertArray(i, is_required = false){
    if((typeof(i) === "Object" && Array.isArray(i)) || (i === undefined && is_required)){return true}
    else{console.log("Error: Not an Array"); return false}
}

/** 
 * @param {String} html - The string of HTML code
 */
export function removeHtmlTag(html){
    return String(html).replace(/<[^>]*>/g, "")
}