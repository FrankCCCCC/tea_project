const should = require('should')
const DbFarmer = require('../db/DbFarmer');
const config = require('../config/serverConfig')
const fetch = require('node-fetch')

var allFarmerCount = 0;

describe('DbFarmer.createProducerType', () => {
    it('should create Producer type', done => {
        DbFarmer.createGoodType().then((resolve) => {
            resolve.command.should.equal('DO')
            done()
        })
    })
})

describe('DbFarmer.createSpecType', () => {
    it('should create Spec type', done => {
        DbFarmer.createSectionType().then((resolve) => {
            resolve.command.should.equal('DO')
            done()
        })
    })
})

describe('DbFarmer.createFarmerTable', () => {
    it('should create farmers_table', done => {
        DbFarmer.createFarmersTable().then((resolve) => {
            resolve.command.should.equal('CREATE')
            done()
        })
    })
})

describe('DbFarmer.queryFarmersCountAll', () => {
    it('should count all farmers in farmers_table', done => {
        DbFarmer.queryFarmersCountAll().then((resolve) => {
            allFarmerCount = parseInt(resolve.rows[0].count);
            console.log(`All Farmer Count: ${allFarmerCount}`)
            resolve.command.should.equal('SELECT')
            done()
        })
    })
})

describe('DbFarmer.insertFarmer', () => {
    let sections = [
        {title: "The Best", subtitle: "Best", description: "Universal Best Better Tea", img: "tea.jpg"},
        {title: "The Better", subtitle: "Better", description: "Universal Better Tea", img: "tea_tree.jpg"},
    ]
    let items = [
        {id: 1, name: "Oolong Tea",},
        {id: 3, name: "Black Tea"}
    ]
    let imgs = ["hill1.jpg", "hill2.jpg", "child.jpg"]
    it(`should insert farmer into farmers_table with values "Green Tea", {id: 3, name: "Lin"}, 500, "NTD", "# Traditional Flavor", {property: "100g", value: "Heavily Baked", comment: "Strongest"}, "farmer1.jpg", ['hill1.jpg', 'tea.jpg', 'child.jpg']`, done => {
        DbFarmer.insertFarmer("Dai", "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", "Universal Best Tea", "# Best Tea Ever", sections, items, "farmer1.jpg", imgs).then((resolve) => {
            resolve.command.should.equal('INSERT')
            resolve.rows[0].id.should.equal(allFarmerCount + 1)
            allFarmerCount = allFarmerCount + 1;
            done()
        })
    })

    it(`should insert farmer into farmers_table with values "Green Tea", {id: 3, name: "Lin"}, 500, "NTD", "# Traditional Flavor", {property: "100g", value: "Heavily Baked", comment: "Strongest"}, "farmer1.jpg", ['hill1.jpg', 'tea.jpg', 'child.jpg']`, done => {
        DbFarmer.insertFarmer("Dai", "Taiwan", "Taiwan", "Nantou", "LuGu", "FongHuang", "indus.rd", undefined, "# Best Tea Ever", sections, undefined, "farmer1.jpg", undefined).then((resolve) => {
            resolve.command.should.equal('INSERT')
            resolve.rows[0].id.should.equal(allFarmerCount + 1)
            allFarmerCount = allFarmerCount + 1;
            done()
        })
    })
})

describe('DbFarmer.queryFarmerList', () => {
    it(`should list farmers in farmers_table count=3, offset=2, ${allFarmerCount}`, done => {
        DbFarmer.queryFarmerList(3, 2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allFarmerCount - 2)
            resolve.rowCount.should.equal(3)
            done()
        })
    })
    it(`should list all farmers in farmers_table count=-1, offset=0, ${allFarmerCount}`, done => {
        DbFarmer.queryFarmerList(-1, 0).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allFarmerCount)
            resolve.rowCount.should.equal(allFarmerCount)
            done()
        })
    })
    it(`should list all farmers in farmers_table count=-1, offset=-2, ${allFarmerCount}`, done => {
        DbFarmer.queryFarmerList(-1, -1).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rows[0].id.should.equal(allFarmerCount)
            resolve.rowCount.should.equal(allFarmerCount)
            done()
        })
    })
})

describe('DbFarmer.queryFarmerById', () => {
    it(`should query farmer in farmers_table by id=2`, done => {
        DbFarmer.queryFarmerById(2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            resolve.rowCount.should.equal(1)
            resolve.rows[0].id.should.equal(2)
            done()
        })
    })
})

describe('DbFarmer.queryFarmerByName', () => {
    it(`should query farmer in farmers_table by name='Dai'`, done => {
        DbFarmer.queryFarmerByName('Dai').then((resolve) => {
            resolve.command.should.equal('SELECT')
            let rows = parseInt(resolve.rowCount)
            for(let i = 0; i < rows; i++){
                resolve.rows[i].name.should.equal('Dai')
            }
            done()
        })
    })
})

