var myApp = angular.module('parkingDemo', []);
		
/* retriev data from the server */
myApp.controller('ParkinglotCtrl', function($scope, $http, $interval){
	
	$scope.lotId = 0;			/* store each lot id */
	$scope.selectedLot = 0;
	$scope.myid = 0;
	
	$scope.getData = function(){
		$http.get('https://api.mongolab.com/api/1/databases/uno-parking/collections/lots/?apiKey=NPfFTE_uH7ZPWAhQOfgHhnEg26bUvkIB')
		.success(function(data){
			$scope.lots = data[0].lots;
		})
	};
	
	$interval(function(){
		$scope.getData();
	}, 5000);

	/* to pass the lot id each setLot is called */
	$scope.setLot = function(newValue){
		$scope.lotId = newValue;
		$scope.selectedLot = $scope.lots[$scope.lotId];
	};

	/* to calculate the total avialable space for each lot */
	$scope.total = function(q){
		var total = 0;
		$scope.myid= q;

		$scope.myselectedLot = $scope.lots[$scope.myid];

        angular.forEach($scope.myselectedLot.lanes, function(s){
        
                total+= s.availability;
         });

        return total;
	};
});
