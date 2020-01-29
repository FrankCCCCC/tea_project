const DbItem = require('../db/DbItem');
const util = require('../util/Util')
const config = require('../config/serverConfig')
const express = require('express');
const { Remarkable } = require('remarkable');

var item_action = express();

item_action.on('mount', function (parent) {
    DbItem.createProducerType().then(
        (resolve) => {
            util.log(`Created Producer type`)
            DbItem.createSpecType().then(
                (resolve) => {
                    util.log(`Created Spec type`)
                    DbItem.createItemsTable().then(
                        (resolve) => {
                            util.log(`Created items_table`)
                            util.log(`item_action is mounted By ${parent}`)
                            return resolve
                    }).catch(
                        (reject) => {
                            util.log(`Error: ${reject}`)
                            return reject;
                    })
                    return resolve
            }).catch(
                (reject) => {
                    util.log(`Error: ${reject}`)
                    return reject;
            })
            return resolve
    }).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            return reject;
    })
})

item_action.get('/query_items_count_all', (req, res) => {
    DbItem.queryItemsCountAll().then(
        (resolve) => {
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send({count: parseInt(resolve.rows[0].count, 10)})
            res.json(util.makeRes({count: parseInt(resolve.rows[0].count, 10)}))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(util.makeRes(reject))
        }
    )
})

item_action.post('/insert_item', (req, res) => {
    DbItem.insertItem(String(req.body.name), JSON.parse(String(req.body.producer)), String(req.body.price), String(req.body.unit), String(req.body.description), JSON.parse(String(req.body.spec)), String(req.body.cover_img), JSON.parse(String(req.body.imgs))).then(
        (resolve) => {
            console.log(resolve.rows[0])
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(resolve.rows[0])
            res.json(util.makeRes(resolve.rows[0]))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(util.makeRes(reject))
        }
    )
})

item_action.post('/query_item_by_id', (req, res) => {
    DbItem.queryItemById(parseInt(req.body.id, 10)).then(
        (resolve) => {
            var md = new Remarkable({html: true})
            var res_item = resolve.rows[0];
            
            // util.log(md.render(resolve.rows[0].content))
            res_item.description = md.render(resolve.rows[0].description)
            // res_item.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_item)
            res.json(util.makeRes(res_item))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(util.makeRes(reject))
        }
    );
})

item_action.post('/query_item_by_name', (req, res) => {
    DbItem.queryItemByName(String(req.body.name)).then(
        (resolve) => {
            let res_post = resolve.rows.map((item, index, array) => {
                let md = new Remarkable({html: true})
                let res_item = item;
            
                // util.log(md.render(resolve.rows[0].content))
                res_item.description = md.render(item.description)
                return res_item
            })
            
            // res_item.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_post)
            res.json(util.makeRes(res_post))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(util.makeRes(reject))
        }
    );
})

item_action.post('/query_item_by_producer_id', (req, res) => {
    DbItem.queryItemByProducerId(parseInt(req.body.id, 10)).then(
        (resolve) => {
            let res_post = resolve.rows.map((item, index, array) => {
                let md = new Remarkable({html: true})
                let res_item = item;
            
                // util.log(md.render(resolve.rows[0].content))
                res_item.description = md.render(item.description)
                return res_item
            })
            
            // res_item.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_post)
            res.json(util.makeRes(res_post))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(util.makeRes(reject))
        }
    );
})

item_action.post('/query_item_by_producer_name', (req, res) => {
    DbItem.queryItemByProducerName(String(req.body.name)).then(
        (resolve) => {
            let res_post = resolve.rows.map((item, index, array) => {
                let md = new Remarkable({html: true})
                let res_item = item;
            
                // util.log(md.render(resolve.rows[0].content))
                res_item.description = md.render(item.description)
                return res_item
            })
            
            // res_item.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_post)
            res.json(util.makeRes(res_post))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(util.makeRes(reject))
        }
    );
})

item_action.post('/query_item_list', (req, res) => {
    DbItem.queryItemList(parseInt(req.body.count, 10), parseInt(req.body.offset, 10)).then(
        (resolve) => {
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(JSON.stringify(resolve.rows));
            // res.send(resolve.rows)
            res.json(util.makeRes(resolve.rows))
    }).catch(
        (reject) => {
        res.header("Access-Control-Allow-Origin", "*");
        util.log(`Error: ${reject}`)
        // res.send(reject)
        res.json(util.makeRes(reject))
    });
});

exports.actions = item_action;