import get from './fetchDb'
import {query_orders_count_all_url, query_order_url, query_order_list_url, insert_order_url} from '../util/config'

/**
 * 
 * @param {string} buyer_name 
 * @param {string} phone 
 * @param {string} email 
 * @param {string} bank_code 
 * @param {string} bank_account 
 * @param {string} country 
 * @param {string} zip 
 * @param {string} province 
 * @param {string} county 
 * @param {string} township 
 * @param {string} village 
 * @param {string} road 
 * @param {object} items 
 * @param {number} total_price 
 * @param {string} unit 
 * @param {integer} total_quantity 
 * @param {boolean} agree_policy 
 * @param {boolean} agree_policy 
 * @param {boolean} agree_promotion 
 * @param {object} comment 
 */
function featchInsertOrder(buyer_name, phone, email, bank_code, bank_account, country, zip, province, county, township, village, road, items, total_price, unit, total_quantity, agree_policy, agree_policy, agree_promotion, comment){
  return get(insert_order_url,{
    method: 'POST',
    body: new URLSearchParams({
      buyer_name: buyer_name, 
      phone: phone, 
      email: email, 
      bank_code: bank_code, 
      bank_account: bank_account, 
      country: country, 
      zip: zip, 
      province: province, 
      county: county, 
      township: township, 
      village: village, 
      road: road, 
      items: JSON.stringify(items), 
      total_price: total_price, 
      unit: unit, 
      total_quantity: total_quantity, 
      agree_policy: agree_policy, 
      agree_promotion: agree_promotion, 
      comment: JSON.stringify(comment)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

function fetchOrdersCountAll(){
  return get(query_orders_count_all_url,{
    method: 'GET'
  })
}

function fetchOrder(id){
  return get(query_order_url,{
    method: 'POST',
    body: new URLSearchParams({
        id: Number(id)
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

function fetchOrderList(count, offset){
  return get(query_order_list_url,{
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

export {fetchOrdersCountAll, fetchOrder, fetchOrderList, featchInsertOrder}