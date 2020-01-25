const config = require('./config')

function fetchPost(id){
  return fetch(config.query_post_url,{
    method: 'POST',
    body: new URLSearchParams({
        id: Number(id)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(
    (response) => {
      // console.log(response)
      return response.json()
    }
  ).catch(
    (reject) => {
      console.log(reject)            
    }
  )
}

function fetchPostList(count, offset){
  return fetch(config.query_post_list_url,{
    method: 'POST',
    body: new URLSearchParams({
        count: Number(count),
        offset: Number(offset)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(
    (response) => {
      console.log(response)
      return response.json()
    }
  ).then(
    (resolve) => {
      var completeUrl = resolve.map(
        (item, index, array) => {
          var t = item;
          t.cover_img = config.image_fetch_url + item.cover_img;
          return t;
        }
      )
      console.log(completeUrl);
      return completeUrl;
    }
  ).catch(
    (reject) => {
      console.log(reject)            
    }
  ) 
}
exports.fetchPost = fetchPost;
exports.fetchPostList = fetchPostList;