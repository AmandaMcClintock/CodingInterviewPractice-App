var express     = require('express')
var bodyParser  = require('body-parser')
var Post        = require('./models/post')

var app = express()
app.use(bodyParser.json())

/*
app.get('/api/posts', function(req, res, next) {
    Post.find(function(err, posts) {
        if(err) { return next(err) }
        res.json(posts)
    })
})
*/
app.get('/api/posts', function(req, res) {
    res.json([
        {
            username: 'Amanda McCliintock',
            body: 'Anything really. Just work.'
        }
    ])
})

//Using Mongoose models with the post endpoint
app.post('/api/posts', function(req, res, next) {
    console.log('post received')
    console.log(req.body.username)
    console.log(req.body.body)
    // var post = new Post({
    //     username: req.body.username,
    //     body: req.body.body
    // })
    // post.save(function(err, post) {
    //     if(err) { return next(err) }
         res.send(201)//.json(post)
    // })
})

app.listen(3000, function() {
    console.log('Server listening on', 3000)
})

/*
 * To test use curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\": \"Amanda\", \"body\":\"Something Clever\"}" localhost:3000/api/posts
 * Alternatively, test in brower with http://localhost:3000/api/posts
 */