describe('DbFarmer.queryFarmerByItemId', () => {
    it(`should query farmer in farmers_table by item id=2`, done => {
        DbFarmer.queryFarmerByItemId(2).then((resolve) => {
            resolve.command.should.equal('SELECT')
            let rows = parseInt(resolve.rows[i].items.length)
            let f = false
            for(let i = 0; i < rows; i++){
                if(resolve.rows[i].items[i].id == 2){f = true}
            }
            f.should.equal(true)
            done()
        })
    })
})

describe('DbFarmer.queryFarmerByItemName', () => {
    it(`should query farmer in farmers_table by item name='Oolong Tea'`, done => {
        DbFarmer.queryFarmerByItemName('Oolong Tea').then((resolve) => {
            resolve.command.should.equal('SELECT')
            let rows = parseInt(resolve.rows[i].items.length)
            let f = false
            for(let i = 0; i < rows; i++){
                if(resolve.rows[i].items[i].name == 'Oolong Tea'){f = true}
            }
            f.should.equal(true)
            done()
        })
    })
})

// var farmerCountActions = 0;
// describe('FarmerAction.queryFarmersCountAll', () => {
//     it(`should send the count of all farmers in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/query_farmers_count_all',{
//             method: 'GET'
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//               console.log(response.result)
//             response.status.should.equal(config.success)
//             farmerCountActions = response.result.count
//             done()
//             return response
//         }).catch(
//             (reject) => {
//               console.log(reject)            
//             }
//         )
//     })
// })

// describe('FarmerAction.insertFarmer', () => {
//     it(`should send the id of inserted farmers in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/insert_farmer',{
//             method: 'POST',
//             body: new URLSearchParams({
//                 name: "Green Tea", 
//                 producer: JSON.stringify({id: 3, name: "Lin"}),
//                 price: 500,
//                 unit: "NTD",
//                 description: "# Traditional Flavor",
//                 spec: JSON.stringify({property: "100g", value: "Heavily Baked", comment: "Strongest"}),
//                 cover_img: "farmer1.jpg",
//                 imgs: JSON.stringify(["hill1.jpg", "tea.jpg", "child.jpg"])
//             }),
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//             console.log(response.result.id)
//             console.log(farmerCountActions)
//             response.status.should.equal(config.success)
//             response.result.id.should.equal(farmerCountActions+1)
//             farmerCountActions = farmerCountActions + 1
//             done()
//             return response
//         }).catch((reject) => {
//               console.log(reject)            
//         })
//     })
// })

// describe('FarmerAction.queryFarmerById', () => {
//     it(`should send the farmer of queryed id=5 in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/query_farmer_by_id',{
//             method: 'POST',
//             body: new URLSearchParams({
//                 id: 5
//             }),
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//             // console.log(response)
//             response.status.should.equal(config.success)
//             response.result.id.should.equal(5)
//               done()
//               return response
//         }).catch((reject) => {
//               console.log(reject)            
//         })
//     })
// })

// describe('FarmerAction.queryFarmerByName', () => {
//     it(`should send the farmer of queryed name='Oolong Tea' in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/query_farmer_by_name',{
//             method: 'POST',
//             body: new URLSearchParams({
//                 name: "Oolong Tea"
//             }),
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//             //   console.log(response)
//             response.status.should.equal(config.success)
//             response.result.forEach((farmer, index, array) => {
//                 farmer.name.should.equal('Oolong Tea')
//             })
            
//               done()
//               return response
//         }).catch((reject) => {
//               console.log(reject)            
//         })
//     })
// })

// describe('FarmerAction.queryFarmerByProducerId', () => {
//     it(`should send the farmer of queryed producer id=2 in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/query_farmer_by_producer_id',{
//             method: 'POST',
//             body: new URLSearchParams({
//                 id: 2
//             }),
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//             //   console.log(response)
//             response.status.should.equal(config.success)
//             response.result.forEach((farmer, index, array) => {
//                 farmer.producer.id.should.equal(2)
//             })
//               done()
//               return response
//         }).catch((reject) => {
//               console.log(reject)            
//         })
//     })
// })

// describe('FarmerAction.queryFarmerByProducerName', () => {
//     it(`should send the farmer of queryed producer name='Dai' in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/query_farmer_by_producer_name',{
//             method: 'POST',
//             body: new URLSearchParams({
//                 name: "Dai"
//             }),
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//             //   console.log(response)
//             response.status.should.equal(config.success)
//             response.result.forEach((farmer, index, array) => {
//                 farmer.producer.name.should.equal('Dai')
//             })
//               done()
//               return response
//         }).catch((reject) => {
//               console.log(reject)            
//         })
//     })
// })

// describe('FarmerAction.queryFarmerList', () => {
//     it(`should send farmers list count=2, offset=3 in farmers_table`, done => {
//         fetch(config.farmer_action_url + '/query_farmer_list',{
//             method: 'POST',
//             body: new URLSearchParams({
//                 count: 2,
//                 offset: 3
//             }),
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then((response) => {
//             return response.json()
//         }).then((response) => {
//             response.status.should.equal(config.success)
//             response.result.length.should.equal(2)
//             done()
//             return response
//         }).catch((reject) => {
//               console.log(reject)            
//         })
//     })
// })