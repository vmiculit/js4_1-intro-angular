
angular.module("jsIntro",[])

angular.module("jsIntro")
	.controller("partThreeTroller",["$scope", function($scope) {

		$scope.popItSwitch = false

		$scope.switchMyPopup = function() {
			$scope.popItSwitch = true
		}

		$scope.shutItDown = function() {
			$scope.popItSwitch = false
		}

}])