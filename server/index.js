const PostActions = require('./action/PostActions.js')
const ItemActions = require('./action/ItemActions')
const serverConfig = require('./config/serverConfig')
const util = require('./util/Util')
const express = require('express');
const cors = require('cors')

var app = express()

app.set('trust proxy', true)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(serverConfig.post_action, PostActions.actions)
app.use(serverConfig.item_action, ItemActions.actions)

app.listen(serverConfig.port, () => {
    util.log(`Server is listening on port ${serverConfig.port}`)
});