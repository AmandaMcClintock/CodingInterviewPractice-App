var express     = require('express')
var bodyParser  = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.use('/api/posts', require('./controllers/api/posts.js'))
app.use(require('./controllers/static'))

app.listen(3000, function() {
    console.log('Server listening on', 3000)
})

/*
 * To test use curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\": \"Amanda\", \"body\":\"Something Clever\"}" localhost:3000/api/posts
 * Alternatively, test in brower with http://localhost:3000/api/posts
 */