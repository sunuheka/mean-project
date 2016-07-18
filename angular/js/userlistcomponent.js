angular.module('InventoryApp')
.component('userList', {
	template: '<ul><li ng-repeat="user in users">{{ user.username }}</li></ul>',
	controller: [
	'$scope',
	'$http',
	function UserController($scope, $http) {

		$http.get('/users').then(function(response){
			$scope.users = response.data;
		});
	}
]
});