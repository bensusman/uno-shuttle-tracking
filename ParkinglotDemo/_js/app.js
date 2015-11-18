var myApp = angular.module('parkingDemo', []);

myApp.controller('ParkinglotCtrl', function($scope){
	$scope.lots = lotInfo;
	$scope.lotId = 0;
	$scope.selectedLot = 0;

	$scope.setLot = function(newValue){
		$scope.lotId = newValue;
		$scope.selectedLot = $scope.lots[$scope.lotId];
	};

});

var lotInfo = [
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
	}
];