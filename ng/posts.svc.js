angular.module('app')
.service('PostsSvc', function ($http) {
    this.fetch = function() {
        return $http.get('api/posts')
    }
    this.create = function (posts) {
        return $http.post('api/posts', post)
    }
})