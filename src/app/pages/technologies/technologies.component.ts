import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit, OnDestroy {
    constructor() { }
    searchTerm: string = '';
    cache: { [key: string]: object } = {};
    yearsOfDev: number = new Date().getFullYear() - 2008;
    techs: { [key: string]: { [key: string]: Array<{ icon: string , search: string}> } } = {
        'Server Side': {
            'Languages': [
                { icon: 'typescript', search: 'TypeScript' },
                { icon: 'javascript', search: 'JavaScript Node' },
                { icon: 'nodejs', search: 'NodeJS with Express' },
                { icon: 'php', search: 'PHP 5.1 -> 7 (Procedural, OOP, MVC)' },
            ],
            'Databases': [
                { icon: 'mongodb', search: 'MongoDB' },
                { icon: 'cosmosdb', search: 'CosmosDB' },
                { icon: 'mssql', search: 'MSSQL' },
                { icon: 'mysql', search: 'MySQL' },
                { icon: 'postgres', search: 'PostgreSQL' },
            ],
            'Server Libraries or Frameworks': [
                { icon: 'mongoose', search: 'Mongoose' },
                { icon: 'express', search: 'Express' },
                { icon: 'puppeteer', search: 'Puppeteer' },
                { icon: 'nginx', search: 'NginX' },
                { icon: 'apache', search: 'Apache' },
            ],
            'Hosting': [
                { icon: 'azure', search: 'Microsoft Azure' },
                { icon: 'mongodbatlas', search: 'MongoDB Atlas' },
                { icon: 'aws', search: 'AWS' },
                { icon: 'ukfast', search: 'UK Fast Cloudflex' },
                { icon: 'netlify', search: 'Netlify' },
            ],
            'Server Management': [
                { icon: 'windowserver', search: 'Windows Server' },
                { icon: 'linux', search: 'Linux (Ubuntu + Gentoo + CentOS)' },
            ],
            'Templating': [
                { icon: 'jade', search: 'Jade/Pug' },
                { icon: 'smarty', search: 'Smarty' },
                { icon: 'ejs', search: 'EJS' },
                { icon: 'handlebars', search: 'Handlebars' },
            ]
        },
        'Client / Software Side': {
            'Client Languages': [
                { icon: 'javascript', search: 'JavaScript (OOP, ES6, ES2016+)' },
                { icon: 'html', search: 'HTML & HTML5' },
                { icon: 'css', search: 'CSS & CSS3' },
                { icon: 'sass', search: 'SASS' },
            ],
            'Software Languages': [
                { icon: 'csharp', search: 'C#' },
                { icon: 'dotnet', search: '.NET' },
                { icon: 'java', search: 'Java' },
            ],
            'Libraries or Frameworks': [
                { icon: 'angular1', search: 'Angular' },
                { icon: 'angular2', search: 'Angular' },
                { icon: 'ionic', search: 'Ionic' },
                { icon: 'jquery', search: 'jQuery' },
                { icon: 'jqueryui', search: 'jQuery' },
            ],
            'Caching': [
                { icon: 'redis', search: 'Redis' },
                { icon: 'cloudflarefunctions', search: 'Cloudflare' },
            ],
            'Other': [
                { icon: 'threedmodelling', search: '3D' },
                { icon: 'threedprinting', search: '3D' },
            ]
        },

        'Principles': {
            'Payments': [
                { icon: 'barclaycard', search: 'Barclays payment' },
                { icon: 'paypal', search: 'PayPal' },
            ],
            'Testing': [
                { icon: 'jasmine', search: 'Jasmine' },
                { icon: 'karma', search: 'Karma' },
                { icon: 'mocha', search: 'Mocha' },
            ],
            'Continuous Integration': [
                { icon: 'visualstudiopipelines', search: 'Visual Studio' },
                { icon: 'docker', search: 'Docker' },
                { icon: 'jenkins', search: 'Jenkins' },
                { icon: 'gulp', search: 'Gulp' },
            ],
       },
        'Networking': {
            'Email Providers': [
                { icon: 'sendgrid', search: 'SendGrid' },
                { icon: 'exchange', search: 'Microsoft Exchange' },
            ],
            'CDN': [
                { icon: 'cloudflarecdn', search: 'Cloudflare' },
                { icon: 'azureblob', search: 'Azure Blob' },
                { icon: 'akamai', search: 'Akamai' },
            ]
       },
        'Admin': {
            'Work Management': [
                { icon: 'scrum', search: 'Scrum' },
                { icon: 'lean', search: 'Lean' },
                { icon: 'agile', search: 'Agile' },
                { icon: 'visualstudioonline', search: 'Visual Studio Online' },
                { icon: 'jira', search: 'Jira' },
                { icon: 'trello', search: 'Trello' },
            ],
            'Version Control': [
                { icon: 'git', search: 'Git' },
                { icon: 'visualstudioteamservices', search: 'Visual Studio Team Services' },
                { icon: 'svn', search: 'svn' },
                { icon: 'github', search: 'Github' },
            ],
            'Scripting': [
                { icon: 'powershell', search: 'Powershell' },
                { icon: 'bash', search: 'bash' },
                { icon: 'batch', search: 'batch' },
            ],
        },
        'Third Party': {
            'APIs': [
                { icon: 'slack', search: 'Slack' },
                { icon: 'discord', search: 'Discord' },
                { icon: 'trello', search: 'Trello' },
                { icon: 'exchangewebservices', search: 'Exchange Web Services' },
                { icon: 'googlemaps', search: 'Google Maps' },
                { icon: 'googlegraphs', search: 'Google Graphs' },
                { icon: 'facebook', search: 'Facebook' },
                { icon: 'twitter', search: 'Twitter' },
                { icon: 'youtube', search: 'YouTube' },
                { icon: 'wikipedia', search: 'Wikipedia' },
                { icon: 'sms', search: 'sms' },
                { icon: 'paypal', search: 'PayPal' },
            ],
            'Analytical': [
                { icon: 'googleanalytics', search: 'Google Analytics' },
                { icon: 'googlewebmasters', search: 'Google Webmasters' },
            ],
            'Other': [
                { icon: 'alexa', search: 'Alexa' },
                { icon: 'wordpress', search: 'WordPress' },
                { icon: 'voice', search: 'Voice' },
            ]
        }
    }

    filteredTechs(): any {
        if (this.searchTerm in this.cache) {
            return this.cache[this.searchTerm];
        }
        const search = new RegExp(this.searchTerm, 'i');
        const techs: any = JSON.parse(JSON.stringify(this.techs));

        if (this.searchTerm && search) {
            for (const key in techs) {
                const subTech = techs[key];

                for (const subKey in subTech) {
                    subTech[subKey] = subTech[subKey].filter((item: any) => { return item.search.match(search) });
                }
            }
            for (const key in techs) {
                for (const subKey in techs[key]) {
                    if (!techs[key][subKey].length) {
                        delete techs[key][subKey];
                    }
                    // console.log(subKey);
                }
                if (!Object.keys(techs[key]).length) {
                    delete techs[key];
                }
            }
        }

        this.cache[this.searchTerm] = techs;

        return techs;
    }

    keysOf(object: Object): Array<string> {
        return Object.keys(object);
    }

    getHueFromIndex(index: number): string {
        if (index % 2 === 0) {
            return '2';
        }
        return '0';
    };

    trackBySearchTerm(): string {
        return this.searchTerm;
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
