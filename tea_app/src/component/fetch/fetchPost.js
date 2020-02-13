const config = require('../util/config')
const fetchDb = require('./fetchDb')

function fetchPostsCountAll(){
  return fetchDb.get(config.query_posts_count_all_url,{
    method: 'GET'
  })
}

function fetchPost(id){
  return fetchDb.get(config.query_post_url,{
    method: 'POST',
    body: new URLSearchParams({
        id: Number(id)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

function fetchPostList(count, offset){
  return fetchDb.get(config.query_post_list_url,{
    method: 'POST',
    body: new URLSearchParams({
        count: Number(count),
        offset: Number(offset)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
exports.fetchPostsCountAll = fetchPostsCountAll;
exports.fetchPost = fetchPost;
exports.fetchPostList = fetchPostList;