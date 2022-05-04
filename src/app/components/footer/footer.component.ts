import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    lastUpdated: Date | undefined;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,) { }

    ngOnInit(): void {

        if (isPlatformBrowser(this.platformId)) {
            fetch('/assets/latestRelease.txt').then(async (response) => {
                try {
                    // console.log(await response.text());
                    const date = (await response.text());
                    setTimeout(() => {
                        this.lastUpdated = new Date(date.toString().trim());
                    }, (1000));
                } catch (err) {
                    console.log(err);
                }
            });
        }
    }

}

