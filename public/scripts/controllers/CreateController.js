myApp.controller('CreateController', ['$scope', '$http', function($scope, $http) {
    console.log('Create Controller');

    $scope.title = '';
    $scope.author = '';
    $scope.date = '';
    $scope.content = 'Enter Post...';

    $scope.postBlog = function () {
        var blogPost = {
            title: $scope.title,
            author: $scope.author,
            date: $scope.date,
            content: $scope.content
        };

        $http.post('/blogPost', blogPost).then(function (response) {
            $scope.blogPosts = response.data;
        });
    };
}]);