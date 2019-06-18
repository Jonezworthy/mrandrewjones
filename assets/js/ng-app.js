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
angular.module('MrAndrewJones').controller('controllerEducation', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var education = this;
    education.oExperiences = {

        'Qualifications': [{
            title: 'M201 MongoDB Performance',
            issuer: 'MongoDB University',
            date: 'October 2018',
            grade: '100% (Pass)',
            certificateUrl: 'http://university.mongodb.com/course_completion/095f0ed9-9292-494c-9b0d-e3932d98'
        }, {
            title: 'M301 MongoDB Security',
            issuer: 'MongoDB University',
            date: 'October 2018',
            grade: '97% (Pass)',
            certificateUrl: 'http://university.mongodb.com/course_completion/0fcdd3f7-832c-4044-843f-1d85d25d'
        }, {
            title: 'HTML5 Coding Essentials and Best Practices',
            issuer: 'W3Cx',
            date: 'April 2017',
            grade: '79% (Pass)'
        }, {
            title: 'Introduction to jQuery',
            issuer: 'Microsoft',
            date: 'April 2017',
            grade: '79% (Pass)',
            certificateUrl: false
        }, {
            title: 'Windows PowerShell basics',
            issuer: 'Microsoft',
            date: 'April 2017',
            grade: '83% (Pass)',
            certificateUrl: false
        }, {
            title: 'MongoDB for Node.js Developers',
            issuer: 'MongoDB University',
            date: 'December 2016',
            grade: '92% (Pass)',
            certificateUrl: 'http://university.mongodb.com/course_completion/41fb9adfd648415d87c33be96a9db3be'
        }, {
            title: 'Introduction to MongoDB using the MEAN stack',
            issuer: 'MongoDB University',
            date: 'November 2016',
            grade: '89% (Pass)',
            certificateUrl: 'https://courses.edx.org/certificates/e2ddeb18ae3a4eb8abe3a10ddfbc036e'
        }, {
            title: 'Querying with Transact-SQL',
            issuer: 'Microsoft',
            date: 'November 2016',
            grade: '74% (Pass)',
            certificateUrl: 'https://courses.edx.org/certificates/c0c99a6e14c2444b8a36c43988825266'
        }, {
            title: 'Information Systems and Computer Applications',
            issuer: 'University of Valencia',
            date: 'November 2016',
            grade: '96% (Pass)',
            certificateUrl: 'https://courses.edx.org/certificates/b2db5090136440708718ebeab1c20455'
        }]
    };

});
angular.module('MrAndrewJones').controller('controllerNavigation', function ($scope, $http, $mdDialog, $mdMedia, $window) {
    var navigation = this;

    navigation.menuOptions = [
        {symbol: 'home', title: 'Home', url: '/'}
        , {symbol: 'code', title: 'Technologies', url: '/technologies/'}
        , {symbol: 'description', title: 'Portfolio', url: '/portfolio/'}
        , {symbol: 'work', title: 'Work', url: '/work/'}
        , {symbol: 'assignment', title: 'Education', url: '/education/'}
        , {symbol: 'account_box', title: 'More about me', url: '/me/'}
        , {symbol: 'phone', title: 'Contact me', url: '/contact/'}
    ];

    navigation.toggleNavigation = function () {
        navigation.showNavigation = !navigation.showNavigation;
    };
});
angular.module('MrAndrewJones').controller('controllerPortfolio', function ($scope, $http, $mdDialog, $mdMedia, $window) {
    var portfolio = this;
    portfolio.oExperiences = {
        'Personal Projects': {
            experiences: [
                {
                    title: 'FatReminder'
                    , url: 'http://www.fatreminder.com'
                    , stack: 'MEAN'
                    , preview: '/assets/img/portfolio/fatreminder.jpg'
                    , details: 'Fat Reminder is a service born of the idea that I could lose a few pounds! \n\
                    <br /> I always struggled to keep motivation throughout the day and end up straying from my diet. \n\
                    <br /> The whole site is powered by the MEAN stack (MongoDB, Express, Angular and Node) + SASS'
                }
                , {
                    title: 'Inter Webz'
                    , url: 'http://www.inter-webz.com'
                    , stack: 'LAMP'
                    , preview: '/assets/img/portfolio/interwebz.jpg'
                    , details: 'Inter-Webz is a compilation of the most brilliant content from best social feeds around. \n\
                    <br /> The entire website’s contents is powered from Anisos’s API The best of Inter-Webz is posted automatically on to the <a class="md-primary" href="https://www.facebook.com/InterWebzDotCom">Inter-Webz’ facebook page</a> Inter-Webz is very new, and very much still a work in progress '
                }
                , {
                    title: 'Anisos'
                    , url: 'http://www.anisos.com'
                    , stack: 'LAMP'
                    , preview: '/assets/img/portfolio/anisos.jpg'
                    , details: 'Anisos is a social media API which gathers posts/videos/images from social networks. \n\
                    <br /> Anisos has a very basic non restful API which you can use to access the information you have gathered from your social networks. '
                }
                , {
                    title: 'RedditchWeb'
                    , url: 'http://www.redditchweb.co.uk'
                    , stack: 'LAMP'
                    , preview: '/assets/img/portfolio/redditchweb.jpg'
                    , details: 'RedditchWeb.co.uk is the web site I had for my web design/development company \n\
                    <br /> I have now migrated it to a WordPress installation for ease-of-use'
                }
            ]
        }
        , 'Freelance Websites': {
            experiences: [
                {
                    title: 'JordanSaws.co.uk'
                    , url: 'http://www.jordan-saws.co.uk'
                    , stack: 'LAMP'
                    , preview: '/assets/img/portfolio/jordan.jpg'
                    , details: 'A custom built e-commerce web site I made for a local company called Economy Saw Services LTD.'
                }
                , {
                    title: 'Midland Wire Rope'
                    , url: 'http://www.midlandwirerope.com/'
                    , stack: 'LAMP'
                    , preview: '/assets/img/portfolio/midland.jpg'
                    , details: 'A content managed web site'
                }
                , {
                    title: 'Midlands Lubricants'
                    , url: ''
                    , stack: 'LAMP (WordPress)'
                    , preview: '/assets/img/portfolio/midlandlubricants.jpg'
                    , details: 'A WordPress powered web site'
                }
                , {
                    title: 'Hanging Garden UK'
                    , url: ''
                    , stack: 'LAMP'
                    , preview: '/assets/img/portfolio/hanging.jpg'
                    , details: 'A content managed web site'
                }
            ]
        }
        , 'Android Apps': {
            experiences: [
                {
                    title: 'Utta Bliss'
                    , url: 'https://play.google.com/store/apps/details?id=com.uttabliss.app'
                    , urlTitle: 'View on Google\'s Play Store'
                    , stack: 'Ionic'
                    , preview: '/assets/img/portfolio/uttabliss.png'
                    , details: 'Utta Bliss, the totally free dating app'
                }
                ,{
                    title: 'Cruise.co.uk Official App'
                    , url: ''
                    , urlTitle: 'In alpha testing'
                    , stack: 'Java'
                    , preview: '/assets/img/portfolio/cruise.jpg'
                    , details: 'I am the sole author for the official Cruise.co.uk app. The main functionality of the app is it a web view of the mobile site, but with a pull notification service.'
                }
                ,{
                    title: 'Stand Up! (for scrum)'
                    , url: 'https://play.google.com/store/apps/details?id=uk.co.mrandrewjones.standup&hl=en'
                    , urlTitle: 'View on Google\'s Play Store'
                    , stack: 'Java'
                    , preview: '/assets/img/portfolio/standup.jpg'
                    , details: 'Stand Up! Is an app I made to give me some space on my phone where I can take note of the impediments, and other tasks that I work through during the day, so I have a more productive stand up the next day.'
                }
            ]
        }
        , 'Github Repositories': {
            description: 'Please note, only my open source code is available via GitHub, I have a private Subversion server that hosts 90% of my code'
            , experiences: [
                {
                    title: 'GitHub '
                    , stack: 'Open Source Projects'
                    , url: 'https://github.com/Jonezworthy'
                    , detail: 'This is my public GitHub - for anyone to see and contribute to'
                }
                , {
                    title: 'Github'
                    , stack: 'Technical Tests'
                    , url: 'https://github.com/Jonezworthy-private'
                    , detail: 'This is my private GitHub - mainly for technical tests for recruiters'
                }
            ]
        }

    };

});
angular.module('MrAndrewJones').controller('controllerTechnology', function ($scope, $http, $mdDialog, $mdMedia, $window) {
    var tech = this;
    this.searchValues = {};
    this.searchKeys = {};
    this.searchCategories = {};
    this.filterResults = true;

    tech.oTechnologies = {
        /* ************************************** */
        'Server Side': {
            'Server Languages': ['JavaScript (NodeJS) (ES6, ES2016+)', 'NodeJS with Express', 'PHP 5.1 -> 7 (Procedural, OOP, MVC)', 'Java'],
            'Databases': ['MongoDB', 'MSSQL', 'MySQL', 'PostgreSQL', 'CosmosDB'],
            'Hosting': ['Microsoft Azure', 'AWS', 'UK Fast CloudFlex'],
            'Operating Systems': ['Windows', 'Linux (Ubuntu/Gentoo/CentOS)', 'Android'],
            'Apache': ['Virtual Hosts', 'Rewrite Rules', 'Reverse Proxy'],
            'NginX': ['Server Definition', 'Reverse Proxy'],
            'Templating': ['Smarty', 'Jade/Pug', 'EJS', 'Handlebars'],
            'Other': ['PHP5-FPM', 'Mongoose']
        },
        'Client Side': {
            'Client Languages': ['JavaScript (OOP, OL, Prototyping, ES6, ES2016+)', 'HTML & HTML5', 'CSS & CSS3 & SASS', 'TypeScript'],
            'JavaScript Libraries or Frameworks': ['AngularJS 1.5', 'Angular2 (4+)', 'Ionic 3+', 'jQuery (1.1.12 -> 1.7.2 mostly)', 'jQuery UI'],
            'Caching': ['Local Storage API', 'Session Storage API', 'ETag', 'Expires headers'],
            'Compatibilities': ['normalize.css', 'modernizr.js', 'polyfills'],
            'CSS Libraries or Frameworks': ['Angular Materials', 'Bootstrap', 'Font Awesome']
        },
        'Principles': {
            'Design Patterns': ['MVC/MVP/SoC', 'Programming Design Patterns', 'RESTful APIs', 'Mobile first'],
            'Stacks': ['LASP', 'LAMP', 'WAMP', 'MEAN', 'SEAN'],
            'Testing': ['Test-driven Development', 'Unit/Automated/Acceptance Testing', 'Regression Testing', 'JasmineJS', 'KarmaJS', 'MochaJS + ShouldJS'],
            'Continuous Integration': ['Jenkins', 'Gulp (Task Management)', 'Visual Studio Pipelines'],
            'Security': ['OWASP', 'XSS', 'SQL Injection', 'Session Hijacking', 'Rule of least privilege']
        },
        'Network': {
            'Email Configuration': ['SPF', 'DMARC', 'DKIM', 'Microsoft Exchange'],
            'DNS and Dynamic DNS': ['A/CNAME/MX', 'Load balancing', 'Domain Registrar'],
            'Communication Protocols': ['FTP', 'SFTP', 'SSH', 'SSL']
        },
        'Administration': {
            'Work Management': ['Scrum', 'Agile Development', 'JIRA', 'FreshDesk', 'Trello', 'Visual Studio Online'],
            'Version Control': ['SVN (CLI + Tortoise)', 'Git', 'GitHub'],
            'Scripting': ['PowerShell', 'Bash', 'Batch'],
            'CDN': ['Akamai CDN', 'Akamai Fast DNS', 'Cloudflare', 'Azure Blob Storage'],
            'Status': ['HostTracker', 'Uptime Monitor'],
            'Windows': ['Active Directory', 'Domain Controller', 'Microsoft Exchange', 'VPN']
        },
        'Third Party': {
            'APIs': ['Exchange Web Services', 'Google Maps', 'Google Graphs', 'Facebook, Twitter, YouTube, Google Plus', 'Wikipedia', 'OpenWeather', 'Text messaging (textlocal.com & fastsms.co.uk)', 'PayPal & PayPal APN', 'and more...'],
            'Analytical': ['Google Analytics', 'Google Webmasters'],
            'Other': ['Amazon Alexa', 'WordPress', 'vBulletin', 'Eysys recommendation engine', 'Tintup Social', 'Voice recognition']
        }
    };


    tech.oTechnologiesCopy = JSON.parse(JSON.stringify(tech.oTechnologies));

    tech.runChart = function () {
        // if (!google || !('charts' in google)) {
        //     return null;
        // }
        // // Load the Visualization API and the corechart package.
        // google.charts.load('current', { 'packages': ['corechart'] });

        // // Set a callback to run when the Google Visualization API is loaded.
        // google.charts.setOnLoadCallback(drawChart);

        // // Callback that creates and populates a data table,
        // // instantiates the pie chart, passes in the data and
        // // draws it.
        // function drawChart() {
        //     var mdWarnH1 = '#e57373';
        //     //            
        //     var serverSide = '#ff9800';
        //     var databases = '#536dfe';
        //     var frontend = '#f44336';
        //     var css = '#ffb74d';
        //     var html = '#8c9eff';

        //     var groupWidth = ($mdMedia('xs') || $mdMedia('sm') ? '50%' : '85%');
        //     var margin = ($mdMedia('xs') || $mdMedia('sm') ? 10 : 50);

        //     var data = google.visualization.arrayToDataTable([
        //         ['Technlogoy', 'Skill Level %', { role: 'style' }],
        //         ['PHP (5.6+)', 90, serverSide],
        //         ['NodeJS', 70, serverSide],
        //         ['Express', 60, serverSide],

        //         ['MySQL', 60, databases],
        //         ['MSSQL', 65, databases],
        //         ['MongoDB', 75, databases],

        //         ['JavaScript', 100, frontend],
        //         ['jQuery', 90, frontend],
        //         ['AngularJS', 35, frontend],

        //         ['CSS/SASS', 95, css],
        //         ['HTML', 100, html]
        //     ]);

        //     // Set chart options
        //     var options = {
        //         'width': '100%',
        //         'height': '300',
        //         'bar': { groupWidth: groupWidth },
        //         'chartArea': {
        //             left: margin,
        //             top: margin,
        //             bottom: margin + 50,
        //             right: margin
        //         },
        //         'legend': { position: 'none' },
        //         'hAxis': {
        //             'textStyle': { color: '#FFF' }
        //         },
        //         'vAxis': {
        //             'textPosition': 'none',
        //             'gridlines': {
        //                 color: 'transparent'
        //             }

        //         },
        //         backgroundColor: { fill: 'transparent' },
        //         color: '#ffffff'

        //     };

        //     // Instantiate and draw our chart, passing in some options.
        //     var chart = new google.visualization.ColumnChart(document.getElementById('technologiesChart'));
        //     chart.draw(data, options);
        // }
    };
    setTimeout(function () {
        tech.runChart();
    }, 50);

    tech.searchChange = function () {
        tech.oTechnologies = JSON.parse(JSON.stringify(tech.oTechnologiesCopy));
        console.log(tech.oTechnologies);

        var searchTerm = tech.searchTerm.toString(),
            setAll;
        tech.searchValues = {};
        tech.searchKeys = {};
        tech.searchCategories = {};

        if (!searchTerm) {
            return;
        }

        for (var category in tech.oTechnologies) {
            for (var key in tech.oTechnologies[category]) {
                setAll = false;

                if (key.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0) {
                    tech.searchKeys['show' + key] = true;
                    setAll = true;
                }


                for (var i = 0; i < tech.oTechnologies[category][key].length; i++) {
                    var techword = tech.oTechnologies[category][key][i];
                    if (tech.searchTerm && tech.searchTerm.toString()) {

                        if (techword.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0 || setAll) {
                            tech.searchValues['show' + techword] = true;
                            tech.searchKeys['show' + key] = true;
                            tech.searchCategories['show' + category] = true;
                        }
                    }
                }
            }

        }

    };
});
angular.module('MrAndrewJones').controller('controllerWork', function ($scope, $http, $mdDialog, $mdMedia, $window) {
    var work = this;
    work.oExperiences = {
        'Employment': [
            {
                from: 'August 2017'
                , to: 'Current'
                , companyName: 'The NEC Group/The Ticket Factory'
                , companyDescription: 'Huge exhibition company'
                , title: 'Lead Software Engineer'
                , details: {
                    'Technologies': 'Development technologies regularly used: <strong>JavaScript, NodeJS, Express, MongoDB, Mongoose, SASS, CSS3 and HTML5. </strong> \n\
                        <br />Planning/Developing the future of the systems which are hosted in Microsoft Azure\'s cloud platform'
                    , 'Notable Achievements': '\
                        <ul>\n\
                            <li>Introduced continuous integration</li>\n\
                            <li>Introduced automated testing</li>\n\
                        </ul>'
                    , 'Other Duties': '\
                        <ul>\n\
                            <li>Making decisions on server infrastructure</li>\n\
                            <li>Code reviews</li>\n\
                            <li>Managing and scheduling projects</li>\n\
                            <li>Mentoring junior developers</li>\n\
                        </ul>'
                    , 'General Info': 'I have 2 other developers in my team, we look after the Expoware services. '

                }
            },
            {
                from: 'July 2013'
                , to: 'August 2017'
                , companyName: 'Cruise.co/Cruise.co.uk'
                , companyDescription: 'International travel agent for Cruises/holidays'
                , title: 'Senior Software Engineer'
                , details: {
                    'Technologies': 'Development technologies regularly used: <strong>JavaScript, NodeJS, Express, MongoDB, PHP, MSSQL, JQuery, CSS3 and HTML5. </strong> \n\
                        <br />Daily use of Ubuntu, running and creating shell scripts, apache configuration and virtual hosts, Akamai configuration, load balancing within an Agile development structure'
                    , 'Notable Achievements': '\
                        <ul>\n\
                            <li>I am the sole author of the company\'s Android App</li>\n\
                            <li>Created an automated unsubscribe system using Exchange Web Service API</li>\n\
                            <li>Invented a voice interpreting system to analyse voice commands</li>\n\
                            <li>Created a Google Chrome extension to aid the Sales staff with their day-to-day work</li>\n\
                            <li>Was sole authority on architeching the company\'s CRM infrastructure</li>\n\
                            <li>Created a caching library for jQuery\'s AJAX</li>\n\
                        </ul>'
                    , 'Other Duties': '\
                        <ul>\n\
                            <li>Making decisions on server infrastructure</li>\n\
                            <li>Code reviews</li>\n\
                            <li>Managing and scheduling projects</li>\n\
                            <li>Mentoring junior developers</li>\n\
                        </ul>'
                    , 'Senior duties': '\n\
                            <ul>\n\
                                <li>Managing and leading my own team</li>\n\
                                <li>Conducting interviews</li>\n\
                                <li>Decision making on potential candidates</li>\n\
                                <li>Answering technical questions/reviewing candidate code on technical level</li>\n\
                            </ul>'

                    , 'General Info': 'I work as part of a team of 13 developers, developing the web site, our content management system and booking systems. '

                }
            }
            , {
                to: 'May 2013'
                , from: 'January 2013'
                , companyName: 'Arrow Consultancy(Redditch) LTD.'
                , companyDescription: 'A recruitment agency'
                , title: 'IT Consultant/Developer'
                , details: {
                    'Technologies': 'Development technologies regularly used: <strong>PHP, MySQL, JavaScript, JQuery, CSS and HTML</strong>. I created an intricate back end system which powered the website. '
                    , 'Notable Achievements': 'The CRM which is still partially demo-able (on request – it takes some set up), was an impressively large task I had to undertake single handedly '
                    , 'Reason for leaving': 'Was made redundant when the company folded '
                }
            }
            , {
                to: 'May 2013'
                , from: 'January 2011'
                , companyName: 'Redditch Web Solutions/RedditchWeb.co.uk'
                , companyDescription: 'My web design/development company'
                , title: 'Lead Designer/Developer '
                , details: {
                    'Technologies': 'I was selling website design, hosting and support services. Skills used in development: <strong>HTML, PHP with MySQL, JavaScript and CSS. </strong>'
                    , 'Notable Achievements': 'Creating a custom a bespoke online shop for <a class="md-primary" href="http://www.jordan-saws.co.uk/" target="_blank">http://www.jordan-saws.co.uk </a>\n\
                        <br /> Due to their products being so unique in requirements, it was best to create a sequential, step by step process for choosing your specific product.'
                    , 'Reason for leaving': 'I closed the company after I found permanent, stable employment '
                }
            }
        ]

    };

});