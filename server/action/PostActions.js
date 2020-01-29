const DbPost = require('../db/DbPost');
const util = require('../util/Util')
const express = require('express');
const { Remarkable } = require('remarkable');

var post_action = express();

const config = {
    success: 'Success',
    error: "Error"
}

post_action.get('/query_posts_count_all', (req, res) => {
    DbPost.queryPostsCountAll().then(
        (resolve) => {
    //         var ip = req.headers['x-forwarded-for'] || 
    //  req.connection.remoteAddress || 
    //  req.socket.remoteAddress ||
    //  (req.connection.socket ? req.connection.socket.remoteAddress : null);
    //         console.log(ip)
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.send(JSON.stringify(resolve.rows[0]))
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    )
})

post_action.post('/insert_post', (req, res) => {
    DbPost.insertPost(req.body.title, req.body.subtitle, req.body.author, req.body.content, req.body.cover_img).then(
        (resolve) => {
            
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(config.success)
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    )
})

post_action.post('/query_post', (req, res) => {
    DbPost.queryPost(parseInt(req.body.id, 10)).then(
        (resolve) => {
            var md = new Remarkable({html: true})
            var res_post = resolve.rows[0];
            
            // util.log(md.render(resolve.rows[0].content))
            res_post.content = md.render(resolve.rows[0].content)
            // res_post.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(JSON.stringify(res_post));
        }
    ).catch(
        (reject) => {
            util.log(`Error: ${reject}`)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    );
})

post_action.post('/query_post_list', (req, res) => {
    DbPost.queryPostList(Number(req.body.count), Number(req.body.offset)).then(
        (resolve) => {
            util.log(`Sending ${resolve.rowCount} rows to ${req.ip} with ${req.ips}`)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(JSON.stringify(resolve.rows));
    }).catch(
        (reject) => {
        res.header("Access-Control-Allow-Origin", "*");
        util.log(`Error: ${reject}`)
        res.send(reject)
    });
});

exports.actions = post_action;