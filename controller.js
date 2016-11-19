angular.module('myApp', [])

.directive('optIn', function() {
	return {
		templateUrl: 'signup.html',
		restrict: 'AE',
		transclude: true,
	}
})

.directive('footerStuff', function() {
	return {
		templateUrl: 'footerStuff.html',
		restrict: 'AE',
		transclude: true,
	}
});