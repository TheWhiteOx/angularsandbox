angular.module('angularApp', []).
	controller('angularController', function($scope) {
		$scope.storage = [];

		var randomGenerator = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		$scope.getRandom = function() {
			$scope.storage = [];
			for(var i = 0; i < 20; i++) {
				var obj = {
					value: randomGenerator(0, 1000)
				};

				$scope.storage.push(obj);
			} 
		};

	});