const config = require('../util/config')
const fetchDb = require('./fetchDb')

function countAll(){
  return fetchDb.get(config.query_items_count_all_url,{
    method: 'GET'
  })
}

function byId(id){
  return fetchDb.get(config.query_item_by_id_url,{
    method: 'POST',
    body: new URLSearchParams({
        id: Number(id)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

async function list(count, offset){
  return await fetchDb.get(config.query_item_list_url,{
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

var list_p = (count, offset) => fetchDb.get(config.query_item_list_url,{
  method: 'POST',
  body: new URLSearchParams({
      count: Number(count),
      offset: Number(offset)
  }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(
  (resolve) => {
      console.log("loadRequest")
      console.log(resolve)
      return resolve.map(
          (item, index, array) => {
              let list_item = {
                  id: item.id,
                  cover_img: item.cover_img,
                  title: item.name,
                  subtitle: item.producer.name
              }
              return list_item
          }
      )
  }
)

// let kk = list_p.then(
//   (resolve) => {
//     console.log(resolve)
//       return resolve.map(
//           (item, index, array) => {
//               let list_item = {
//                   id: item.id,
//                   cover_img: item.cover_img,
//                   title: item.name,
//                   subtitle: item.producer.name
//               }
//               return list_item
//           }
//       )
//   }
// ).catch(
//   (reject) => {return reject}
// )

exports.countAll = countAll;
exports.byId = byId;
exports.list = list;
exports.list_p = list_p;