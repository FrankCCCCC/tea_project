const DbOrder = require('../db/DbOrder');
const Util = require('../util/Util')
const actions = require('./actions')
const express = require('express');
const { Remarkable } = require('remarkable');

var order_action = express();

order_action.on('mount', function (parent) {
    DbOrder.createCommentType().then(
        (resolve) => {
            Util.log(`Created Comment type`)
            DbOrder.createSellTypeType().then(
                (resolve) => {
                    Util.log(`Created Selltype type`)
                    DbOrder.createOrderItemType().then(
                        (resolve) => {
                            Util.log(`Created OrderItem type`)
                            DbOrder.createOrdersTable().then(
                                (resolve) => {
                                    Util.log(`Created orders_table`)
                                    Util.log(`order_action is mounted By ${parent}`)
                                    return resolve
                            }).catch(
                                (reject) => {
                                    Util.log(`Error: ${reject}`)
                                    return reject;
                            })
                            return resolve
                        }
                    ).catch(
                        (reject) => {
                            Util.log(`Error: ${reject}`)
                            return reject;   
                        }
                    )
                    return resolve
            }).catch(
                (reject) => {
                    Util.log(`Error: ${reject}`)
                    return reject;
            })
            return resolve
    }).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            return reject;
    })
})

order_action.get('/query_orders_count_all', (req, res) => {
    DbOrder.queryOrdersCountAll().then(
        (resolve) => {
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send({count: parseInt(resolve.rows[0].count, 10)})
            res.json(Util.makeRes({count: parseInt(resolve.rows[0].count, 10)}))
        }
    ).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(Util.makeRes(reject, false))
        }
    )
})

order_action.post('/insert_order', (req, res) => {
    DbOrder.insertOrder(
        String(req.body.name), 
        String(req.body.phone), 
        JSON.parse(String(req.body.producer)), Number(req.body.price), String(req.body.unit), String(req.body.description), JSON.parse(Util.NaNUndefinedtoNull(req.body.spec)), String(req.body.cover_img), JSON.parse(Util.NaNUndefinedtoNull(req.body.imgs))).then(
        (resolve) => {
            // console.log(resolve.rows[0])
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(resolve.rows[0])
            // console.log(Util.makeRes(resolve.rows[0]))
            res.json(Util.makeRes(resolve.rows[0]))
        }
    ).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(Util.makeRes(reject, false))
        }
    )
})

order_action.post('/query_order_by_id', (req, res) => {
    DbOrder.queryOrderById(parseInt(req.body.id, 10)).then(
        (resolve) => {
            var md = new Remarkable({html: true})
            var res_order = resolve.rows[0];
            
            // Util.log(md.render(resolve.rows[0].content))
            // res_order.description = md.render(resolve.rows[0].description)
            // res_order.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_order)
            res.json(Util.makeRes(res_order))
        }
    ).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(Util.makeRes(reject, false))
        }
    );
})

order_action.post('/query_order_by_buyer_name', (req, res) => {
    DbOrder.queryOrderByBuyerName(String(req.body.name)).then(
        (resolve) => {
            // let res_post = resolve.rows.map((order, index, array) => {
            //     let md = new Remarkable({html: true})
            //     let res_order = order;
            
            //     // Util.log(md.render(resolve.rows[0].content))
            //     res_order.description = md.render(order.description)
            //     return res_order
            // })
            
            // res_order.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_post)
            res.json(Util.makeRes(resolve.rows))
        }
    ).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(Util.makeRes(reject, false))
        }
    );
})

order_action.post('/query_order_by_item_id', (req, res) => {
    DbOrder.queryOrderByItemId(parseInt(req.body.id, 10)).then(
        (resolve) => {
            // let res_post = resolve.rows.map((order, index, array) => {
            //     let md = new Remarkable({html: true})
            //     let res_order = order;
            
            //     // Util.log(md.render(resolve.rows[0].content))
            //     res_order.description = md.render(order.description)
            //     return res_order
            // })
            
            // res_order.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_post)
            res.json(Util.makeRes(resolve.rows))
        }
    ).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(Util.makeRes(reject, false))
        }
    );
})

order_action.post('/query_order_by_item_name', (req, res) => {
    DbOrder.queryOrderByItemName(String(req.body.name)).then(
        (resolve) => {
            // let res_post = resolve.rows.map((order, index, array) => {
            //     let md = new Remarkable({html: true})
            //     let res_order = order;
            
            //     // Util.log(md.render(resolve.rows[0].content))
            //     res_order.description = md.render(order.description)
            //     return res_order
            // })
            
            // res_order.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(res_post)
            res.json(Util.makeRes(resolve.rows))
        }
    ).catch(
        (reject) => {
            Util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(reject)
            res.json(Util.makeRes(reject, false))
        }
    );
})

order_action.post('/query_order_list', (req, res) => {
    DbOrder.queryOrderList(parseInt(req.body.count, 10), parseInt(req.body.offset, 10)).then(
        (resolve) => {
            // let res_orders = resolve.rows.map(
            //     (order, index, array) => {
            //         let new_order = order
            //         new_order.cover_img = actions.make_img_url(order.cover_img)
            //         return new_order
            //     }
            // )
            Util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            // res.send(JSON.stringify(resolve.rows));
            // res.send(resolve.rows)
            res.json(Util.makeRes(resolve.rows))
    }).catch(
        (reject) => {
        res.header("Access-Control-Allow-Origin", "*");
        Util.log(`Error: ${reject}`)
        // res.send(reject)
        res.json(Util.makeRes(reject, false))
    });
});

exports.actions = order_action;