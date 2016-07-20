angular.module('InventoryApp')
.component('userAdd', {
	templateUrl: '/templates/user/add.html',
	controller: [
	'$scope',
	'$http',
	'$location',
	function UserAddController($scope, $http, $location) {
		$scope.user = {};

		$scope.saveUser = function(){
			console.log($scope.user);
			$http.post('/users', $scope.user).then(function(response){
			 	// $scope.users = response.data;
			 	console.log(response);

			 	if(response.data.status == 'error') {
			 		alert(response.data.message);
			 	}else{
			 		$location.path('/users');
					$location.replace();
			 	}
			});
		}
		
	}
]
});