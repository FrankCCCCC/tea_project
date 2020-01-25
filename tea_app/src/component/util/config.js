const base_url = "http://leafhopper_service.nctu.me"
const app_server_port = 3000;
const db_server_port = 8000;
const db_port = 5432;
const static_server_port = 5000;
const app_server_cluster = 1;
const static_server_cluster = 1;

const app_server_url = base_url + ":" + app_server_port.toString();
const static_server_url = base_url + ":" + static_server_port.toString();
const db_server_url = base_url + ":" + db_server_port.toString()

const image_fetch_url = static_server_url + "/img/";
const video_fetch_url = static_server_url + "/video/";

const post_action = "post_action";
const query_post_list = "query_post_list";
const query_post = "query_post";
const post_action_url = db_server_url + "/" + post_action;
const query_post_url = post_action_url + "/" + query_post;
const query_post_list_url = post_action_url + "/" + query_post_list;

exports.base_url = base_url;
exports.app_server_port = app_server_port;
exports.db_server_port = db_server_port;
exports.db_port = db_port;
exports.static_server_port = static_server_port;
exports.app_server_cluster = app_server_cluster;
exports.static_server_cluster = static_server_cluster;

exports.app_server_url = app_server_url;
exports.static_server_url = static_server_url;
exports.db_server_url = db_server_url;

exports.image_fetch_url = image_fetch_url;
exports.video_fetch_url = video_fetch_url;

exports.post_action_url = post_action_url;
exports.query_post_url = query_post_url;
exports.query_post_list_url = query_post_list_url;