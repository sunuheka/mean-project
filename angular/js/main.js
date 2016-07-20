require('../../bower_components/angular/angular');
require('../../bower_components/angular-route/angular-route');

angular.module('InventoryApp', ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
	$locationProvider.hashPrefix('!');

    $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/add', {
          template: '<user-add></user-add>'
        }).
        otherwise('/users');
}]);

require('./user/userlistcomponent');
require('./user/useraddcomponent');