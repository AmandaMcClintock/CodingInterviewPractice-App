var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/SocialNetwork', function() {
    console.log('mongodb connected')
})

module.exports = mongoose
