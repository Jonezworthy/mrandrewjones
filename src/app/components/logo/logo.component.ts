import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Icon } from 'src/app/interfaces/icon';
import { LogoBlurbComponent } from '../logo-blurb/logo-blurb.component';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
    @Input('icon') icon: string = '';
    @Input('label') label: string = '';
    @Input('extra') extra: boolean = false;
    @Input('origin') origin: boolean = false;

    currentYear: number = new Date().getFullYear();
    selected: Icon = { label: '', blurb: '', experience: [], years: 0, skill: 'guru' };
    experienceIconIndex: { [key: string]: string } = { current: 'fad fa-briefcase', previous: 'fad fa-history', hobby: 'fad fa-futbol' };
    experienceWordingIndex: { [key: string]: string } = { current: 'This is a technology I use with my current employer', previous: 'This is a technology I used with a former employer', hobby: 'This is a technology I use in hobby projects or freelance clients' };
    //
    index: { [key: string]: Icon } = {
        current: { label: 'Current employer', iconSrc: 'fad fa-briefcase', blurb: '', experience: ['current'], years: 0, skill: 'guru' },
        previous: { label: 'Previous employer', iconSrc: 'fad fa-history', blurb: '', experience: ['previous'], years: 0, skill: 'advanced' },
        hobby: { label: 'Hobby/freelance skill', iconSrc: 'fad fa-futbol', blurb: '', experience: ['hobby'], years: 0, skill: 'intermediate' },
        //
        typescript: { label: 'TypeScript', imgSrc: 'typescript.svg', blurb: 'I\'ve worked with TypeScript for many years. I\'ve worked with TypeScript in the Angular framework and as a standalone backend transpiler for NodeJS', experience: ['current', 'hobby'], years: this.currentYear - 2018, skill: 'advanced' },
        javascript: { label: 'JavaScript', iconSrc: 'fa-js', blurb: 'I\'ve worked with JavaScript my entire career! From ECMAScript 3 to ES2016+ ', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2008, skill: 'guru' },
        nodejsexpress: { label: 'NodeJS with Express', iconSrc: 'fa-node', blurb: 'My current role uses this as it\'s primary back end language and it is my primary backend technology', experience: ['current', 'hobby'], years: this.currentYear - 2014, skill: 'guru' },
        nodejs: { label: 'NodeJS', iconSrc: 'fa-node', blurb: 'My current role uses this as it\'s primary back end language and it is my primary backend technology', experience: ['current', 'hobby'], years: this.currentYear - 2014, skill: 'guru' },
        php: { label: 'PHP 5.1 -> 7', iconSrc: 'fa-php', blurb: 'My previous role at Cruise.co used PHP 5.1->5.6, I also use it for a few freelance projects', experience: ['current', 'hobby'], years: this.currentYear - 2008, skill: 'advanced' },
        // 
        mongodb: { label: 'MongoDB', imgSrc: 'mongodb.svg', blurb: 'My current role and some hobby projects use MongoDB, I\'ve done 4 courses on MongoDB from MongoDB University', experience: ['current', 'hobby'], years: this.currentYear - 2015, skill: 'advanced' },
        cosmosdb: { label: 'CosmosDB', imgSrc: 'cosmosdb.svg', blurb: 'My current role used to use CosmosDB with a MongoDB driver, I am no longer using this.', experience: ['current'], years: 2, skill: 'intermediate' },
        mssql: { label: 'MSSQL', imgSrc: 'mssql.svg', doInvert: true, blurb: 'My previous role used MSSQL as it\'s primary database, I hold a certificate from Microsoft in this.', experience: ['previous'], years: 5, skill: 'intermediate' },
        mysql: { label: 'MySQL', imgSrc: 'mysql.svg', doInvert: true, blurb: 'I have used MySQL for PHP based projects for many years.', experience: ['hobby'], years: this.currentYear - 2009, skill: 'intermediate' },
        postgres: { label: 'PostgreSQL', imgSrc: 'postgresql.svg', doInvert: true, blurb: 'My previous role used PostgreSQL for some side projects', experience: ['previous'], years: 2, skill: 'beginner' },
        // 
        mongoose: { label: 'Mongoose', imgSrc: 'mongoose.svg', doInvert: true, blurb: 'My current role was initially using Mongoose as a wrapper for MongoDB.', experience: ['current'], years: 2, skill: 'beginner' },
        express: { label: 'Express', imgSrc: 'express.svg', doInvert: true, blurb: 'My current role and all of my personal projects use Express as a routing framework for NodeJS', experience: ['current', 'hobby'], years: this.currentYear - 2015, skill: 'advanced' },
        puppeteer: { label: 'Puppeteer', imgSrc: 'puppeteer.svg', blurb: 'My current role uses Puppeteer for browser emulation', experience: ['current'], years: this.currentYear - 2019, skill: 'intermediate' },
        nginx: { label: 'NginX', imgSrc: 'nginx.svg', doInvert: true, blurb: 'My hobby projects use NginX for domain routing and port forwarding', experience: ['previous', 'hobby'], years: this.currentYear - 2016, skill: 'intermediate' },
        apache: { label: 'Apache', imgSrc: 'apache.svg', doInvert: true, blurb: 'My previous role was using Apache to manage requests to PHP ', experience: ['previous'], years: this.currentYear - 2015, skill: 'intermediate' },
        // 
        azure: { label: 'Microsoft Azure', imgSrc: 'azure.svg', doInvert: true, blurb: 'My current role uses the Azure cloud platform to host services.', experience: ['current'], years: this.currentYear - 2017, skill: 'intermediate' },
        mongodbatlas: { label: 'MongoDB Atlas', imgSrc: 'mongodb.svg', blurb: 'My current role and my personal projects are hosted in MongoDB Atlas', experience: ['current', 'hobby'], years: this.currentYear - 2019, skill: 'advanced' },
        aws: { label: 'AWS', iconSrc: 'fa-aws', blurb: 'I\'ve used AWS for hosting a side project for a short period of time', experience: ['current'], years: 1, skill: 'advanced' },
        ukfast: { label: 'UK Fast Cloudflex', imgSrc: 'ukfast.jpg', blurb: 'My previous role used UK Fast as a primary web host', experience: ['previous'], years: 3, skill: 'beginner' },
        netlify: { label: 'Netlify', imgSrc: 'netlify.svg', doInvert: true, blurb: 'This website and a few hobby projects are hosted in Netlify', experience: ['hobby'], years: this.currentYear - 2020, skill: 'beginner' },
        //
        windowserver: { label: 'Windows Server', imgSrc: 'windows.svg', doInvert: true, blurb: 'My previous and my current role utilise a lot of Windows servers', experience: ['current', 'previous'], years: 3, skill: 'intermediate' },
        linux: { label: 'Linux (Ubuntu/Gentoo)', imgSrc: 'linux.svg', doInvert: true, blurb: 'My hobby projects are all hosted on Linux VMs', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015, skill: 'advanced' },
        //
        jade: { label: 'Jade/Pug', imgSrc: 'pug.svg', blurb: 'The previous version of this website was written with Jade templates', experience: ['current', 'hobby'], years: 4, skill: 'intermediate' },
        smarty: { label: 'Smarty', imgSrc: 'smarty.svg', blurb: 'My previous role used Smarty templating as the primary view technology', experience: ['previous'], years: 4, skill: 'beginner' },
        ejs: { label: 'EJS', imgSrc: 'ejs.svg', blurb: 'My current role uses EJS in special circumstances', experience: ['hobby'], years: 2, skill: 'intermediate' },
        handlebars: { label: 'Handlebars', imgSrc: 'handlebars.svg', doInvert: true, blurb: 'My current role uses Handlebars in special circumstances', experience: ['current'], years: 1, skill: 'intermediate' },
        //
        html: { label: 'HTML & HTML5', iconSrc: 'fa-html5', blurb: 'It\'s everywhere, every job I\'ve had I\'ve worked with it, and pretty much every project has too', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2003, skill: 'guru' },
        css: { label: 'CSS & CSS3', iconSrc: 'fa-css3-alt', blurb: 'It\'s everywhere, every job I\'ve had I\'ve worked with it, and pretty much every project has too', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2003, skill: 'guru' },
        sass: { label: 'SASS', iconSrc: 'fa-sass', blurb: 'My current role and this website use SASS as a means of creating CSS', experience: ['current', 'hobby'], years: this.currentYear - 2016, skill: 'advanced' },
        //
        csharp: { label: 'C#', imgSrc: 'csharp.svg', doInvert: true, blurb: 'My current role uses C# for some microservices and occasionally have to contribute to those', experience: ['current'], years: 1, skill: 'beginner' },
        dotnet: { label: '.NET', imgSrc: 'dotnet.svg', doInvert: true, blurb: 'My current role\'s main website is powered by .NET and I sometimes contribute to that', experience: ['current'], years: 1, skill: 'beginner' },
        java: { label: 'Java', iconSrc: 'fa-java', blurb: 'I\'ve written an android app in Java.', experience: ['current', 'hobby'], years: 1, skill: 'beginner' },
        // 
        angular1: { label: 'AngularJS 1.5', iconSrc: 'fa-angular', blurb: 'I\'ve used this in a freelance project and my current role used to use it as a primary front end technology', experience: ['current', 'hobby'], years: this.currentYear - 2016, skill: 'advanced' },
        angular2: { label: 'Angular2 (6+)', iconSrc: 'fa-angular', blurb: 'My current role uses this as a primary front end technology and this web site is powered by it!', experience: ['current', 'hobby'], years: this.currentYear - 2017, skill: 'advanced' },
        react: { label: 'ReactJS', iconSrc: 'fa-react', blurb: 'I\'ve recently started learning ReactJS', experience: ['hobby'], years: this.currentYear - 2022, skill: 'beginner' },
        ionic: { label: 'Ionic 3+', imgSrc: 'ionic.svg', doBrightness: true, blurb: 'I\'ve created a bunch of apps with this for my current employer and personal projects', experience: ['current', 'hobby'], years: this.currentYear - 2017, skill: 'intermediate' },
        jquery: { label: 'jQuery (1.1.12 -> 1.7.2 mostly)', imgSrc: 'jquery.svg', doInvert: true, blurb: 'I use it in my current role, used in previous roles and personal projects too', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2009, skill: 'guru' },
        fontawesome: { label: 'Font Awesome', iconSrc: 'fa-font-awesome', blurb: 'This website uses Font Awesome for it\'s icons, and I have used it in my current role', experience: ['current', 'hobby'], years: 5, skill: 'advanced' },
        // 
        redis: { label: 'Redis', imgSrc: 'redis.svg', doInvert: true, blurb: 'My current role uses this for caching purposes.', experience: ['current'], years: this.currentYear - 2017, skill: 'intermediate' },
        cloudflarefunctions: { label: 'Cloudflare Functions', imgSrc: 'cloudflare.svg', doInvert: true, blurb: 'I\'ve written cookie management and queue management code inside of cloudflare functions for my current employer', experience: ['current'], years: this.currentYear - 2020, skill: 'intermediate' },
        cloudflarecdn: { label: 'Cloudflare', imgSrc: 'cloudflare.svg', doInvert: true, blurb: 'My personal projects and my current role utilises Cloudflare to leverage caching', experience: ['current', 'hobby'], years: this.currentYear - 2017, skill: 'advanced' },
        // 
        threedmodelling: { label: '3D Modelling/CAD', imgSrc: 'modelling.svg', blurb: 'I enjoy creating 3D models with the purpose of printing', experience: ['hobby'], years: this.currentYear - 2020, skill: 'intermediate' },
        threedprinting: { label: '3D Printing', imgSrc: '3d-printing.svg', doInvert: true, blurb: 'I\'ve 3D printed hundreds of things! ', experience: ['hobby'], years: this.currentYear - 2020, skill: 'guru' },
        // 
        barclaycard: { label: 'BarclayCard', imgSrc: 'barclays.svg', doInvert: true, blurb: 'In my current role I\'ve implement Barclaycard payments and its gateway payment systems ', experience: ['current'], years: this.currentYear - 2021, skill: 'intermediate' },
        paypal: { label: 'PayPal', iconSrc: 'fa-paypal', blurb: 'I\'ve implement PayPal IPN based payments numerous times in freelance websites and my current employer', experience: ['current', 'hobby'], years: this.currentYear - 2016, skill: 'advanced' },
        // 
        jasmine: { label: 'JasmineJS', imgSrc: 'jasmine.svg', doInvert: true, blurb: 'My current role uses Jasmine for automated unit testing', experience: ['current'], years: this.currentYear - 2017, skill: 'advanced' },
        karma: { label: 'KarmaJS', imgSrc: 'karma.svg', blurb: 'My current role uses Karma as part of the automated testing', experience: ['current'], years: this.currentYear - 2017, skill: 'advanced' },
        mocha: { label: 'MochaJS + ShouldJS', imgSrc: 'mocha.svg', blurb: 'My current role uses Mocha with ShouldJS as the primary assertion framework', experience: ['current'], years: this.currentYear - 2017, skill: 'advanced' },
        // 
        visualstudiopipelines: { label: 'Visual Studio Pipelines', imgSrc: 'visual-studio.svg', doInvert: true, blurb: 'My current role uses Visual Studio Pipelines for CI/CD', experience: ['current'], years: this.currentYear - 2017, skill: 'guru' },
        docker: { label: 'Docker', iconSrc: 'fa-docker', blurb: 'My current role uses Docker for deployment of NodeJS in Azure', experience: ['current'], years: this.currentYear - 2021, skill: 'exposure' },
        jenkins: { label: 'Jenkins', iconSrc: 'fa-jenkins', blurb: 'My previous role and some hobby projects use Jenkins to manage CI/CD', experience: ['previous'], years: this.currentYear - 2016, skill: 'beginner' },
        gulp: { label: 'Gulp (Task Management)', iconSrc: 'fa-gulp', blurb: 'My current role and some personal projects rely on Gulp for task management', experience: ['current', 'hobby'], years: this.currentYear - 2015, skill: 'intermediate' },
        // 
        sendgrid: { label: 'SendGrid', imgSrc: 'sendgrid.svg', blurb: 'My current role and some freelance projects use SendGrid as an email sending service', experience: ['current', 'hobby'], years: this.currentYear - 2017, skill: 'intermediate' },
        exchange: { label: 'Microsoft Exchange', imgSrc: 'exchange.svg', blurb: 'My previous role used Microsoft Exchange as an email sending service', experience: ['previous'], years: 1, skill: 'exposure' },
        // 
        azureblob: { label: 'Azure Blob Storage', imgSrc: 'blog-storage.svg', blurb: 'My current role uses Azure Blob storage and queues for storage and queue management', experience: ['current'], years: this.currentYear - 2017, skill: 'advanced' },
        akamai: { label: 'Akamai CDN', imgSrc: 'akamai.svg', blurb: 'My previous role used Akamai as a CDN/Cache', experience: ['previous'], years: 3, skill: 'exposure' },
        // 
        scrum: { label: 'Scrum', imgSrc: 'scrum.svg', doInvert: true, blurb: 'My current and previous roles used Scrum team management strategies ', experience: ['current'], years: this.currentYear - 2014, skill: 'guru' },
        lean: { label: 'Lean Methodologies ', imgSrc: 'lean.svg', doInvert: true, blurb: 'My current role uses Lean strategies in order to streamline the work process', experience: ['current'], years: this.currentYear - 2017, skill: 'guru' },
        agile: { label: 'Agile Development ', imgSrc: 'agile.svg', doInvert: true, blurb: 'My current role uses Agile strategies to bring the client in to the work flow', experience: ['current'], years: this.currentYear - 2017, skill: 'advanced' },
        visualstudioonline: { label: 'Visual Studio Online ', imgSrc: 'visual-studio.svg', doInvert: true, blurb: 'My current employer uses Visual Studio for work management', experience: ['previous'], years: this.currentYear - 2017, skill: 'advanced' },
        jira: { label: 'JIRA', iconSrc: 'fa-jira', blurb: 'My previous employer used JIRA for work management', experience: ['previous'], years: 2, skill: 'exposure' },
        trello: { label: 'Trello', iconSrc: 'fa-trello', blurb: 'My previous and current employer used Trello for work management', experience: ['current', 'previous'], years: 3, skill: 'beginner' },
        // 
        git: { label: 'Git', iconSrc: 'fa-git', blurb: 'My current role uses Git as a primary version control system', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2014, skill: 'advanced' },
        visualstudioteamservices: { label: 'Visual Studio Team Services ', imgSrc: 'visual-studio.svg', doInvert: true, blurb: 'My current role uses Visual Studio Online as a hosting service for code and for CI/CD', experience: ['current'], years: this.currentYear - 2017, skill: 'intermediate' },
        svn: { label: 'SVN (CLI + Tortoise)', imgSrc: 'subversion.svg', doInvert: true, blurb: 'My previous role and some hobby projects use SVN as a means of version control', experience: ['previous', 'hobby'], years: this.currentYear - 2009, skill: 'intermediate' },
        github: { label: 'GitHub', iconSrc: 'fa-github', blurb: 'I store my hobby code in GitHub, find more about this on my Contact Me page', experience: ['hobby'], years: this.currentYear - 2016, skill: 'intermediate' },
        // 
        powershell: { label: 'PowerShell', imgSrc: 'powershell.svg', doInvert: true, blurb: 'I\'ve used Powershell for scripting many things on Windows', experience: ['previous', 'hobby'], years: this.currentYear - 2016, skill: 'intermediate' },
        bash: { label: 'Bash', imgSrc: 'bash.svg', blurb: 'I\'ve used bash for scripting on Mac and Linux too many times to count', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015, skill: 'advanced' },
        batch: { label: 'Batch', imgSrc: 'batch.svg', doInvert: true, blurb: 'Occasionally I will use batch for scripting on Windows, sometimes I use Powershell', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2016, skill: 'advanced' },
        // 
        slack: { label: 'Slack', iconSrc: 'fa-slack', blurb: 'I\'ve created Slack integrations for hobby projects', experience: ['hobby'], years: 1, skill: 'exposure' },
        discord: { label: 'Discord', iconSrc: 'fa-discord', blurb: 'I\'ve created Discord integrations for hobby projects', experience: ['hobby'], years: this.currentYear - 2019, skill: 'beginner' },
        googlemaps: { label: 'Google Maps', imgSrc: 'google-maps.svg', blurb: 'I\'ve used Google Maps API for directions and GeoSpatial reasons', experience: ['current', 'previous'], years: 2, skill: 'beginner' },
        googlegraphs: { label: 'Google Graphs', imgSrc: 'google-developers.svg', blurb: 'I\'ve used Google Charts a lot to create powerful visualisations of data ', experience: ['current'], years: this.currentYear - 2019, skill: 'intermediate' },
        facebook: { label: 'Facebook', iconSrc: 'fa-facebook', blurb: 'I\'ve created Facebook integrations for hobby projects', experience: ['hobby'], years: this.currentYear - 2016, skill: 'beginner' },
        twitter: { label: 'Twitter', iconSrc: 'fa-twitter', blurb: 'I\'ve created Twitter integrations for hobby projects', experience: ['hobby'], years: 1, skill: 'exposure' },
        youtube: { label: 'YouTube', iconSrc: 'fa-youtube', blurb: 'I\'ve created YouTube integrations for hobby projects', experience: ['hobby'], years: 1, skill: 'exposure' },
        sms: { label: 'textlocal.com & fastsms.co.uk', iconSrc: 'fa-sms', blurb: 'I\'ve integrated SMS systems for my current employer and previous employer', experience: ['current', 'previous', 'hobby'], years: 3, skill: 'advanced' },
        // 
        googleanalytics: { label: 'Google Analytics', imgSrc: 'google-analytics.svg', blurb: 'I\'ve used Analytics for most of my hobby and freelance projects', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015, skill: 'beginner' },
        googlewebmasters: { label: 'Google Webmasters', imgSrc: 'google-developers.svg', blurb: 'I\'ve used Webmasters/Developers for most of my hobby and freelance projects', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015, skill: 'intermediate' },
        // 
        alexa: { label: 'Amazon Alexa', imgSrc: 'alexa.svg', doInvert: true, blurb: 'I\'ve integrated Amazon Alexa commands in my current role', experience: ['current', 'hobby'], years: 1, skill: 'beginner' },
        wordpress: { label: 'WordPress', iconSrc: 'fa-wordpress', blurb: 'I\'ve created Wordpress based websites for freelance clients many times', experience: ['previous', 'hobby'], years: 3, skill: 'beginner' },

    }

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {

        if (this.icon && this.icon in this.index) {
            this.selected = this.index[this.icon];
        } else {
            console.log('Missing ICON!: ' + this.icon);

        }

    }

    openBlurb(icon: Icon) {
        if (this.extra) {
            if (icon.blurb && icon.blurb.length) {
                this.dialog.open(LogoBlurbComponent, {
                    data: {
                        icon,
                        dialog: this.dialog,
                    },
                    height: window.screen.availHeight <= 1000 ? '75%' : '50%',
                    width: window.screen.availWidth <= 500 ? '100%' : 'auto',
                });
            }
        }
    }

    experienceClass(experience: string[]): string {
        return experience.join(' ');
    }

}
