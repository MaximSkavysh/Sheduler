angular.module('userServices', [])

	.factory('User', function($http) {
		var userFactory = {}; // Create the User object

		// User.create(regData)
		userFactory.create = function(regData) {
			return $http.post('/api/users', regData); // Return data from end point to controller
		};
		userFactory.renewSession =function (username) {
			return $http.get('/api/renewToken/' + username);
        };

		return userFactory;
	});
