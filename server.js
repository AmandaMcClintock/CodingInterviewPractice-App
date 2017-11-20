var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendfile('layouts/posts.html')
})

app.listen(3000, function() {
        console.log('Server listening on', 3000)
})

//Using Mongoose models with the post endpoint
var Post = require('./models/post')
app.post('/api/posts', function(req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })

    post.save(function(err, post) {
        if(err) { return next(err) }
        res.json(201, post)
    })
})

/*
 * To test use curl -v -H "Content-Type: application/json" -XPOST --data
 * Alternatively, test in brower with http://localhost:3000/api/posts
 */