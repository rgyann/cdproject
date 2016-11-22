angular.module('app.controllers', [
        'app.directives'
])
        .controller('PostController', ['$scope', '$http', function($scope, $http) {
                $http.get('api/posts').success(function(data) {
                        console.log(data);
                        $scope.posts = data.entries;
                });
        }])
        .controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
                $http.get('data/pages.json').success(function(data) {
                        $scope.page = data[$routeParams.id];
                });
        }])
        .controller('SinglepostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
                $http.get('data/posts.json').success(function(data) {
                        $scope.post = data[$routeParams.id];
                });
        }]);
