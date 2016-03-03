myApp.controller('ReviewController', ['$scope', '$http', function($scope, $http) {
    console.log('ReviewController');

    //$scope.postUpdate;
    $scope.currentID;

    $scope.title = '';
    $scope.author = '';
    $scope.date = '';
    $scope.content = '';



    function getData() {
        $http.get('/blogPost').then(function (response) {
            $scope.blogPosts = response.data;
            console.log(response.data);


        });
    }
    getData();

    $scope.delete = function (id) {

        $http.delete('/blogPost/' + id).then( function(response) {
            console.log('successful deletion');
            alert('deletion successful!');
            getData();
        });

    };

    $scope.update = function(id) {
        //$scope.postUpdate = true;
        $scope.currentID = id;

    };

    $scope.save = function(id, title, date, content, author) {
        var data = {
            title: title,
            date: date,
            content: content,
            author: author
        };
        $http.put('/blogPost/' + id, data).then(function(response){

            getData();
            $scope.postUpdate = false;
        });
    };
}]);

