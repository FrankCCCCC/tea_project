const staticConfig = require('../config/staticConfig')

function make_img_url(img){
    return staticConfig.img_url + String(img)
}

exports.make_img_url = make_img_url