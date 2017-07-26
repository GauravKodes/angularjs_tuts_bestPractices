var app = angular.module('phonecatApp', [
    'phoneList',
]);

app.controller('WorldController', function WorldController($scope) {
$scope.World = [
    {
      name: 'India'
    }, {
        name:'USA'
    }
  ];
});