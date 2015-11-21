

var myApp = angular.module('parkingDemo', []);

myApp.controller('ParkinglotCtrl', function($scope){
	$scope.lots = lotInfo;
	$scope.lotId = 0;
	$scope.selectedLot = 0;

	$scope.setLot = function(newValue){
		$scope.lotId = newValue;
		$scope.selectedLot = $scope.lots[$scope.lotId];
	};

	$scope.total = function(q){
		var total = 0;
	  		$scope.lotId = q
		$scope.selectedLot = $scope.lots[$scope.lotId];

		angular.forEach($scope.selectedLot.lane, function(s){
		
				total+= s.availability;
				
	
		});


		return total;
	};



});

   

var lotInfo = [
	{
		"lotId" : 0,
		"name" : "lot 1",
		"totalSpace" : 30,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 2
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
		"lotId" : 1,
		"name" : "lot 2",
		"totalSpace" : 20,
		"lane" : [
			{
				"id" : 0,
				"name" : "lane 1",
				"totalSpace" : 10,
				"status" : "full",
				"availability" : 4
			},
			{
				"id" : 1,
				"name" : "lane 2",
				"totalSpace" : 10,
				"status" : "available",
				"availability" : 5
			}
		]
	}
];

	
