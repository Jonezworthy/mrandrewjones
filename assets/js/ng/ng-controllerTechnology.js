angular.module('MrAndrewJones').controller('controllerTechnology', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var tech = this;
    this.searchValues = {};
    this.searchKeys = {};
    this.searchCategories = {};
    this.filterResults = true;
    this.selectedIndex = 0;

    tech.oTechnologies = {
        /* ************************************** */
        'Server/Software Side': {
            'Languages': ['TypeScript', 'JavaScript (NodeJS) (ES6, ES2016+)', 'NodeJS with Express', 'PHP 5.1 -> 7 (Procedural, OOP, MVC)', 'Java', 'C#'],
            'Databases': ['MongoDB', 'MSSQL', 'MySQL', 'PostgreSQL', 'CosmosDB'],
            'Hosting': ['Microsoft Azure', 'AWS', 'UK Fast CloudFlex', 'MongoDB Atlas'],
            'Server Management': ['Windows Server', 'Linux (Ubuntu + Gentoo + CentOS)'],
            'Apache': ['Virtual Hosts', 'Rewrite Rules', 'Reverse Proxy'],
            'NginX': ['Server Definition', 'Reverse Proxy'],
            'Templating': ['Smarty', 'Jade/Pug', 'EJS', 'Handlebars'],
            'Other': ['PHP5-FPM', 'Mongoose']
        },
        'Client Side': {
            'Client Languages': ['JavaScript (OOP, OL, Prototyping, ES6, ES2016+)', 'HTML & HTML5', 'CSS & CSS3 & SASS'],
            'JavaScript Libraries or Frameworks': ['AngularJS 1.5', 'Angular2 (6+)', 'Ionic 3+', 'jQuery (1.1.12 -> 1.7.2 mostly)', 'jQuery UI'],
            'Caching': ['Local Storage API', 'Session Storage API', 'ETag', 'Expires headers'],
            'Compatibilities': ['normalize.css', 'modernizr.js', 'polyfills'],
            'CSS Libraries or Frameworks': ['Angular Materials', 'Bootstrap', 'Font Awesome']
        },
        'Principles': {
            'Design Patterns': ['MVC/MVP/SoC', 'Micro Services', 'RESTful APIs', 'Mobile first'],
            'Stacks': ['LASP', 'LAMP', 'WAMP', 'MEAN', 'SEAN'],
            'Testing': ['Test-driven Development', 'Unit/Automated/Acceptance Testing', 'Regression Testing', 'JasmineJS', 'KarmaJS', 'MochaJS + ShouldJS'],
            'Continuous Integration': ['Visual Studio Pipelines', 'Jenkins', 'Gulp (Task Management)'],
            'Security': ['OWASP', 'PCI-DSS', 'XSS', 'SQL Injection', 'Session Hijacking', 'Rule of least privilege']
        },
        'Networking': {
            'Email Configuration': ['SPF', 'DMARC', 'DKIM', 'Microsoft Exchange'],
            'DNS and Dynamic DNS': ['A/CNAME/MX', 'Load balancing', 'Domain Registrar'],
            'Communication Protocols': ['FTP', 'SFTP', 'SSH', 'SSL'],
            'CDN': ['Cloudflare', 'Akamai CDN', 'Akamai Fast DNS', 'Azure Blob Storage'],
            'Windows': ['Active Directory', 'Domain Controller', 'Microsoft Exchange', 'VPNs']
        },
        'Administration': {
            'Work Management': ['Scrum', 'Agile Development', 'JIRA', 'FreshDesk', 'Trello', 'Visual Studio Online'],
            'Version Control': ['Git', 'SVN (CLI + Tortoise)', 'GitHub', 'Visual Studio Team Services'],
            'Scripting': ['PowerShell', 'Bash', 'Batch'],
            'Status': ['HostTracker', 'Uptime Monitor'],
        },
        'Third Party': {
            'APIs': ['Slack', 'Exchange Web Services', 'Google Maps', 'Google Graphs', 'Facebook, Twitter, YouTube, Google Plus', 'Wikipedia', 'OpenWeather', 'Text messaging (textlocal.com & fastsms.co.uk)', 'PayPal & PayPal APN', 'and more...'],
            'Analytical': ['Google Analytics', 'Google Webmasters'],
            'Other': ['Amazon Alexa', 'WordPress', 'vBulletin', 'Eysys recommendation engine', 'Tintup Social', 'Voice recognition']
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