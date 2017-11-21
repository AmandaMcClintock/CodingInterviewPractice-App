var mongoose = require('mongoose')

mongoose.connect('SocialNetwork', function() {
    console.log('mongodb connected')
})

module.exports = mongoose
