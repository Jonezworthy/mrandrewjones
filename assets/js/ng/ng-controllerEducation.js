angular.module('MrAndrewJones').controller('controllerEducation', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var education = this;
    education.oExperiences = {

        'Qualifications': [{
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
            certificateUrl: '/assets/other/mongodb-certificate.pdf'
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