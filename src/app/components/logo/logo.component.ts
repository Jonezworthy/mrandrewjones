import { Component, Input, OnInit } from '@angular/core';
interface Icon {
    label: string, iconSrc?: string, imgSrc?: string, doInvert?: Boolean, doBrightness?: Boolean, blurb: string, experience: string[], years: number
}
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
    selected: Icon = { label: '', blurb: '', experience: [], years: 0 };
    experienceIconIndex: { [key: string]: string } = { current: 'fad fa-briefcase', previous: 'fad fa-history', hobby: 'fad fa-futbol' };
    experienceWordingIndex: { [key: string]: string } = { current: 'This is a technology I use with my current employer', previous: 'This is a technology I used with a former employer', hobby: 'This is a technology I use in hobby projects or freelance clients' };
    index: { [key: string]: Icon } = {
        current: { label: 'Current employer', iconSrc: 'fad fa-briefcase', blurb: '', experience: ['current'], years: 0 },
        previous: { label: 'Previous employer', iconSrc: 'fad fa-history', blurb: '', experience: ['previous'], years: 0 },
        hobby: { label: 'Hobby/freelance skill', iconSrc: 'fad fa-futbol', blurb: '', experience: ['hobby'], years: 0 },
        //
        typescript: { label: 'TypeScript', imgSrc: 'typescript.svg', blurb: 'I\'ve worked with TypeScript for many years', experience: ['current', 'hobby'], years: this.currentYear - 2018 },
        javascript: { label: 'JavaScript', iconSrc: 'fa-js', blurb: 'Worked with JavaScript my entire career!', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2006 },
        nodejsexpress: { label: 'NodeJS with Express', iconSrc: 'fa-node', blurb: 'My current role uses this as it\'s primary back end language', experience: ['current', 'hobby'], years: this.currentYear - 2014 },
        nodejs: { label: 'NodeJS', iconSrc: 'fa-node', blurb: 'My current role uses this as it\'s primary back end language', experience: ['current', 'hobby'], years: this.currentYear - 2014 },
        php: { label: 'PHP 5.1 -> 7', iconSrc: 'fa-php', blurb: 'My previous role at Cruise.co used PHP ', experience: ['current', 'hobby'], years: this.currentYear - 2008 },
        // 
        mongodb: { label: 'MongoDB', imgSrc: 'mongodb.svg', blurb: 'My current role and some hobby projects use MongoDB', experience: ['current', 'hobby'], years: this.currentYear - 2015 },
        cosmosdb: { label: 'CosmosDB', imgSrc: 'cosmosdb.svg', blurb: '', experience: ['current'], years: 2 },
        mssql: { label: 'MSSQL', imgSrc: 'mssql.svg', doInvert: true, blurb: '', experience: ['previous'], years: 5 },
        mysql: { label: 'MySQL', imgSrc: 'mysql.svg', doInvert: true, blurb: '', experience: ['hobby'], years: this.currentYear - 2009 },
        postgres: { label: 'PostgreSQL', imgSrc: 'postgresql.svg', doInvert: true, blurb: '', experience: ['previous'], years: 2 },
        // 
        mongoose: { label: 'Mongoose', imgSrc: 'mongoose.svg', doInvert: true, blurb: '', experience: ['current'], years: 2 },
        express: { label: 'Express', imgSrc: 'express.svg', doInvert: true, blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2015 },
        puppeteer: { label: 'Puppeteer', imgSrc: 'puppeteer.svg', blurb: '', experience: ['current'], years: this.currentYear - 2019 },
        nginx: { label: 'NginX', imgSrc: 'nginx.svg', doInvert: true, blurb: '', experience: ['previous', 'hobby'], years: this.currentYear - 2016 },
        apache: { label: 'Apache', imgSrc: 'apache.svg', doInvert: true, blurb: '', experience: ['previous'], years: this.currentYear - 2015 },
        // 
        azure: { label: 'Microsoft Azure', imgSrc: 'azure.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        mongodbatlas: { label: 'MongoDB Atlas', imgSrc: 'mongodb.svg', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2019 },
        aws: { label: 'AWS', iconSrc: 'fa-aws', blurb: '', experience: ['hobby'], years: 1 },
        ukfast: { label: 'UK Fast Cloudflex', imgSrc: 'ukfast.jpg', blurb: '', experience: ['previous'], years: 3 },
        netlify: { label: 'Netlify', imgSrc: 'netlify.svg', doInvert: true, blurb: '', experience: ['hobby'], years: this.currentYear - 2020 },
        //
        windowserver: { label: 'Windows Server', imgSrc: 'windows.svg', doInvert: true, blurb: '', experience: ['current', 'previous'], years: 3 },
        linux: { label: 'Linux (Ubuntu/Gentoo)', imgSrc: 'linux.svg', doInvert: true, blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015 },
        //
        jade: { label: 'Jade/Pug', imgSrc: 'pug.svg', blurb: '', experience: ['current', 'hobby'], years: 4 },
        smarty: { label: 'Smarty', imgSrc: 'smarty.svg', blurb: '', experience: ['previous'], years: 4 },
        ejs: { label: 'EJS', imgSrc: 'ejs.svg', blurb: '', experience: ['hobby'], years: 2 },
        handlebars: { label: 'Handlebars', imgSrc: 'handlebars.svg', doInvert: true, blurb: '', experience: ['current'], years: 1 },
        //
        html: { label: 'HTML & HTML5', iconSrc: 'fa-html5', blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2003 },
        css: { label: 'CSS & CSS3', iconSrc: 'fa-css3-alt', blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2003 },
        sass: { label: 'SASS', iconSrc: 'fa-sass', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2016 },
        //
        csharp: { label: 'C#', imgSrc: 'csharp.svg', doInvert: true, blurb: '', experience: ['current'], years: 1 },
        dotnet: { label: '.NET', imgSrc: 'dotnet.svg', doInvert: true, blurb: '', experience: ['current'], years: 1 },
        java: { label: 'Java', iconSrc: 'fa-java', blurb: '', experience: ['current', 'hobby'], years: 1 },
        // 
        angular1: { label: 'AngularJS 1.5', iconSrc: 'fa-angular', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2016 },
        angular2: { label: 'Angular2 (6+)', iconSrc: 'fa-angular', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2017 },
        ionic: { label: 'Ionic 3+', imgSrc: 'ionic.svg', doBrightness: true, blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2017 },
        jquery: { label: 'jQuery (1.1.12 -> 1.7.2 mostly)', imgSrc: 'jquery.svg', doInvert: true, blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2009 },
        jqueryui: { label: 'jQuery UI', imgSrc: 'jquery-ui.svg', doBrightness: true, blurb: '', experience: ['previous'], years: 3 },
        // 
        redis: { label: 'Redis', imgSrc: 'redis.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        cloudflarefunctions: { label: 'Cloudflare Functions', imgSrc: 'cloudflare.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2020 },
        cloudflarecdn: { label: 'Cloudflare', imgSrc: 'cloudflare.svg', doInvert: true, blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2017 },
        // 
        threedmodelling: { label: '3D Modelling/CAD', imgSrc: 'modelling.svg', blurb: '', experience: ['hobby'], years: this.currentYear - 2020 },
        threedprinting: { label: '3D Printing', imgSrc: '3d-printing.svg', doInvert: true, blurb: '', experience: ['hobby'], years: this.currentYear - 2020 },
        // 
        barclaycard: { label: 'BarclayCard', imgSrc: 'barclays.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2021 },
        paypal: { label: 'PayPal', iconSrc: 'fa-paypal', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2016 },
        // 
        jasmine: { label: 'JasmineJS', imgSrc: 'jasmine.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        karma: { label: 'KarmaJS', imgSrc: 'karma.svg', blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        mocha: { label: 'MochaJS + ShouldJS', imgSrc: 'mocha.svg', blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        // 
        visualstudiopipelines: { label: 'Visual Studio Pipelines', imgSrc: 'visual-studio.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        docker: { label: 'Docker', iconSrc: 'fa-docker', blurb: '', experience: ['current'], years: this.currentYear - 2021 },
        jenkins: { label: 'Jenkins', iconSrc: 'fa-jenkins', blurb: '', experience: ['previous'], years: this.currentYear - 2016 },
        gulp: { label: 'Gulp (Task Management)', iconSrc: 'fa-gulp', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2015 },
        // 
        sendgrid: { label: 'SendGrid', imgSrc: 'sendgrid.svg', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2017 },
        exchange: { label: 'Microsoft Exchange', imgSrc: 'exchange.svg', blurb: '', experience: ['previous'], years: 1 },
        // 
        azureblob: { label: 'Azure Blob Storage', imgSrc: 'blog-storage.svg', blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        akamai: { label: 'Akamai CDN', imgSrc: 'akamai.svg', blurb: '', experience: ['previous'], years: 3 },
        // 
        scrum: { label: 'Scrum', imgSrc: 'scrum.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2014 },
        lean: { label: 'Lean Methodologies ', imgSrc: 'lean.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        agile: { label: 'Agile Development ', imgSrc: 'agile.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        visualstudioonline: { label: 'Visual Studio Online ', imgSrc: 'visual-studio.svg', doInvert: true, blurb: '', experience: ['previous'], years: this.currentYear - 2017 },
        jira: { label: 'JIRA', iconSrc: 'fa-jira', blurb: '', experience: ['previous'], years: 2 },
        trello: { label: 'Trello', iconSrc: 'fa-trello', blurb: '', experience: ['current', 'previous'], years: 3 },
        // 
        git: { label: 'Git', iconSrc: 'fa-git', blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2014 },
        visualstudioteamservices: { label: 'Visual Studio Team Services ', imgSrc: 'visual-studio.svg', doInvert: true, blurb: '', experience: ['current'], years: this.currentYear - 2017 },
        svn: { label: 'SVN (CLI + Tortoise)', imgSrc: 'subversion.svg', doInvert: true, blurb: '', experience: ['previous', 'hobby'], years: this.currentYear - 2009 },
        github: { label: 'GitHub', iconSrc: 'fa-github', blurb: '', experience: ['hobby'], years: this.currentYear - 2016 },
        // 
        powershell: { label: 'PowerShell', imgSrc: 'powershell.svg', doInvert: true, blurb: '', experience: ['previous', 'hobby'], years: this.currentYear - 2016 },
        bash: { label: 'Bash', imgSrc: 'bash.svg', blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015 },
        batch: { label: 'Batch', imgSrc: 'batch.svg', doInvert: true, blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2016 },
        // 
        slack: { label: 'Slack', iconSrc: 'fa-slack', blurb: '', experience: ['hobby'], years: 1 },
        discord: { label: 'Discord', iconSrc: 'fa-discord', blurb: '', experience: ['hobby'], years: this.currentYear - 2019 },
        exchangewebservices: { label: 'Exchange Web Services', imgSrc: 'exchange.svg', blurb: '', experience: ['previous'], years: 1 },
        googlemaps: { label: 'Google Maps', imgSrc: 'google-maps.svg', blurb: '', experience: ['current', 'previous'], years: 2 },
        googlegraphs: { label: 'Google Graphs', imgSrc: 'google-developers.svg', blurb: '', experience: ['current'], years: this.currentYear - 2019 },
        facebook: { label: 'Facebook', iconSrc: 'fa-facebook', blurb: '', experience: ['hobby'], years: this.currentYear - 2016 },
        twitter: { label: 'Twitter', iconSrc: 'fa-twitter', blurb: '', experience: ['hobby'], years: 1 },
        youtube: { label: 'YouTube', iconSrc: 'fa-youtube', blurb: '', experience: ['hobby'], years: 1 },
        wikipedia: { label: 'Wikipedia', iconSrc: 'fa-wikipedia-w', blurb: '', experience: ['previous'], years: 2 },
        sms: { label: 'textlocal.com & fastsms.co.uk', iconSrc: 'fa-sms', blurb: '', experience: ['current', 'previous', 'hobby'], years: 3 },
        paypalapn: { label: 'PayPal & PayPal APN', iconSrc: 'fa-paypal', blurb: '', experience: ['current', 'hobby'], years: this.currentYear - 2016 },
        // 
        googleanalytics: { label: 'Google Analytics', imgSrc: 'google-analytics.svg', blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015 },
        googlewebmasters: { label: 'Google Webmasters', imgSrc: 'google-developers.svg', blurb: '', experience: ['current', 'previous', 'hobby'], years: this.currentYear - 2015 },
        // 
        alexa: { label: 'Amazon Alexa', imgSrc: 'alexa.svg', doInvert: true, blurb: '', experience: ['current', 'hobby'], years: 1 },
        wordpress: { label: 'WordPress', iconSrc: 'fa-wordpress', blurb: '', experience: ['previous', 'hobby'], years: 3 },

    }

    constructor() { }

    ngOnInit(): void {

        if (this.icon && this.icon in this.index) {
            this.selected = this.index[this.icon];
        } else {
            console.log('Missing ICON!: ' + this.icon);

        }

    }

    experienceClass(experience: string[]): string {
        return experience.join(' ');
    }

}
