;(function () {
    angular
        .module('app')
        .config(mainConfig);


    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $locationProvider) {


        $urlRouterProvider.otherwise('/home');


        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',
            })
            // $locationProvider.html5Mode(true);


    }


})();

