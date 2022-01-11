import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    intervalVisualHack: any;
    document: Document;

    constructor(@Inject(DOCUMENT) document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
        this.document = document;
    }
    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
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

                if (h2.clientHeight < content.clientHeight) {
                    h2.style.height = (content.clientHeight + 80) + 'px';
                }
            }
        }

    }
}
