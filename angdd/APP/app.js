angular.module("app", [
        'ngRoute',
        'app.controllers'
]).config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
              templateUrl: 'views/post.html',
              controller: 'PostController'
        }).when('/post/:id', {
              templateUrl: 'views/singlepost.html',
              controller: 'SinglepostController'
        }).when('/page/:id', {
                templateUrl: 'views/page.html',
                controller: 'PageController'
        }).otherwise({
                redirectTo: '/'
        });
  }]);
