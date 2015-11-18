var myApp = angular.module('parkingDemo', []);

myApp.controller('ParkinglotCtrl', function($scope){
	$scope.lots = lotInfo;

});

var lotInfo = [
	{
		"id" : 0,
		"name" : "lot 1",
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
	}
];