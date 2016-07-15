angular.module('InventoryApp')
.component('userList', {
	template: '<ul><li ng-repeat="user in users">{{ user.name }}</li></ul>',
	controller: [
	'$scope',
	function UserController($scope) {
		$scope.users = [
			{name: 'asdasd'},
			{name: 'qweqweqwe'}
		];
	}
]
});