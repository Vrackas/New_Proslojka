;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        var vm = this;

        vm.solutionList = [
            {
                image:'content/img/homepage_solution/1.png',
                title:'ECN',
                text:'A high-tech multi-module product which serves as the basis for the whole system',
                link:'ecn'
            },
            {
                image:'content/img/homepage_solution/4 (2).png',
                title:'MT4/MT5/API Bridge',
                text:'Highly functional bridges – the ideal solution for all brokers.',
                link:'mt4'
            },
            {
                image:'content/img/homepage_solution/2.png',
                title:'Liquidity Solutions',
                text:'We offer several options for obtaining high-quality liquidity',
                link:'liquidity'
            },
            {
                image:'content/img/homepage_solution/3.png',
                title:'Trade Settings',
                text:'A wide range of features which provide customers with the ability to customise order execution',
                link:'trade'
            },
            {
                image:'content/img/homepage_solution/5 (2).png',
                title:'Provider management',
                text:'Automatic elimination of imbalances in liquidity providers',
                link:'provider'
            },
            {
                image:'content/img/homepage_solution/3.png',
                title:'Floating leverage',
                text:'A service which provides customers with a flexible solution for the margin requirements',
                link:'floating'
            },
            {
                image:'content/img/homepage_solution/6.png',
                title:'Auto Risk Management',
                text:'An intelligent system for automatic management of the company’s risks',
                link:'auto_risk'
            },
            {
                image:'content/img/homepage_solution/4 (2).png',
                title:'API',
                text:'A software interface which allows to trade without the trading terminal',
                link:'api'
            }
        ]


    }
})();