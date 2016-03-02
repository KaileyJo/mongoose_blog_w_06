var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/create', {
                templateUrl: '/views/templates/create.html',
                controller: 'CreateController'
            })
            .when('/review', {
                templateUrl: '/views/templates/review.html',
                controller: 'ReviewController'
            })
            .otherwise({
                redirectTo: 'create'
            });
    }]);

