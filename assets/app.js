var app = angular.module('app', [])

app.service('PostsSvc', function($http) {
    this.fetch = function() {
        return
    }

app.controller('PostsCtrl', function ($scope, $http) {
    $scope.addPost = function() {
        $http.post('/api/posts', { 
            username: 'Manda', 
            body: $scope.postBody
        }).success(function(posts) {
            $scope.posts.unshift(post)
            $scope.posts = null
        })
    }
})

$http.get('/api/posts').success(function(posts) {
    $scope.posts = posts
})