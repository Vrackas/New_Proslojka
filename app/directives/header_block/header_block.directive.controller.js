;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$timeout'];

    function HeaderBlockController($state, $timeout) {
        let vm = this;

        vm.contentActive = false;

        vm.langOpen = langOpen;
        vm.headerWrapperOpen = headerWrapperOpen;
        vm.headerWrapperClose = headerWrapperClose;
        vm.getStarted = getStarted;

        function langOpen(style) {
            console.log($(style));
            $(style).addClass('active');

            $(document).mouseup(function (e) {
                let container = $(style);
                if (container.has(e.target).length === 0) {
                    container.removeClass('active');
                }
            });
        }


        function headerWrapperOpen() {
            $('.header_wrapper').addClass('active');
            $(document).mouseup(function (e) {
                let container = $('.header_wrapper');
                if (container.has(e.target).length === 0) {
                    container.removeClass('active');
                }
            });
        }

        function headerWrapperClose() {
            $('.header_wrapper').removeClass('active');
        }


        function getStarted() {
            location.href = 'https://www.desk.iscopay.com/';

        }

        $(document).ready(function () {
            $(window).scroll(function () {
                let wScroll = $(this).scrollTop();

                if (wScroll > $('#section').offset().top + 50) {
                    console.log("hi")
                    $('#header_site').css({
                        'background': 'rgba(37, 42, 54, 0.94)',
                        'transition': '.8s'
                    })
                }
                else if (wScroll > $('#section').offset().top - 60) {
                    $('#header_site').css({
                        'background': 'transparent',
                        'transition': '.8s'
                    })
                }

            })
        })
    }

})();
