angular.module("myServices", [])
	.factory("Service", function( $http, $scope ){
		function getData(){
			var apiKey = 'AIzaSyDqe_No4DSc6W6ATqnLuNoRsDhED5zTFOc';
			var myLoc = "41.3798886,2.1750516";
			var radiusSearch = 1000;
			//var apuUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY
			var apuUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=<COORDS>&radius=<RADIUS>&key=<YOUR_API_KEY>'
			apiUrl = apiUrl.replace('<YOUR_API_KEY>',apiKey).replace('<COORDS>',myLoc).replace('<RADIUS>',radiusSearch);
			//return $http.get( apiUrl );
			$scope.$broadcast('DataReceived', $http.get( apiUrl )) // $emit
		}
		
		
//		$scope.broadcast('event-name', params...) // $emit
		// return {
			// $scope.getData: getData
		// }
	})