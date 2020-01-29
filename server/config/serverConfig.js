const post_action = '/post_action'
const item_action = '/item_action'
const farmer_action = '/farmer_action'
const local_url = 'http://localhost'
const port = 8000

const success = 'Success'
const error = 'Error'

const post_action_url = local_url + ':' + String(port) + post_action
const item_action_url = local_url + ':'  + String(port) + item_action
const farmer_action_url = local_url + ':'  + String(port) + farmer_action

exports.post_action = post_action
exports.item_action = item_action
exports.farmer_action = farmer_action
exports.port = port
exports.local_url = local_url

exports.success = success
exports.error = error

exports.post_action_url = post_action_url
exports.item_action_url = item_action_url
exports.farmer_action_url = farmer_action_url