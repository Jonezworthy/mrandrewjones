import { Component, OnInit, OnDestroy } from '@angular/core';

declare interface PortfolioItem {
    name: string,
    tech: string,
    description: string,
    img: string,
    active: boolean,
    url?: string,
    urlLabel?: string
}

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
    constructor() { }


    // description: ''

    mobileApps: PortfolioItem[] = [
        { name: 'Utta Bliss', active: false, tech: 'Ionic Framework', img: 'uttabliss.png', description: 'It is a dating app, it\'s intention was to be non-profit and with high morals.' },
        { name: 'Cruise.co.uk app', active: false, tech: 'Java', img: 'cruise.jpg', description: 'Previous employer\'s webview app I created as a solo project.' },
        { name: 'Stand up! (For Scrum)', active: false, tech: 'Java', img: 'standup.jpg', description: 'I created it to store stand up notes for agile development.' },
    ];
    freelanceWebsites: PortfolioItem[] = [
        { name: 'SawMaster', active: true, tech: 'LAMP + Angular', img: 'sawmaster.jpg', url: 'https://sawmaster.co.uk/', urlLabel: 'sawmaster.co.uk', description: 'A custom built e-commerce web site for a local band saw blade company.' },
        { name: 'Midlands Lubricants', active: true, tech: 'LAMP + WordPress', img: 'midlandlubricants.jpg', url: 'https://www.midlandslubricants.co.uk/', urlLabel: 'midlandslubricants.co.uk', description: 'A WordPress powered web site for a local oil distribution company.' },
        { name: 'JordanSaws', active: false, tech: 'LAMP', img: 'jordan.jpg', url: 'https://jordan-saws.co.uk/', urlLabel: 'jordan-saws.co.uk', description: 'A custom built e-commerce web site I made for a local company.' },
    ];
    personalWebsites: PortfolioItem[] = [
        { name: 'RedditchWeb', active: true, tech: 'LAMP', img: 'redditchweb.jpg', url: 'https://redditchweb.co.uk/', urlLabel: 'redditchweb.co.uk', description: 'RedditchWeb.co.uk is the web site I had for my web design/development company.' },
        { name: 'BrokeBitchGames', active: true, tech: 'MEAN', img: 'brokebitchgames.png', url: 'https://brokebitchgames.com/', urlLabel: 'brokebitchgames.com', description: 'Provides listings for free games available from Steam/Epic Games/Origin and offers integration.' },
        { name: 'Inter Webz', active: false, tech: 'LAMP', img: 'interwebz.jpg', url: 'https://inter-webz.com/', urlLabel: 'inter-webz.com', description: 'Inter-Webz is a compilation of the most brilliant content from best social feeds around.' },
    ];

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
