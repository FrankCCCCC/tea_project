const config = require('./config')

function fetchFarmersCountAll(){
  return fetch(config.query_posts_count_all_url,{
    method: 'GET'
  }).then(
    (response) => {
      // console.log(response)
      // return response.json()
      return response.json().result
    }
  ).catch(
    (reject) => {
      console.log(reject)            
    }
  )
}

function fetchPostsCountAll(){
  return fetch(config.query_posts_count_all_url,{
    method: 'GET'
  }).then(
    (response) => {
      // console.log(response)
      return response.json()
      // return response.json().result
    }
  ).then(
    (resolve) => {
      // console.log(resolve)
      return resolve.result
    }
  ).catch(
    (reject) => {
      console.log(reject)            
    }
  )
}

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
      // return response.json()
      return response.json()
    }
  ).then(
    (resolve) => {
      // console.log(resolve)
      return resolve.result
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
      // console.log(response)
      // return response.json()
      return response.json()
    }
  ).then(
    (resolve) => {
      // console.log(resolve)
      return resolve.result
    }
  ).then(
    (resolve) => {
      console.log(resolve);
      return resolve
    }
  ).catch(
    (reject) => {
      console.log(reject)            
    }
  ) 
}
exports.fetchPostsCountAll = fetchPostsCountAll;
exports.fetchPost = fetchPost;
exports.fetchPostList = fetchPostList;