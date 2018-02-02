angular.module('MrAndrewJones').controller('controllerEducation', function ($scope, $http, $mdDialog, $mdMedia, $window) {
    var education = this;
    education.oExperiences = {

        'Qualifications': [
            {
                title: 'HTML5 Coding Essentials and Best Practices'
                , issuer: 'W3Cx'
                , date: 'April 2017'
                , grade: '79% (Pass)'
            }
            ,{
                title: 'Introduction to jQuery'
                , issuer: 'Microsoft'
                , date: 'April 2017'
                , grade: '79% (Pass)'
                , certificateUrl: false
            }
            ,{
                title: 'Windows PowerShell basics'
                , issuer: 'Microsoft'
                , date: 'April 2017'
                , grade: '83% (Pass)'
                , certificateUrl: false
            }
            ,{
                title: 'MongoDB for Node.js Developers'
                , issuer: 'MongoDB University'
                , date: 'December 2016'
                , grade: '92% (Pass)'
                , certificateUrl: '/assets/other/mongodb-certificate.pdf'
            }
            , {
                title: 'Introduction to MongoDB using the MEAN stack'
                , issuer: 'MongoDB University'
                , date: 'November 2016'
                , grade: '89% (Pass)'
                , certificateUrl: 'https://courses.edx.org/certificates/e2ddeb18ae3a4eb8abe3a10ddfbc036e'
            }
            , {
                title: 'Querying with Transact-SQL'
                , issuer: 'Microsoft'
                , date: 'November 2016'
                , grade: '74% (Pass)'
                , certificateUrl: 'https://courses.edx.org/certificates/c0c99a6e14c2444b8a36c43988825266'
            }
            , {
                title: 'Information Systems and Computer Applications'
                , issuer: 'University of Valencia'
                , date: 'November 2016'
                , grade: '96% (Pass)'
                , certificateUrl: 'https://courses.edx.org/certificates/b2db5090136440708718ebeab1c20455'
            }
        ]
        , 'Books': [
            {
                title: 'JavaScript the definitive guide'
                , author: 'David Flanagan'
                , description: 'It contains a huge overview of the whole of JavaScript, from its humble beginnings all the way to the future.'
            }
            , {
                title: 'Advanced PHP Programming '
                , author: 'George Schlossnagle'
                , description: 'It is more than a PHP book, George writes a lot about coding standards and scalability that is relevent to any language. Fantastic.'
            }
            , {
                title: 'Learning JavaScript Design Patterns'
                , author: 'Addy Osmani'
                , description: 'Great book on learning how to achieve design patterns in JavaScript.'
            }
            , {
                title: 'Node: Up and Running'
                , author: 'Tom Hughes-Croucher & Mike Wilson'
                , description: 'Fantastic overview on how Node works and to create functionality that exists in other languages'
            }
            , {
                title: 'Web Development with Node and Express '
                , author: 'Ethan Brown'
                , description: 'A detailed book on how to use Express with Node. '
            }
            , {
                title: 'Programming PHP'
                , author: 'Rasmus Lerdorf, Kevin Tatroe & Peter MacIntyre'
                , description: 'A true encyclopedia of PHP, gives great insights in to the inner workings of PHP'
            }
            , {
                title: 'Write Modern Web Apps with the MEAN stack '
                , author: 'Jeff Dickey'
                , description: 'The best introduction to Node book I found, walks you through the common practices of MEAN development'
            }
        ]
    };

});