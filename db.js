var mongoose = require('mongoose')

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/SocialNetwork', function() {
    console.log('mongodb connected')
})

module.exports = mongoose
