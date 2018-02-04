// Main application configuration file
angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'ngAnimate','mainController', 'authServices', 'boardController', 'managementController'])

.config(function($httpProvider){
    //configuring app to all http requests
    $httpProvider.interceptors.push('AuthInterceptors');
});