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