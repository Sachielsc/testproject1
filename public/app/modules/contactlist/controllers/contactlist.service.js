angular.module('businesscard').service('BusinessCardService', ['$log','$http', function($log,$http){

	this.getSpecifyProduct = function(pid){
		var specifyProductDetail = $http({
			method:'GET',
			url: '//jsonplaceholder.typicode.com/users',
		});
		return specifyProductDetail;
	}

	}
]);
