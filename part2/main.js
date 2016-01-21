
angular.module("jsIntro",[])

angular.module("jsIntro")
	.controller("partTwoTroller",["$scope", function($scope) {

		$scope.color = [
			false,
			false,
			false,
			false
			]

		$scope.lightItUp = function(n) {
			$scope.color[n] = true
		}

		$scope.lightItDown = function(n) {
			$scope.color[n] = false
		}

		$scope.boom = "!"

		$scope.hideMyLink = [
			true,
			true,
			true
			]

		$scope.areYouSure = function(n, event) {
			console.log(event)
			if (confirm("Are you sure you want to go there?")) {
			} else {
				event.preventDefault()
				$scope.hideMyLink[n] = false
			}
		}
}])