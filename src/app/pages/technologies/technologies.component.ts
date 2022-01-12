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
    techs: { [key: string]: { [key: string]: Array<{ value: string, history: string, icon: string, iconInvert?: boolean, iconBrightness?: boolean }> } } = {
        'Server Side': {
            'Languages': [
                { value: 'TypeScript', history: 'current', icon: 'typescript.svg' },
                { value: 'JavaScript (NodeJS) (ES6, ES2016+)', history: 'current', icon: 'fab fa-js', },
                { value: 'NodeJS with Express', history: 'current', icon: 'fab fa-node' },
                { value: 'PHP 5.1 -> 7 (Procedural, OOP, MVC)', history: 'previous', icon: 'fab fa-php' },
            ],
            'Databases': [
                { value: 'MongoDB', history: 'current', icon: 'mongodb.svg' },
                { value: 'CosmosDB', history: 'current', icon: 'cosmosdb.svg' },
                { value: 'MSSQL', history: 'previous', icon: 'mssql.svg', iconInvert: true },
                { value: 'MySQL', history: 'hobby', icon: 'mysql.svg', iconInvert: true },
                { value: 'PostgreSQL', history: 'previous', icon: 'postgresql.svg', iconInvert: true },
            ],
            'Server Libraries or Frameworks': [
                { value: 'Mongoose', history: 'current', icon: 'mongoose.png' },
                { value: 'Express', history: 'current', icon: 'express.jpg' },
                { value: 'Puppeteer', history: 'current', icon: 'puppeteer.svg' },
                { value: 'NginX', history: 'previous', icon: 'nginx.svg', iconInvert: true },
                { value: 'Apache', history: 'previous', icon: 'apache.svg', iconInvert: true },
            ],
            'Hosting': [
                { value: 'Microsoft Azure', history: 'current', icon: 'azure.svg' },
                { value: 'MongoDB Atlas', history: 'current', icon: 'mongodb.svg' },
                { value: 'AWS', history: 'previous', icon: 'fab fa-aws' },
                { value: 'UK Fast CloudFlex', history: 'previous', icon: 'ukfast.jpg' },
                { value: 'Netlify', history: 'hobby', icon: 'netlify.svg', iconInvert: true },
            ],
            'Server Management': [
                { value: 'Windows Server', history: 'current', icon: 'windows.svg', iconInvert: true },
                { value: 'Linux (Ubuntu + Gentoo + CentOS)', history: 'previous', icon: 'linux.svg', iconInvert: true },
            ],
            'Templating': [
                { value: 'Jade/Pug', history: 'current', icon: 'pug.svg' },
                { value: 'Smarty', history: 'previous', icon: 'smarty.svg' },
                { value: 'EJS', history: 'hobby', icon: 'ejs.svg' },
                { value: 'Handlebars', history: 'hobby', icon: 'handlebars.svg', iconBrightness: true },
            ]
        },
        'Client / Software Side': {
            'Client Languages': [
                { value: 'JavaScript (OOP, ES6, ES2016+)', history: 'current', icon: 'fab fa-js' },
                { value: 'HTML & HTML5', history: 'current', icon: 'fab fa-html5' },
                { value: 'CSS & CSS3', history: 'current', icon: 'fab fa-css3-alt' },
                { value: 'SASS', history: 'current', icon: 'fab fa-sass' },
            ],
            'Software Languages': [
                { value: 'C#', history: 'current', icon: 'csharp.svg', iconInvert: true },
                { value: '.NET', history: 'current', icon: 'dotnet.svg', iconInvert: true },
                { value: 'Java', history: 'hobby', icon: 'fab fa-java' },
            ],
            'Libraries or Frameworks': [
                { value: 'AngularJS 1.5', history: 'current', icon: 'fab fa-angular' },
                { value: 'Angular2 (6+)', history: 'current', icon: 'fab fa-angular' },
                { value: 'Ionic 3+', history: 'current', icon: 'ionic.svg', iconBrightness: true },
                { value: 'jQuery (1.1.12 -> 1.7.2 mostly)', history: 'current', icon: 'jquery.svg', iconInvert: true },
                { value: 'jQuery UI', history: 'previous', icon: 'jquery-ui.svg', iconBrightness: true },
            ],
            'Caching': [
                { value: 'Redis', history: 'current', icon: 'redis.svg', iconInvert: true },
                { value: 'Cloudflare Functions', history: 'current', icon: 'cloudflare.svg', iconInvert: true },
            ],
            'Other': [
                { value: '3D Modelling/CAD', history: 'hobby', icon: 'modelling.svg' },
                { value: '3D Printing', history: 'hobby', icon: '3d-printing.svg', iconInvert: true },
            ]
        },

        'Principles': {
            'Payments': [
                { value: 'BarclayCard', history: 'current', icon: 'barclays.svg', iconInvert: true },
                { value: 'PayPal', history: 'current', icon: 'fab fa-paypal' },
            ],
            'Testing': [
                { value: 'JasmineJS', history: 'current', icon: 'jasmine.svg', iconInvert: true },
                { value: 'KarmaJS', history: 'current', icon: 'karma.svg' },
                { value: 'MochaJS + ShouldJS', history: 'current', icon: 'mocha.svg' },
            ],
            'Continuous Integration': [
                { value: 'Visual Studio Pipelines', history: 'current', icon: 'visual-studio.svg', iconInvert: true },
                { value: 'Docker', history: 'current', icon: 'fab fa-docker' },
                { value: 'Jenkins', history: 'previous', icon: 'fab fa-jenkins' },
                { value: 'Gulp (Task Management)', history: 'hobby', icon: 'fab fa-gulp' },
            ],
        },
        'Networking': {
            'Email Providers': [
                { value: 'SendGrid', history: 'current', icon: 'sendgrid.svg' },
                { value: 'Microsoft Exchange', history: 'previous', icon: 'exchange.svg' },
            ],
            'CDN': [
                { value: 'Cloudflare CDN', history: 'current', icon: 'cloudflare.svg', iconInvert: true },
                { value: 'Azure Blob Storage', history: 'current', icon: 'blog-storage.svg' },
                { value: 'Akamai CDN', history: 'previous', icon: 'akamai.svg' },
            ]
        },
        'Admin': {
            'Work Management': [
                { value: 'Scrum', history: 'current', icon: 'scrum.svg', iconBrightness: true },
                { value: 'Lean Methodologies', history: 'current', icon: 'lean.svg', iconInvert: true },
                { value: 'Agile Development', history: 'current', icon: 'agile.svg', iconInvert: true },
                { value: 'Visual Studio Online', history: 'current', icon: 'visual-studio.svg', iconInvert: true },
                { value: 'JIRA', history: 'previous', icon: 'fab fa-jira' },
                { value: 'Trello', history: 'previous', icon: 'fab fa-trello' },
            ],
            'Version Control': [
                { value: 'Git', history: 'current', icon: 'fab fa-git' },
                { value: 'Visual Studio Team Services', history: 'current', icon: 'visual-studio.svg', iconInvert: true },
                { value: 'SVN (CLI + Tortoise)', history: 'previous', icon: 'subversion.svg', iconInvert: true },
                { value: 'GitHub', history: 'previous', icon: 'fab fa-github' },
            ],
            'Scripting': [
                { value: 'PowerShell', history: 'current', icon: 'powershell.svg', iconInvert: true },
                { value: 'Bash', history: 'previous', icon: 'bash.svg' },
                { value: 'Batch', history: 'previous', icon: 'batch.svg', iconInvert: true },
            ],
        },
        'Third Party': {
            'APIs': [
                { value: 'Slack', history: 'current', icon: 'fab fa-slack' },
                { value: 'Discord', history: 'current', icon: 'fab fa-discord' },
                { value: 'Trello', history: 'current', icon: 'fab fa-trello' },
                { value: 'Exchange Web Services', history: 'previous', icon: 'exchange.svg' },
                { value: 'Google Maps', history: 'current', icon: 'google-maps.svg' },
                { value: 'Google Graphs', history: 'previous', icon: 'google-developers.svg' },
                { value: 'Facebook', history: 'previous', icon: 'fab fa-facebook' },
                { value: 'Twittery', history: 'previous', icon: 'fab fa-twitter' },
                { value: 'YouTube', history: 'previous', icon: 'fab fa-youtube' },
                { value: 'Wikipedia', history: 'previous', icon: 'fab fa-wikipedia-w' },
                { value: 'Text messaging (textlocal.com & fastsms.co.uk)', history: 'previous', icon: 'fad fa-sms' },
                { value: 'PayPal & PayPal APN', history: 'current', icon: 'fab fa-paypal' },
            ],
            'Analytical': [
                { value: 'Google Analytics', history: 'current', icon: 'google-analytics.svg' },
                { value: 'Google Webmasters', history: 'current', icon: 'google-developers.svg' },
            ],
            'Other': [
                { value: 'Amazon Alexa', history: 'current', icon: 'alexa.svg', iconInvert: true },
                { value: 'WordPress', history: 'previous', icon: 'fab fa-wordpress' },
                { value: 'Voice recognition', history: 'previous', icon: 'voice.svg', iconInvert: true },
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
                    subTech[subKey] = subTech[subKey].filter((item: any) => { return item.value.match(search) });
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
