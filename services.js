services.js
angular.module("myServices", [])
	.factory("Service", function( $http, $scope ){
		function getData(){
			var apiUrl = "".replace('','');
			return $http.get( apiUrl );
		}
		
		
//		$scope.broadcast('event-name', params...) // $emit
		return {
			.getData: getData
		}
	})