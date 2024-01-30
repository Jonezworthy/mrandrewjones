import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
    constructor() { }

    histories: { from: string, to: string, years: string, companyName: string, companyDescription: string, title: string, details: any, logo: string, logoClass?: string }[] = [{
        from: 'July 2022',
        to: 'Current',
        years: (((new Date().valueOf() - new Date('2022-08-01').valueOf()) / 2635200000) / 12).toFixed(1) + '+ years',
        companyName: 'Promotions Interactive',
        companyDescription: 'Digital Agency & Promotional Marketing',
        title: 'Tech Lead',
        logo: 'promotions-interactive.svg',
        logoClass: 'grayscale-brightness',
        details: {
            'Key Technologies': ['typescript', 'javascript', 'nodejs', 'mongodb', 'express', 'azure', 'sass', 'angular2'],
            'Keywords': ['SaaS', 'eCommerce', 'Microservices', 'Automated Testing', 'CI/CD'],
            'Duties': '\
            <ul>\n\
                <li>Project management</li>\n\
                <li>DevOps, automated testing and server infrastructure</li>\n\
            </ul>',
            'Notable Achievements': '\
            <ul>\n\
                <li>Created a platform as a service from scratch</li>\n\
            </ul>',
            'Notable Skills': '\
            <ul>\n\
                <li>Working to strict deadlines</li>\n\
                <li>Working with multiple clients simultaneously</li>\n\
                <li>Effective communication with external clients</li>\n\
                <li>Providing documentation and demonstrations</li>\n\
            </ul>',
        }
    },
    {
        from: 'October 2017',
        to: 'July 2022',
        years: '4+ years',
        companyName: 'The NEC Group',
        companyDescription: 'Huge exhibition company',
        title: 'Lead Software/Web Developer',
        logo: 'thenec.png',
        logoClass: 'grayscale-brightness',
        details: {
            'Key Technologies': ['typescript', 'javascript', 'nodejs', 'mongodb', 'express', 'azure', 'ionic', 'sass', 'angular2'],
            'Keywords': ['Scrum', 'Agile', 'SaaS', 'eCommerce', 'Microservices', 'Automated Testing', 'CI/CD', 'App Development'],
            'Duties': '\
            <ul>\n\
                <li>Leading stand ups and weekly progress meetings</li>\n\
                <li>Project management</li>\n\
                <li>DevOps, automated testing and server infrastructure</li>\n\
                <li>Interviewing potential talent</li>\n\
                <li>Conducting performance reviews</li>\n\
                <li>Mentoring junior developers/career plans</li>\n\
                <li>Code reviews</li>\n\
                <li>Liaising with internal and external product owners</li>\n\
                <li>Managing product life cycles in software, app, and web development</li>\n\
            </ul>',
            'Notable Achievements': '\
            <ul>\n\
                <li>Sole author of the scanning software across NEC Group</li>\n\
                <li>Facilitated the sale and scanning of more than 10 million tickets</li>\n\
                <li>Introduced continuous integration with Azure and Docker</li>\n\
                <li>Introduced automated testing using Mocha and ShouldJS</li>\n\
                <li>Created a scanning platform designed for intense rapid scaling</li>\n\
            </ul>',
            'Notable Skills': '\
            <ul>\n\
                <li>Working to strict deadlines</li>\n\
                <li>Working with multiple clients simultaneously</li>\n\
                <li>Effective communication with external clients</li>\n\
                <li>Providing documentation and demonstrations</li>\n\
            </ul>',
        }
    },
    {
        from: 'July 2013',
        to: 'October 2017',
        years: '4 years',
        companyName: 'Cruise.co/Cruise.co.uk',
        companyDescription: 'International travel agent for Cruises/holidays',
        title: 'Senior Software Engineer',
        logo: 'cruisedotco.png',
        logoClass: 'grayscale-brightness',
        details: {
            'Key Technologies': ['php', 'mssql', 'nginx', 'apache', 'ukfast', 'linux', 'smarty', 'jquery'],
            'Keywords': ['Scrum', 'eCommerce', 'Automated Testing', 'CI/CD', 'App Development'],
            'Notable Achievements': '\
            <ul>\n\
                <li>I am the sole author of the company\'s Android App</li>\n\
                <li>Created an automated unsubscribe system using Exchange Web Service API</li>\n\
                <li>Invented a voice interpreting system to analyse voice commands</li>\n\
                <li>Created a Google Chrome extension to aid the Sales staff with their day-to-day work</li>\n\
                <li>Was sole authority on the company\'s CRM infrastructure</li>\n\
                <li>Created a caching library for jQuery\'s AJAX</li>\n\
            </ul>',
            'Other Duties': '\
            <ul>\n\
                <li>Making decisions on server infrastructure</li>\n\
                <li>Code reviews</li>\n\
                <li>Managing and scheduling projects</li>\n\
                <li>I honestly don\'t believe anyone actually reads this stuff.</li>\n\
                <li>Point this bullet point out to me for a free coffee or beer!</li>\n\
                <li>Mentoring junior developers</li>\n\
            </ul>',
            'Senior duties': '\n\
                <ul>\n\
                    <li>Managing and leading my own team</li>\n\
                    <li>Conducting interviews</li>\n\
                    <li>Decision making on potential candidates</li>\n\
                    <li>Answering technical questions/reviewing candidate code on technical level</li>\n\
                </ul>'

            ,
            'General Info': 'I work as part of a team of 13 developers, developing the web site, our content management system and booking systems. ',
            'Reason for leaving': 'I wanted to work with the MEAN stack '

        }
    }, {
        to: 'July 2013',
        from: 'January 2008',
        years: '5 years',
        companyName: 'Redditch Web Solutions/RedditchWeb.co.uk',
        companyDescription: 'My web design/development company',
        logo: 'redditchweb.png',
        logoClass: 'grayscale',
        title: 'Founder and Lead Designer/Developer',
        details: {
            'Key Technologies': ['php', 'mysql', 'apache', 'windowserver', 'jquery', 'linux', 'wordpress'],
            'Notable Achievements': 'Creating a custom a bespoke online shop for <a class="md-primary" href="http://www.jordan-saws.co.uk/" target="_blank">http://www.jordan-saws.co.uk </a>\n\
            <br /> Due to their products being so unique in requirements, it was best to create a sequential, step by step process for choosing your specific product.',
            'Reason for leaving': 'I closed the company after I found permanent, stable employment '
        }
    }
    ];

    ngOnInit(): void {

    }
    trackByIndex(index: number): number {
        return index;
    }
    getHueFromIndex(index: number): string {
        if (index % 2 === 0) {
            return '0';
        }
        return '2';
    };

    keysOf(object: Object): string[] {
        return Object.keys(object);
    }

    ngOnDestroy(): void {

    }
}
