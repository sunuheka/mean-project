angular.module('InventoryApp')
.component('userList', {
	templateUrl: '/templates/user/list.html',
	controller: [
	'$scope',
	'$http',
	function UserListController($scope, $http) {

		$http.get('/users').then(function(response){
			$scope.users = response.data;
		});
	}
]
});