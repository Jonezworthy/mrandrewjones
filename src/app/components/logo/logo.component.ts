import { Component, Input, OnInit } from '@angular/core';
interface Icon {
    label: string, iconSrc?: string, imgSrc?: string, doInvert?: Boolean, doBrightness?: Boolean
}
@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
    @Input('icon') icon: string = '';
    @Input('label') label: string = '';
    selected: Icon = { label: '' };

    index: { [key: string]: Icon } = {
        typescript: { label: 'TypeScript', imgSrc: 'typescript.svg', },
        javascript: { label: 'JavaScript (NodeJS)', iconSrc: 'fa-js', },
        nodejsexpress: { label: 'NodeJS with Express', iconSrc: 'fa-node', },
        nodejs: { label: 'NodeJS', iconSrc: 'fa-node' },
        php: { label: 'PHP 5.1 -> 7', iconSrc: 'fa-php', },
        // 
        mongodb: { label: 'MongoDB', imgSrc: 'mongodb.svg', },
        cosmosdb: { label: 'CosmosDB', imgSrc: 'cosmosdb.svg', },
        mssql: { label: 'MSSQL', imgSrc: 'mssql.svg', doInvert: true, },
        mysql: { label: 'MySQL', imgSrc: 'mysql.svg', doInvert: true, },
        postgres: { label: 'PostgreSQL', imgSrc: 'postgresql.svg', doInvert: true, },
        // 
        mongoose: { label: 'Mongoose', imgSrc: 'mongoose.svg', doInvert: true },
        express: { label: 'Express', imgSrc: 'express.svg', doInvert: true },
        puppeteer: { label: 'Puppeteer', imgSrc: 'puppeteer.svg', },
        nginx: { label: 'NginX', imgSrc: 'nginx.svg', doInvert: true, },
        apache: { label: 'Apache', imgSrc: 'apache.svg', doInvert: true, },
        // 
        azure: { label: 'Microsoft Azure', imgSrc: 'azure.svg', doInvert: true },
        mongodbatlas: { label: 'MongoDB Atlas', imgSrc: 'mongodb.svg', },
        aws: { label: 'AWS', iconSrc: 'fa-aws', },
        ukfast: { label: 'UK Fast Cloudflex', imgSrc: 'ukfast.jpg', },
        netlify: { label: 'Netlify', imgSrc: 'netlify.svg', doInvert: true },
        //
        windowserver: { label: 'Windows Server', imgSrc: 'windows.svg', doInvert: true },
        linux: { label: 'Linux (Ubuntu/Gentoo/CentOS)', imgSrc: 'linux.svg', doInvert: true },
        //
        jade: { label: 'Jade/Pug', imgSrc: 'pug.svg', },
        smarty: { label: 'Smarty', imgSrc: 'smarty.svg', },
        ejs: { label: 'EJS', imgSrc: 'ejs.svg', },
        handlebars: { label: 'Handlebars', imgSrc: 'handlebars.svg', doInvert: true },
        //
        html: { label: 'HTML & HTML5', iconSrc: 'fa-html5', },
        css: { label: 'CSS & CSS3', iconSrc: 'fa-css3-alt', },
        sass: { label: 'SASS', iconSrc: 'fa-sass', },
        //
        csharp: { label: 'C#', imgSrc: 'csharp.svg', doInvert: true },
        dotnet: { label: '.NET', imgSrc: 'dotnet.svg', doInvert: true },
        java: { label: 'Java', iconSrc: 'fa-java', },
        // 
        angular1: { label: 'AngularJS 1.5', iconSrc: 'fa-angular', },
        angular2: { label: 'Angular2 (6+)', iconSrc: 'fa-angular', },
        ionic: { label: 'Ionic 3+', imgSrc: 'ionic.svg', doBrightness: true },
        jquery: { label: 'jQuery (1.1.12 -> 1.7.2 mostly)', imgSrc: 'jquery.svg', doInvert: true },
        jqueryui: { label: 'jQuery UI', imgSrc: 'jquery-ui.svg', doBrightness: true },
        // 
        redis: { label: 'Redis', imgSrc: 'redis.svg', doInvert: true },
        cloudflarefunctions: { label: 'Cloudflare Functions', imgSrc: 'cloudflare.svg', doInvert: true },
        cloudflarecdn: { label: 'Cloudflare', imgSrc: 'cloudflare.svg', doInvert: true },
        // 
        threedmodelling: { label: '3D Modelling/CAD', imgSrc: 'modelling.svg' },
        threedprinting: { label: '3D Printing', imgSrc: '3d-printing.svg', doInvert: true },
        // 
        barclaycard: { label: 'BarclayCard', imgSrc: 'barclays.svg', doInvert: true },
        paypal: { label: 'PayPal', iconSrc: 'fa-paypal' },
        // 
        jasmine: { label: 'JasmineJS', imgSrc: 'jasmine.svg', doInvert: true },
        karma: { label: 'KarmaJS', imgSrc: 'karma.svg' },
        mocha: { label: 'MochaJS + ShouldJS', imgSrc: 'mocha.svg', },
        // 
        visualstudiopipelines: { label: 'Visual Studio Pipelines', imgSrc: 'visual-studio.svg', doInvert: true },
        docker: { label: 'Docker', iconSrc: 'fa-docker' },
        jenkins: { label: 'Jenkins', iconSrc: 'fa-jenkins' },
        gulp: { label: 'Gulp (Task Management)', iconSrc: 'fa-gulp' },
        // 
        sendgrid: { label: 'SendGrid', imgSrc: 'sendgrid.svg' },
        exchange: { label: 'Microsoft Exchange', imgSrc: 'exchange.svg' },
        // 
        azureblob: { label: 'Azure Blob Storage', imgSrc: 'blog-storage.svg' },
        akamai: { label: 'Akamai CDN', imgSrc: 'akamai.svg' },
        // 
        scrum: { label: 'Scrum', imgSrc: 'scrum.svg', doInvert: true },
        lean: { label: 'Lean Methodologies ', imgSrc: 'lean.svg', doInvert: true },
        agile: { label: 'Agile Development ', imgSrc: 'agile.svg', doInvert: true },
        visualstudioonline: { label: 'Visual Studio Online ', imgSrc: 'visual-studio.svg', doInvert: true },
        jira: { label: 'JIRA', iconSrc: 'fa-jira' },
        trello: { label: 'Trello', iconSrc: 'fa-trello' },
        // 
        git: { label: 'Git', iconSrc: 'fa-git' },
        visualstudioteamservices: { label: 'Visual Studio Team Services ', imgSrc: 'visual-studio.svg', doInvert: true },
        svn: { label: 'SVN (CLI + Tortoise)', imgSrc: 'subversion.svg', doInvert: true },
        github: { label: 'GitHub', iconSrc: 'fa-github' },
        // 
        powershell: { label: 'PowerShell', imgSrc: 'powershell.svg', doInvert: true },
        bash: { label: 'Bash', imgSrc: 'bash.svg' },
        batch: { label: 'Batch', imgSrc: 'batch.svg', doInvert: true },
        // 
        slack: { label: 'Slack', iconSrc: 'fa-slack' },
        discord: { label: 'Discord', iconSrc: 'fa-discord' },
        exchangewebservices: { label: 'Exchange Web Services', imgSrc: 'exchange.svg' },
        googlemaps: { label: 'Google Maps', imgSrc: 'google-maps.svg' },
        googlegraphs: { label: 'Google Graphs', imgSrc: 'google-developers.svg' },
        facebook: { label: 'Facebook', iconSrc: 'fa-facebook' },
        twitter: { label: 'Twitter', iconSrc: 'fa-twitter' },
        youtube: { label: 'YouTube', iconSrc: 'fa-youtube' },
        wikipedia: { label: 'Wikipedia', iconSrc: 'fa-wikipedia-w' },
        sms: { label: 'Text messaging (textlocal.com & fastsms.co.uk)', iconSrc: 'fa-sms' },
        paypalapn: { label: 'PayPal & PayPal APN', iconSrc: 'fa-paypal' },
        // 
        googleanalytics: { label: 'Google Analytics', imgSrc: 'google-analytics.svg' },
        googlewebmasters: { label: 'Google Webmasters', imgSrc: 'google-developers.svg' },
        // 
        alexa: { label: 'Amazon Alexa', imgSrc: 'alexa.svg', doInvert: true },
        wordpress: { label: 'WordPress', iconSrc: 'fa-wordpress' },
        voice: { label: 'Voice Recognition', imgSrc: 'voice.svg', doInvert: true },

    }

    constructor() { }

    ngOnInit(): void {

        if (this.icon && this.icon in this.index) {
            this.selected = this.index[this.icon];
        } else {
            console.log('Missing ICON!: ' + this.icon);

        }

    }

}
