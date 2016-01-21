
angular.module("jsIntro",[])

angular.module("jsIntro")
	.controller("partOneTroller",["$scope", function($scope) {

		$scope.revealTitle = function() {

			$scope.myGreeting = "Boom! Here's the title! :)"
			$scope.hideTitleButton = true

		}

		$scope.revealList = function() {

			$scope.myList = ["Item One", "Item Two", "Item Three"]
			$scope.hideListButton = true

		}

		$scope.hideTitleButton = false
		$scope.hideListButton = false
}])