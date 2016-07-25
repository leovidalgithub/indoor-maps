angular.module('myControllersContainer', ['myServices'])
	.controller('mainCtrl', function ($rootScope, $scope, Service) {
		$scope.$on('DataReceived', function( event, dataLocation ){
			console.log("Data received...");
			console.log( dataLocation );
		})
//		$scope.watch('myVar', function() {
//        	alert('hey, myVar has changed!');
//    	});
//		$scope.on('event-name', function( event, params ){
//	
//		} )

	})