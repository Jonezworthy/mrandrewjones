angular.module('MrAndrewJones').controller('controllerTechnology', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var tech = this;
    this.searchValues = {};
    this.searchKeys = {};
    this.searchCategories = {};
    this.filterResults = true;
    this.selectedIndex = 0;

    tech.oTechnologies = {
        /* ************************************** */
        'Server Side': {
            'Languages': [
                { value: 'TypeScript', history: 'current' },
                { value: 'JavaScript (NodeJS) (ES6, ES2016+)', history: 'current' },
                { value: 'NodeJS with Express', history: 'current' },
                { value: 'PHP 5.1 -> 7 (Procedural, OOP, MVC)', history: 'previous' },
            ],
            'Databases': [
                { value: 'MongoDB', history: 'current' },
                { value: 'CosmosDB', history: 'current' },
                { value: 'MSSQL', history: 'previous' },
                { value: 'MySQL', history: 'hobby' },
                { value: 'PostgreSQL', history: 'previous' },
            ],
            'Hosting': [
                { value: 'Microsoft Azure', history: 'current' },
                { value: 'MongoDB Atlas', history: 'current' },
                { value: 'AWS', history: 'previous' },
                { value: 'UK Fast CloudFlex', history: 'previous' },
            ],
            'Server Management': [
                { value: 'Windows Server', history: 'current' },
                { value: 'Linux (Ubuntu + Gentoo + CentOS)', history: 'previous' },
            ],
            'Apache': [
                { value: 'Virtual Hosts', history: 'previous' },
                { value: 'Rewrite Rules', history: 'previous' },
                { value: 'Reverse Proxy', history: 'previous' },
            ],
            'NginX': [
                { value: 'Server Definition', history: 'previous' },
                { value: 'Reverse Proxy', history: 'previous' },
            ],
            'Templating': [
                { value: 'Jade/Pug', history: 'current' },
                { value: 'Smarty', history: 'previous' },
                { value: 'EJS', history: 'hobby' },
                { value: 'Handlebars', history: 'hobby' },
            ],
            'Other': [
                { value: 'Mongoose', history: 'current' },
                { value: 'PHP5-FPM', history: 'previous' },
            ]
        },
        'Client/Software Side': {
            'Client Languages': [
                { value: 'JavaScript (OOP, OL, Prototyping, ES6, ES2016+)', history: 'current' },
                { value: 'HTML & HTML5', history: 'current' },
                { value: 'CSS & CSS3 & SCSS', history: 'current' },
            ],
            'Software Languages': [
                { value: 'C#', history: 'current' },
                { value: 'Java', history: 'hobby' },
            ],
            'JavaScript Libraries or Frameworks': [
                { value: 'AngularJS 1.5', history: 'current' },
                { value: 'Angular2 (6+)', history: 'current' },
                { value: 'Ionic 3+', history: 'current' },
                { value: 'jQuery (1.1.12 -> 1.7.2 mostly)', history: 'current' },
                { value: 'jQuery UI', history: 'previous' },
            ],
            'Caching': [
                { value: 'Local Storage API', history: 'current' },
                { value: 'Session Storage API', history: 'current' },
                { value: 'ETag', history: 'previous' },
                { value: 'Expires headers', history: 'previous' },
            ],
            'Compatibilities': [
                { value: 'polyfills', history: 'current' },
                { value: 'normalize.css', history: 'previous' },
                { value: 'modernizr.js', history: 'previous' },
            ],
            'CSS Libraries or Frameworks': [
                { value: 'Angular Materials', history: 'current' },
                { value: 'Bootstrap', history: 'previous' },
                { value: 'Font Awesome', history: 'previous' },
            ]
        },
        'Principles': {
            'Design Patterns': [
                { value: 'MVC/MVP/SoC', history: 'current' },
                { value: '(SaaS) Software As A Service', history: 'current' },
                { value: 'Micro Services', history: 'current' },
                { value: 'RESTful APIs', history: 'current' },
                { value: 'Mobile first', history: 'current' },
            ],
            'Stacks': [
                { value: 'MEAN', history: 'current' },
                { value: 'LASP', history: 'previous' },
                { value: 'LAMP', history: 'previous' },
                { value: 'SEAN', history: 'previous' },
                { value: 'WAMP', history: 'hobby' },
            ],
            'Testing': [
                { value: 'JasmineJS', history: 'current' },
                { value: 'KarmaJS', history: 'current' },
                { value: 'MochaJS + ShouldJS', history: 'current' },
                { value: 'Test-driven Development', history: 'current' },
                { value: 'Unit/Automated/Acceptance Testing', history: 'current' },
                { value: 'Load Testing', history: 'current' },
                { value: 'Regression Testing', history: 'previous' },
            ],
            'Continuous Integration': [
                { value: 'Visual Studio Pipelines', history: 'current' },
                { value: 'Jenkins', history: 'previous' },
                { value: 'Gulp (Task Management)', history: 'hobby' },
            ],
            'Security': [
                { value: 'OWASP', history: 'current' },
                { value: 'PCI-DSS', history: 'current' },
                { value: 'XSS', history: 'current' },
                { value: 'SQL Injection', history: 'current' },
                { value: 'Session Hijacking', history: 'current' },
                { value: 'Rule of least privilege', history: 'current' },
            ]
        },
        'Networking': {
            'Email Configuration': [
                { value: 'SPF', history: 'current' },
                { value: 'DMARC', history: 'current' },
                { value: 'DKIM', history: 'current' },
                { value: 'SendGrid', history: 'current' },
                { value: 'Microsoft Exchange', history: 'previous' },
            ],
            'DNS and Dynamic DNS': [
                { value: 'A/CNAME/MX', history: 'current' },
                { value: 'Load balancing', history: 'previous' },
                { value: 'Domain Registrar', history: 'previous' },
            ],
            'Communication Protocols': [
                { value: 'SSH', history: 'current' },
                { value: 'SSL', history: 'current' },
                { value: 'FTP, SFTP', 'FTPS', history: 'previous' },
            ],
            'CDN': [
                { value: 'Cloudflare', history: 'current' },
                { value: 'Azure Blob Storage', history: 'current' },
                { value: 'Akamai CDN', history: 'previous' },
                { value: 'Akamai Fast DNS', history: 'previous' },
            ],
            'Windows': [
                { value: 'VPNs', history: 'current' },
                { value: 'Active Directory', history: 'previous' },
                { value: 'Domain Controller', history: 'previous' },
                { value: 'Microsoft Exchange', history: 'previous' },
            ]
        },
        'Administration': {
            'Work Management': [
                { value: 'Scrum', history: 'current' },
                { value: 'Lean Methodologies', history: 'current' },
                { value: 'Agile Development', history: 'current' },
                { value: 'Visual Studio Online', history: 'current' },
                { value: 'JIRA', history: 'previous' },
                { value: 'FreshDesk', history: 'previous' },
                { value: 'Trello', history: 'previous' },
            ],
            'Version Control': [
                { value: 'Git', history: 'current' },
                { value: 'Visual Studio Team Services', history: 'current' },
                { value: 'SVN (CLI + Tortoise)', history: 'previous' },
                { value: 'GitHub', history: 'previous' },
            ],
            'Scripting': [
                { value: 'PowerShell', history: 'current' },
                { value: 'Bash', history: 'previous' },
                { value: 'Batch', history: 'previous' },
            ],
            'Status': [
                { value: 'Status Cake', history: 'current' },
                { value: 'HostTracker', history: 'previous' },
                { value: 'Uptime Monitor', history: 'hobby' },
            ],
        },
        'Third Party': {
            'APIs': [
                { value: 'Slack', history: 'current' },
                { value: 'Trello', history: 'current' },
                { value: 'Exchange Web Services', history: 'previous' },
                { value: 'Google Maps', history: 'current' },
                { value: 'Google Graphs', history: 'previous' },
                { value: 'Facebook, Twitter, YouTube, Google Plus', history: 'previous' },
                { value: 'Wikipedia', history: 'previous' },
                { value: 'OpenWeather', history: 'previous' },
                { value: 'Text messaging (textlocal.com & fastsms.co.uk)', history: 'previous' },
                { value: 'PayPal & PayPal APN', history: 'current' },
                { value: 'and more...', history: 'current' },
            ],
            'Analytical': [
                { value: 'Google Analytics', history: 'current' },
                { value: 'Google Webmasters', history: 'current' },
            ],
            'Other': [
                { value: 'Amazon Alexa', history: 'current' },
                { value: 'WordPress', history: 'previous' },
                { value: 'vBulletin', history: 'previous' },
                { value: 'Eysys recommendation engine', history: 'previous' },
                { value: 'Tintup Social', history: 'previous' },
                { value: 'Voice recognition', history: 'previous' },
            ]
        }
    };


    tech.oTechnologiesCopy = JSON.parse(JSON.stringify(tech.oTechnologies));

    tech.runChart = function() {
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
    setTimeout(function() {
        tech.runChart();
    }, 50);

    tech.searchChange = function() {
        tech.oTechnologies = JSON.parse(JSON.stringify(tech.oTechnologiesCopy));

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
                    var techwordObject = tech.oTechnologies[category][key][i]
                    var techword = techwordObject.value;
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