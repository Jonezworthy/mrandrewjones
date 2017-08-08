angular.module('MrAndrewJones').controller('controllerContact', function ($scope, $http, $mdDialog, $mdMedia, $window) {
    var contact = this;
    contact.slider = 10;
    contact.change = function () {
        if (contact.slider > 80) {
            contact.showContactDetails();
        }
    };
    contact.showContactDetails = function () {
        contact.human = true;
        $http.get('/api/contactdetails/').then(function (res) {
            contact.info = res.data;
        });
    };

    if ($mdMedia('xs') || $mdMedia('sm')) {
        contact.showVerification = false;
        contact.showContactDetails();
    } else {
        contact.showVerification = true;
    }
});