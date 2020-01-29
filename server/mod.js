const should = require('should')
const DbItem = require('./db/DbItem');
const config = require('./config/serverConfig')
const fetch = require('node-fetch')

fetch(config.item_action_url + '/query_item_list',{
    method: 'POST',
    body: new URLSearchParams({
        count: 2,
        offset: 3
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then((response) => {
    return response.json()
}).then((response) => {
      console.log(response)
      console.log(response[0].id)
      console.log(response[0].imgs)
      console.log(response[0].imgs[0])
    // response.length.should.equal(itemCountActions)
    //   done()
      return response
}).catch((reject) => {
      console.log(reject)            
})

fetch(config.item_action_url + '/insert_item',{
    method: 'POST',
    body: new URLSearchParams({
        name: "Green Tea", 
        producer: JSON.stringify({id: 3, name: "Lin"}),
        price: 500,
        unit: "NTD",
        description: "# Traditional Flavor",
        spec: JSON.stringify({property: "100g", value: "Heavily Baked", comment: "Strongest"}),
        cover_img: "farmer1.jpg",
        imgs: JSON.stringify(["hill1.jpg", "tea.jpg", "child.jpg"])
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then((response) => {
    return response.json()
}).then((response) => {
    console.log(response)
    console.log(response.id)
    // response.should.equal(config.success)
    // itemCountActions = itemCountActions + 1
    //   done()
      return response
}).catch((reject) => {
      console.log(reject)            
})