angular.module('app.directives', [])
        .directive('navigationbar', [function(){
          return {
                  controller: ['$scope', '$http', function($scope, $http){
                          $http.get('/api/posts').success(function(data){
                                  $scope.pages = data;
                          });
                  }],
                  restrict: 'E',
                  templateUrl: 'partials/navigationbar.html',
                  replace: true,
          };
        }]);;
