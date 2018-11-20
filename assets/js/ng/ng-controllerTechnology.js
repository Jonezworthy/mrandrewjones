angular.module('MrAndrewJones').controller('controllerTechnology', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var tech = this;
    this.searchValues = {};
    this.searchKeys = {};
    this.searchCategories = {};
    this.filterResults = true;

    tech.oTechnologies = {
        /* ************************************** */
        'Server Side': {
            'Server Languages': ['JavaScript (NodeJS) (ES6, ES2016+)', 'NodeJS with Express', 'PHP 5.1 -> 5.7 (Procedural, OOP, MVC)', 'Java'],
            'Databases': ['MongoDB', 'MSSQL', 'MySQL', 'PostgreSQL', 'CosmosDB'],
            'Hosting': ['Microsoft Azure', 'AWS', 'UK Fast CloudFlex'],
            'Operating Systems': ['Windows', 'Linux (Ubuntu/Gentoo/CentOS)', 'Android'],
            'Apache': ['Virtual Hosts', 'Rewrite Rules', 'Reverse Proxy'],
            'NginX': ['Server Definition', 'Reverse Proxy'],
            'Templating': ['Smarty', 'Jade', 'EJS'],
            'Other': ['PHP5-FPM']
        },
        'Client Side': {
            'Client Languages': ['JavaScript (OOP, OL, Prototyping, ES6, ES2016+)', 'HTML & HTML5', 'CSS & CSS3 & SASS', 'TypeScript'],
            'JavaScript Libraries or Frameworks': ['AngularJS 1.5', 'AngularJS 4.3', 'Ionic 3+', 'jQuery (1.1.12 -> 1.7.2 mostly)', 'jQuery UI'],
            'Caching': ['Local Storage API', 'Session Storage API', 'ETag', 'Expires headers'],
            'Compatibilities': ['normalize.css', 'modernizr.js', 'polyfills'],
            'CSS Libraries or Frameworks': ['Angular Materials', 'Bootstrap', 'Font Awesome']
        },
        'Principles': {
            'Design Patterns': ['MVC/MVP/SoC', 'Programming Design Patterns', 'RESTful APIs', 'Mobile first'],
            'Stacks': ['LASP', 'LAMP', 'WAMP', 'MEAN', 'SEAN'],
            'Testing': ['Test-driven Development', 'Unit/Automated/Acceptance Testing', 'Regression Testing', 'Jasmine', 'Karma', 'Mocha'],
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
            'Version Control': ['SVN (CLI + Tortoise)', 'Git'],
            'Scripting': ['PowerShell', 'Bash', 'Batch'],
            'CDN': ['Akamai CDN', 'Akamai Fast DNS', 'Cloudflare', 'Azure Blob Storage'],
            'Status': ['Hosttracker', 'Uptime Monitor'],
            'Windows': ['Active Directory', 'Domain Controller', 'Microsoft Exchange', 'VPN']
        },
        'Third Party': {
            'APIs': ['Exchange Web Services', 'Google Maps', 'Google Graphs', 'Facebook, Twitter, YouTube, Google Plus', 'Wikipedia', 'OpenWeather', 'Text messaging (textlocal.com & fastsms.co.uk)', 'PayPal & PayPal APN', 'and more...'],
            'Analytical': ['Google Analytics', 'Google Webmasters'],
            'Other': ['WordPress', 'vBulletin', 'Eysys recommendation engine', 'Tintup Social']
        }
    };


    tech.oTechnologiesCopy = JSON.parse(JSON.stringify(tech.oTechnologies));

    tech.runChart = function() {
        if (!google || !('charts' in google)) {
            return null;
        }
        // Load the Visualization API and the corechart package.
        google.charts.load('current', { 'packages': ['corechart'] });

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {
            var mdWarnH1 = '#e57373';
            //            
            var serverSide = '#ff9800';
            var databases = '#536dfe';
            var frontend = '#f44336';
            var css = '#ffb74d';
            var html = '#8c9eff';

            var groupWidth = ($mdMedia('xs') || $mdMedia('sm') ? '50%' : '85%');
            var margin = ($mdMedia('xs') || $mdMedia('sm') ? 10 : 50);

            var data = google.visualization.arrayToDataTable([
                ['Technlogoy', 'Skill Level %', { role: 'style' }],
                ['PHP (5.6+)', 90, serverSide],
                ['NodeJS', 70, serverSide],
                ['Express', 60, serverSide],

                ['MySQL', 60, databases],
                ['MSSQL', 65, databases],
                ['MongoDB', 75, databases],

                ['JavaScript', 100, frontend],
                ['jQuery', 90, frontend],
                ['AngularJS', 35, frontend],

                ['CSS/SASS', 95, css],
                ['HTML', 100, html]
            ]);

            // Set chart options
            var options = {
                'width': '100%',
                'height': '300',
                'bar': { groupWidth: groupWidth },
                'chartArea': {
                    left: margin,
                    top: margin,
                    bottom: margin + 50,
                    right: margin
                },
                'legend': { position: 'none' },
                'hAxis': {
                    'textStyle': { color: '#FFF' }
                },
                'vAxis': {
                    'textPosition': 'none',
                    'gridlines': {
                        color: 'transparent'
                    }

                },
                backgroundColor: { fill: 'transparent' },
                color: '#ffffff'

            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.ColumnChart(document.getElementById('technologiesChart'));
            chart.draw(data, options);
        }
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