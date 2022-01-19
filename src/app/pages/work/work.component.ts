import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
    constructor() { }

    histories: { from: string, to: string, companyName: string, companyDescription: string, title: string, details: any, logo: string, logoClass?: string }[] = [{
        from: 'October 2017',
        to: 'Current',
        companyName: 'The NEC Group/The Ticket Factory',
        companyDescription: 'Huge exhibition company',
        title: 'Lead Software/Web Developer',
        logo: 'thenec.png',
        logoClass: 'grayscale-brightness',
        details: {
            'Key Technologies': '<ul class="tech">\n\
                                <li><img src="/assets/logos/typescript.svg" /><p>TypeScript</p></li>\n\
                                <li><i class="fa-js fab "></i><p>JavaScript</p></li>\n\
                                <li><i class="fa-node fab "></i><p>NodeJS</p></li>\n\
                                <li><img src="/assets/logos/mongodb.svg" /><p>MongoDB</p></li>\n\
                                <li><img src="/assets/logos/express.jpg" /><p>Express</p></li>\n\
                                <li><img src="/assets/logos/azure.svg" /><p>Azure</p></li>\n\
                                <li><img src="/assets/logos/ionic.svg" class="brightness" /><p>Ionic 3+</p></li>\n\
                                <li><i class="fa-sass fab "></i><p>SASS</p></li>\n\
                                <li><i class="fa-angular fab "></i><p>Angular 2->12</p></li>\n\
                            </ul>',
            'Notable Achievements': '\
            <ul>\n\
                <li>Introduced continuous integration</li>\n\
                <li>Introduced automated testing</li>\n\
                <li>Managing product life cycles in software, app, and web development</li>\n\
            </ul>',
            'Notable Skills': '\
            <ul>\n\
                <li>Working to strict deadlines</li>\n\
                <li>Working with multiple clients simultaneously</li>\n\
                <li>Effective communication with external clients</li>\n\
                <li>Providing documentation and demonstrations</li>\n\
            </ul>',
            'Lead Developer Duties': '\
            <ul>\n\
                <li>Making decisions on server infrastructure</li>\n\
                <li>Code reviews</li>\n\
                <li>Managing and scheduling projects</li>\n\
                <li>Liaising with product owners</li>\n\
                <li>Heading up stand ups and weekly progress meetings</li>\n\
            </ul>',
            'Line Manager Duties': '\
            <ul>\n\
                <li>Managing and leading my own team</li>\n\
                <li>Approving and managing annual leave</li>\n\
                <li>Conducting performance reviews</li>\n\
                <li>Mentoring junior developers</li>\n\
            </ul>',
            'General Info': 'I have 2 other developers in my team, we look after the ExpoWare services. '

        }
    },
    {
        from: 'July 2013',
        to: 'October 2017',
        companyName: 'Cruise.co/Cruise.co.uk',
        companyDescription: 'International travel agent for Cruises/holidays',
        title: 'Senior Software Engineer',
        logo: 'cruisedotco.png',
        logoClass: 'grayscale-brightness',
        details: {
            'Key Technologies': '<ul class="tech">\n\
                                <li><i class="fa-php fab "></i><p>PHP 5.1 -> 7 (Procedural, OOP, MVC)</p></li>\n\
                                <li><img src="/assets/logos/mssql.svg" class="invert" /><p>MSSQL</p></li>\n\
                                <li><img src="/assets/logos/nginx.svg" class="invert" /><p>NginX</p></li>\n\
                                <li><img src="/assets/logos/apache.svg" class="invert" /><p>Apache</p></li>\n\
                                <li><img src="/assets/logos/ukfast.jpg" /><p>UK Fast CloudFlex</p></li>\n\
                                <li><img src="/assets/logos/linux.svg" class="invert" /><p>Linux (Ubuntu + Gentoo + CentOS)</p></li>\n\
                                <li><img src="/assets/logos/smarty.svg" /><p>Smarty</p></li>\n\
                                <li><img src="/assets/logos/jquery.svg" class="invert" /><p>jQuery (1.1.12 -> 1.7.2 mostly)</p></li>\n\
                                <li><img src="/assets/logos/jquery-ui.svg" class="brightness" /><p>jQuery UI</p></li>\n\
                            </ul>',
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
        to: 'May 2013',
        from: 'January 2013',
        companyName: 'Arrow Consultancy(Redditch) LTD.',
        companyDescription: 'A recruitment agency',
        title: 'IT Consultant/Developer',
        logo: 'arrowconsultancy.png',
        logoClass: 'grayscale-brightness',
        details: {
            'Key Technologies': '<ul class="tech">\n\
                                <li><i class="fa-php fab "></i><p>PHP 5.1 -> 7 (Procedural, OOP, MVC)</p></li>\n\
                                <li><img src="/assets/logos/mysql.svg" class="invert" /><p>MySQL</p></li>\n\
                                <li><img src="/assets/logos/windows.svg" class="invert" /><p>Windows Server</p></li>\n\
                                <li><img src="/assets/logos/jquery.svg" class="invert" /><p>jQuery (1.1.12 -> 1.7.2 mostly)</p></li>\n\
                                <li><img src="/assets/logos/jquery-ui.svg" class="brightness" /><p>jQuery UI</p></li>\n\
                            </ul>',
            'Notable Achievements': 'The CRM which is still partially demo-able (on request - it takes some set up), was an impressively large task I had to undertake single handedly ',
            'Reason for leaving': 'Was made redundant when the company folded '
        }
    }, {
        to: 'May 2013',
        from: 'January 2008',
        companyName: 'Redditch Web Solutions/RedditchWeb.co.uk',
        companyDescription: 'My web design/development company',
        logo: 'redditchweb.png',
        logoClass: 'grayscale',
        title: 'Lead Designer/Developer ',
        details: {
            'Key Technologies': '<ul class="tech">\n\
                                <li><i class="fa-php fab "></i><p>PHP 5.1 -> 7 (Procedural, OOP, MVC)</p></li>\n\
                                <li><img src="/assets/logos/mysql.svg" class="invert" /><p>MySQL</p></li>\n\
                                <li><img src="/assets/logos/apache.svg" class="invert" /><p>Apache</p></li>\n\
                                <li><img src="/assets/logos/windows.svg" class="invert" /><p>Windows Server</p></li>\n\
                                <li><img src="/assets/logos/jquery.svg" class="invert" /><p>jQuery (1.1.12 -> 1.7.2 mostly)</p></li>\n\
                                <li><img src="/assets/logos/jquery-ui.svg" class="brightness" /><p>jQuery UI</p></li>\n\
                                <li><img src="/assets/logos/linux.svg" class="invert" /><p>Linux (Ubuntu + Gentoo + CentOS)</p></li>\n\
            </ul>',
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
