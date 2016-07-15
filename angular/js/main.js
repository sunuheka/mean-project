require('../../bower_components/angular/angular');
require('../../bower_components/angular-route/angular-route');

angular.module('InventoryApp', ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
	$locationProvider.hashPrefix('!');

    $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        otherwise('/users');
}]);

require('./userlistcomponent');