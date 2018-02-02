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