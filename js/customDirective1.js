angular.module('customDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name = 'John';
  }])
  .directive('myCustomDirective', function() {
    return {
      template: 'Name: {{name}}'
    };
  });