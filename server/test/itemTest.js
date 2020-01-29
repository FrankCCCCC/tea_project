const should = require('should')
const DbItem = require('../db/DbItem');
const config = require('../config/serverConfig')
const fetch = require('node-fetch')

var allItemCount = 0;

describe('DbItem.createProducerType', () => {
    it('should create Producer type', done => {
        DbItem.createProducerType().then((resolve) => {
            resolve.command.should.equal('DO')
            done()
        })
    })
})

describe('DbItem.createSpecType', () => {
    it('should create Spec type', done => {
        DbItem.createSpecType().then((resolve) => {
            resolve.command.should.equal('DO')
            done()
        })
    })
})

describe('DbItem.createItemTable', () => {
    it('should create items_table', done => {
        DbItem.createItemsTable().then((resolve) => {
            resolve.command.should.equal('CREATE')
            done()
        })
    })
})

describe('DbItem.queryItemsCountAll', () => {
    it('should count all items in items_table', done => {
        DbItem.queryItemsCountAll().then((resolve) => {
            allItemCount = parseInt(resolve.rows[0].count);
            console.log(`All Item Count: ${allItemCount}`)
            resolve.command.should.equal('SELECT')
            done()
        })
    })
})

describe('DbItem.insertItem', () => {
    it(`should insert item into items_table with values "Green Tea", {id: 3, name: "Lin"}, 500, "NTD", "# Traditional Flavor", {property: "100g", value: "Heavily Baked", comment: "Strongest"}, "farmer1.jpg", ['hill1.jpg', 'tea.jpg', 'child.jpg']`, done => {
        DbItem.insertItem("Green Tea", {id: 3, name: "Lin"}, 500, "NTD", "# Traditional Flavor", {property: "100g", value: "Heavily Baked", comment: "Strongest"}, "farmer1.jpg", ['hill1.jpg', 'tea.jpg', 'child.jpg']).then((resolve) => {
            resolve.command.should.equal('INSERT')
            resolve.rows[0].id.should.equal(allItemCount + 1)
            allItemCount = allItemCount + 1;
            done()
        })
    })
})

describe('DbItem.queryItemList', () => {
    it(`should list items in items_table count=3, offset=2, ${allItemCount}`, done => {
        DbItem.queryItemList(3, 2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allItemCount - 2)
            resolve.rowCount.should.equal(3)
            done()
        })
    })
    it(`should list all items in items_table count=-1, offset=0, ${allItemCount}`, done => {
        DbItem.queryItemList(-1, 0).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allItemCount)
            resolve.rowCount.should.equal(allItemCount)
            done()
        })
    })
    it(`should list all items in items_table count=-1, offset=-2, ${allItemCount}`, done => {
        DbItem.queryItemList(-1, -1).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allItemCount)
            resolve.rowCount.should.equal(allItemCount)
            done()
        })
    })
})

describe('DbItem.queryItemById', () => {
    it(`should query item in items_table by id=2`, done => {
        DbItem.queryItemById(2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rowCount.should.equal(1)
            resolve.rows[0].id.should.equal(2)
            done()
        })
    })
})

describe('DbItem.queryItemByName', () => {
    it(`should query item in items_table by name='Oolong Tea'`, done => {
        DbItem.queryItemByName('Oolong Tea').then((resolve) => {
            resolve.command.should.equal('SELECT')
            let rows = parseInt(resolve.rowCount)
            for(let i = 0; i < rows; i++){
                resolve.rows[i].name.should.equal('Oolong Tea')
            }
            done()
        })
    })
})

describe('DbItem.queryItemByProducerId', () => {
    it(`should query item in items_table by producer id=2`, done => {
        DbItem.queryItemByProducerId(2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            let rows = parseInt(resolve.rowCount)
            for(let i = 0; i < rows; i++){
                resolve.rows[i].producer.id.should.equal(2)
            }
            done()
        })
    })
})

describe('DbItem.queryItemByProducerName', () => {
    it(`should query item in items_table by producer name='dai'`, done => {
        DbItem.queryItemByProducerName('dai').then((resolve) => {
            resolve.command.should.equal('SELECT')
            let rows = parseInt(resolve.rowCount)
            for(let i = 0; i < rows; i++){
                resolve.rows[i].producer.name.should.equal('dai')
            }
            done()
        })
    })
})

var itemCountActions = 0;
describe('ItemAction.queryItemsCountAll', () => {
    it(`should send the count of all items in items_table`, done => {
        fetch(config.item_action_url + '/query_items_count_all',{
            method: 'GET'
        }).then((response) => {
            return response.json()
        }).then((response) => {
              console.log(response.result)
            response.status.should.equal(config.success)
            itemCountActions = response.result.count
            done()
            return response
        }).catch(
            (reject) => {
              console.log(reject)            
            }
        )
    })
})

describe('ItemAction.insertItem', () => {
    it(`should send the id of inserted items in items_table`, done => {
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
            console.log(response.result.id)
            console.log(itemCountActions)
            response.status.should.equal(config.success)
            response.result.id.should.equal(itemCountActions+1)
            itemCountActions = itemCountActions + 1
            done()
            return response
        }).catch((reject) => {
              console.log(reject)            
        })
    })
})

describe('ItemAction.queryItemById', () => {
    it(`should send the item of queryed id=5 in items_table`, done => {
        fetch(config.item_action_url + '/query_item_by_id',{
            method: 'POST',
            body: new URLSearchParams({
                id: 5
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            // console.log(response)
            response.status.should.equal(config.success)
            response.result.id.should.equal(5)
              done()
              return response
        }).catch((reject) => {
              console.log(reject)            
        })
    })
})

describe('ItemAction.queryItemByName', () => {
    it(`should send the item of queryed name='Oolong Tea' in items_table`, done => {
        fetch(config.item_action_url + '/query_item_by_name',{
            method: 'POST',
            body: new URLSearchParams({
                name: "Oolong Tea"
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            //   console.log(response)
            response.status.should.equal(config.success)
            response.result.forEach((item, index, array) => {
                item.name.should.equal('Oolong Tea')
            })
            
              done()
              return response
        }).catch((reject) => {
              console.log(reject)            
        })
    })
})

describe('ItemAction.queryItemByProducerId', () => {
    it(`should send the item of queryed producer id=2 in items_table`, done => {
        fetch(config.item_action_url + '/query_item_by_producer_id',{
            method: 'POST',
            body: new URLSearchParams({
                id: 2
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            //   console.log(response)
            response.status.should.equal(config.success)
            response.result.forEach((item, index, array) => {
                item.producer.id.should.equal(2)
            })
              done()
              return response
        }).catch((reject) => {
              console.log(reject)            
        })
    })
})

describe('ItemAction.queryItemByProducerName', () => {
    it(`should send the item of queryed producer name='Dai' in items_table`, done => {
        fetch(config.item_action_url + '/query_item_by_producer_name',{
            method: 'POST',
            body: new URLSearchParams({
                name: "Dai"
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            //   console.log(response)
            response.status.should.equal(config.success)
            response.result.forEach((item, index, array) => {
                item.producer.name.should.equal('Dai')
            })
              done()
              return response
        }).catch((reject) => {
              console.log(reject)            
        })
    })
})

describe('ItemAction.queryItemList', () => {
    it(`should send items list count=2, offset=3 in items_table`, done => {
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
            response.status.should.equal(config.success)
            response.result.length.should.equal(2)
            done()
            return response
        }).catch((reject) => {
              console.log(reject)            
        })
    })
})