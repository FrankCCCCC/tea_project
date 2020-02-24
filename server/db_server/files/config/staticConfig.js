const image_route = '/img/'
const video_route = '/video/'
const static_server_base_url = 'http://localhost'
const port = 5000

const img_url = static_server_base_url + ':' + String(port) + image_route
const video_url = static_server_base_url + ':'  + String(port) + video_route

exports.image_route = image_route
exports.video_route = video_route
exports.port = port
exports.static_server_base_url = static_server_base_url

exports.img_url = img_url
exports.video_url = video_url