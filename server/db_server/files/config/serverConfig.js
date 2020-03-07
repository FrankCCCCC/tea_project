const post_action = '/post_action'
const item_action = '/item_action'
const farmer_action = '/farmer_action'
const order_action = '/order_action'
const app_data_action = '/app_data_action'
const local_url = 'http://140.114.218.111'
const port = 8000

const success = 'SUCCESS'
const error = 'ERROR'

const post_action_url = local_url + ':' + String(port) + post_action
const item_action_url = local_url + ':'  + String(port) + item_action
const farmer_action_url = local_url + ':'  + String(port) + farmer_action
const order_action_url = local_url + ':'  + String(port) + order_action

const query_app_datas_count_all = '/query_app_datas_count_all'
const insert_app_data = '/insert_app_data'
const query_app_data_by_id = '/query_app_data_by_id'
const query_app_data_by_property = '/query_app_data_by_property'
const query_app_data_list = '/query_app_data_list'
const app_data_action_url = local_url + ':'  + String(port) + app_data_action

const media_targets = ['img', "imgs", 'image', 'images', 'cover_img', 'cover_image', 'video']
const markdown_targets = ['description']

exports.post_action = post_action
exports.item_action = item_action
exports.farmer_action = farmer_action
exports.order_action = order_action
exports.app_data_action = app_data_action
exports.port = port
exports.local_url = local_url

exports.success = success
exports.error = error

exports.post_action_url = post_action_url
exports.item_action_url = item_action_url
exports.farmer_action_url = farmer_action_url
exports.order_action_url = order_action_url

exports.query_app_datas_count_all = query_app_datas_count_all
exports.insert_app_data = insert_app_data
exports.query_app_data_by_id = query_app_data_by_id
exports.query_app_data_by_property = query_app_data_by_property
exports.query_app_data_list = query_app_data_list
exports.app_data_action_url = app_data_action_url

exports.media_targets = media_targets
exports.markdown_targets = markdown_targets