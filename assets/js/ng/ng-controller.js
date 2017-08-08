var angularMaterialSettings = function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('orange').accentPalette('indigo').backgroundPalette('blue').warnPalette('red');
};

angular.module('MrAndrewJones', ['ngMaterial', 'ngMessages', 'ngSanitize', 'ngRoute']).config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: '/assets/html/default.html'
                    , controller: 'controllerMain'
                })
                .when('/me/', {
                    templateUrl: '/assets/html/me.html'
                    , controller: 'controllerMain'
                })
                .when('/work/', {
                    templateUrl: '/assets/html/work.html'
                    , controller: 'controllerMain'
                })
                .when('/portfolio/', {
                    templateUrl: '/assets/html/portfolio.html'
                    , controller: 'controllerMain'
                })
                .when('/education/', {
                    templateUrl: '/assets/html/education.html'
                    , controller: 'controllerMain'
                })
                .when('/contact/', {
                    templateUrl: '/assets/html/contact.html'
                    , controller: 'controllerMain'
                })
                .when('/technologies/', {
                    templateUrl: '/assets/html/technologies.html'
                    , controller: 'controllerMain'
                });

        $locationProvider.html5Mode(true);

    }])
        .controller('controllerMain', function ($scope, $http, $mdDialog, $mdMedia, $window, $route, $routeParams, $location) {
            var controller = this;

            $scope.controller.isHomepage = ($location['$$path'] === '/');
            controller.convertToXML = function (oObject) {
                var xml = '<span class="key">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;</span>';
                xml += '\n\t<span class="key">&lt;Technologies&gt;</span>\n';
                for (var category in oObject) {
                    xml += '\t\t<span class="key">&lt;' + category.replace(/\s/g, "") + '&gt;</span>';
                    for (var subcategory in oObject[category]) {

                        for (var i = 0; i < oObject[category][subcategory].length; i++) {
                            xml += '\n\t\t\t<span class="key">&lt;' + subcategory.replace(/\s/g, "") + '&gt;</span>' + oObject[category][subcategory][i].replace(/(\&)/, "&amp;") + '<span class="key">&lt;/' + subcategory.replace(/\s/g, "") + '&gt;</span>';
                        }

                    }
                    xml += '\n\t\t<span class="key">&lt;/' + category.replace(/\s/g, "") + '&gt;</span> \n';
                }
                xml += '\t<span class="key">&lt;/Technologies&gt;</span>';
                return xml;
            };
            controller.convertToJSON = function (oObject) {
                var json = JSON.stringify(oObject, null, 4);
                //http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
                json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            };
         

            controller.toggleDisplayMode = function (displayMode) {
                controller.displayMode = displayMode;
            };
            controller.toggleDisplayMode('text');

            controller.isMobile = ($mdMedia('md') || $mdMedia('sm') || $mdMedia('xs'));

            if (!window.hasPrintedMemo) {

                var defaultFormatting = 'background:#31364c;color: #ffffff;';
                console.log('%cWelcome to my portfolio site :)', 'background:#31364c;color: #ffffff;font-size:12px;font-size:40px;padding:10px 10px 250px 10px;');

                console.log('%cI\'m guessing you are a developer your self if you\'re looking at this!', defaultFormatting);

                console.log('\n\n');

                console.log('%cHere\'s some useful information for you:', defaultFormatting + 'font-weight:bold;font-size:18px;');
                console.log('%cMy GitHub (Open Source Stuff) : https://github.com/Jonezworthy', defaultFormatting);
                console.log('%cMy Private GitHub (Mostly technical tests) : https://github.com/Jonezworthy-private', defaultFormatting);

                console.log('\n\n');

                console.log('%cDon\'t forget to check out these subreddits too!:', defaultFormatting + 'font-weight:bold;font-size:18px;');
                console.log('%cProgrammerHumor : https://www.reddit.com/r/ProgrammerHumor/', defaultFormatting);
                console.log('%cWebDev : https://www.reddit.com/r/webdev/', defaultFormatting);
                console.log('%cJavaScript : https://www.reddit.com/r/javascript/', defaultFormatting);

                window.hasPrintedMemo = true;
            }
        });
angular.module('MrAndrewJones').config(angularMaterialSettings);
