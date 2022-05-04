import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

declare var window: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    intervalVisualHack: any;
    document: Document;
    backgroundClass: string = '';

    constructor(@Inject(DOCUMENT) document: Document, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
        this.document = document;
    }
    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {

            this.router.events.subscribe((event: Event) => {
                if (event && event instanceof NavigationEnd) { // if navigated somewhere, scroll up
                    this.backgroundClass = event.url && event.url === '/' ? 'home-page' : '';
                    window.document.querySelector('#featured-background').scrollTo(0, 0);
                    window.scrollTo(0, 0);
                }
            });
            this.visualHacks();
            this.intervalVisualHack = setInterval(() => {
                this.visualHacks();
            }, 250);
        }
    }
    visualHacks(): void {
        // sometimes the h2 is bigger than the content
        const cards: any = this.document.querySelectorAll('.my-card');
        if (cards) {
            for (const card of cards) {
                const h2 = card.querySelector('h2');
                const content = card.querySelector('.mat-card-content');

                // if (h2.clientHeight < content.clientHeight) {
                const newHeight = (content.clientHeight + 80) + 'px';

                if (h2 && h2.style.height !== newHeight && h2.className.indexOf('image') === -1) {
                    h2.style.height = newHeight;
                }
                // }
            }
        }

    }
}
