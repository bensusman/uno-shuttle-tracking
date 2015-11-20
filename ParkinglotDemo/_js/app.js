var myApp = angular.module('parkingDemo', []);
		
/* retriev data from the server */
myApp.controller('ParkinglotCtrl', function($scope, $http){
	$http.get('https://api.mongolab.com/api/1/databases/uno-parking/collections/lots/?apiKey=NPfFTE_uH7ZPWAhQOfgHhnEg26bUvkIB')
		.success(function(data){
			$scope.lots = data[0].lots;
		})

	$scope.lotId = 0;			/* store each lot id */
	$scope.selectedLot = 0;
	$scope.myid = 0;

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

var lotInfo =
{
	"id": 234,
	"lots" :[
	{
		"id" : 0,
		"name" : "lot 1",
		"totalSpace" : 30,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 0
			},
			{
				"id" : 1,
				"name" : "lane 2",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 5
			},
			{
				"id" : 3,
				"name" : "lane 3",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 3
			}
		]
	},
	{
		"id" : 1,
		"name" : "lot 2",
		"totalSpace" : 20,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 0
			},
			{
				"id" : 1,
				"name" : "lane 2",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 5
			}
		]
	},
	{
		"id" : 2,
		"name" : "lot 3",
		"totalSpace" : 30,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 20,
				"status" : "full",
				"availability" : 0
			},
			{
				"id" : 1,
				"name" : "lane 2",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 5
			}
		]
	},
	{
		"id" : 3,
		"name" : "lot 4",
		"totalSpace" : 30,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 0
			},
			{
				"id" : 1,
				"name" : "lane 2",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 6
			},
			{
				"id" : 3,
				"name" : "lane 3",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 2
			}
		]
	},
	{
		"id" : 4,
		"name" : "lot 5",
		"totalSpace" : 30,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 0
			},
			{
				"id" : 1,
				"name" : "lane 2",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 0
			},
			{
				"id" : 3,
				"name" : "lane 3",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 8
			}
		]
	}]
};