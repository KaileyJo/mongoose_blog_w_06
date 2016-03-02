myApp.controller('ReviewController', ['$scope', '$http', function($scope, $http) {
    console.log('ReviewController');
    function getData() {
        $http.get('/blogPost').then(function (response) {
            $scope.blogPosts = response.data;
            console.log(response.data);

        });
    }
    getData();
}]);