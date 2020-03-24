const PostActions = require('./action/PostActions.js')
const ItemActions = require('./action/ItemActions')
const FarmerActions = require('./action/FarmerActions')
const OrderActions = require('./action/OrderActions')
const AppDataActions = require('./action/AppDataActions')
const serverConfig = require('./config/serverConfig')
const util = require('./util/Util')
const Init = require('./init/Init')
const express = require('express');
const cors = require('cors')
const helmet = require('helmet')

var app = express()
var is_ready = false

// new Promise((resolve) => {
    app.set('trust proxy', true)
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cors());
    app.use(helmet())

    app.use(serverConfig.post_action, PostActions.actions)
    app.use(serverConfig.item_action, ItemActions.actions)
    app.use(serverConfig.farmer_action, FarmerActions.actions)
    app.use(serverConfig.order_action, OrderActions.actions)
    app.use(serverConfig.app_data_action, AppDataActions.actions)  
    // console.log("hi1")
    // resolve()
// }).then((error) => {
    // console.log("hi2")
    // is_ready = true
// })

// while(!is_ready){}
app.on('ready', () => {
    app.listen(serverConfig.port, () => {
        console.log('Start listening')
        util.log(`Server is listening on port ${serverConfig.port}`)
        util.log(`${process.env.mode} Mode`)
        switch(process.env.mode){
            case 'dev':
                Init.devInit()
                break
            case 'remote_dev':
                Init.devInit()
                break
            case 'deploy':
                Init.deployInit()
                break
        }
    });
})