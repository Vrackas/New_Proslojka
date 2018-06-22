;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        let vm = this;

        vm.solutionList = [
            {
                image:'content/img/homepage_solution/1.png',
                title:'lorem ipsum',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at corporis dignissimos facilis',
            },
            {
                image:'content/img/homepage_solution/2.png',
                title:'lorem ipsum dolor',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at corporis dignissimos facilis inventore, libero '
            },
            {
                image:'content/img/homepage_solution/3.png',
                title:'lorem ipsum dol',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at corporis dignissimos facilis inventore, libero non perferendis quis sapiente velit?'
            },
            {
                image:'content/img/homepage_solution/4 (2).png',
                title:'lorem ip',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                image:'content/img/homepage_solution/5 (2).png',
                title:'lorem ipsum dolor jhfdnf',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at '
            },
            {
                image:'content/img/homepage_solution/6.png',
                title:'lorem',
                text:'Lorem ipsum dolor sit amet, consectetur'
            }
        ]


    }
})();