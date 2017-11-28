var express = require('express')
var router = require('express').Router()

router.get('/', function(req, res) {
    //res.sendFile(__dirname + '/layouts/posts.html')
    res.sendfile('layouts/posts.html')
})

router.use(express.static(__dirname + '/../assets'))

module.exports = router