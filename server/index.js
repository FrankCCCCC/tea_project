const db = require('./db.js');
const express = require('express');
const { Remarkable } = require('remarkable');
const bodyParser = require('body-parser');
const cors = require('cors')

var app = express()
var post_action = express();
const urlencode_parser = bodyParser.urlencoded({extended: false});

const config = {
    success: 'Success',
    error: "Error"
    
}

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

post_action.get('/query_posts_count_all', (req, res) => {
    db.query_posts_count_all().then(
        (resolve) => {
            console.log(resolve)
            res.send(JSON.stringify(resolve.rows[0]))
        }
    ).catch(
        (reject) => {
            console.log("Error: ", reject);
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    )
})

post_action.post('/insert_post', (req, res) => {
    db.insert_post(req.body.title, req.body.subtitle, req.body.author, req.body.content, req.body.cover_img).then(
        (resolve) => {
            
            console.log(resolve);
            res.header("Access-Control-Allow-Origin", "*");
            res.send(config.success)
        }
    ).catch(
        (reject) => {
            console.log("Error: ", reject);
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    )
})

post_action.post('/query_post', (req, res) => {
    console.log(req.body)
    db.query_post(parseInt(req.body.id, 10)).then(
        (resolve) => {
            var md = new Remarkable({html: true})
            var res_post = resolve.rows[0];
            
            // console.log(resolve)
            // console.log(md.render(resolve.rows[0].content))
            res_post.content = md.render(resolve.rows[0].content)
            // res_post.content = md.render('Some Markdown text with <span style="color:blue">some *blue* text</span>.')
            // console.log(res_post)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(JSON.stringify(res_post));
        }
    ).catch(
        (reject) => {
            console.log("Error: ", reject)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    );
})

post_action.post('/query_post_list', (req, res) => {
    db.query_post_list(Number(req.body.count), Number(req.body.offset)).then(
        (resolve) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(JSON.stringify(resolve.rows));
    }).catch(
        (reject) => {
        res.header("Access-Control-Allow-Origin", "*");
        console.log("Error: ", reject);
        res.send(reject)
    });
});

app.use("/post_action", post_action)

app.listen(8000);