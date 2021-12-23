angular.module('MrAndrewJones').controller('controllerNavigation', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var navigation = this;

    navigation.menuOptions = [
        { symbol: 'home', title: 'Home', url: '/' },
        { symbol: 'code', title: 'Technologies', url: '/technologies/' },
        { symbol: 'description', title: 'Personal Portfolio', url: '/portfolio/' },
        { symbol: 'work', title: 'Work', url: '/work/' },
        { symbol: 'assignment', title: 'Education', url: '/education/' },
        { symbol: 'account_box', title: 'More about me', url: '/me/' },
        { symbol: 'phone', title: 'Contact me', url: '/contact/' },
        { symbol: 'videogame_asset', title: 'Pokemon or Tech Game', url: '/game/' },
    ];

    navigation.toggleNavigation = function() {
        navigation.showNavigation = !navigation.showNavigation;
    };
});