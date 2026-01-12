import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
    constructor(@Inject(DOCUMENT) document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    }

    email: string = 'email';
    linkedIn: string = 'linkedin';
    gitHub: string = 'github';

    encodedE: string = 'am9uZXp5MjAwNEBnbWFpbC5jb20=';
    encodedLinked: string = 'YW5kcmV3LWpvbmVzLTQwODY3NGIz';
    encodedGit: string = 'Sm9uZXp3b3J0aHk=';

    myNumberVisible: Boolean = false;
    myNumberPartOne: string = 'MDc3NDMy';
    myNumberPartTwo: string = 'MjE1NTU=';
    myNumber: string = '';

    ngOnInit(): void {

        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.email = atob(this.encodedE);
                this.linkedIn = 'https://www.linkedin.com/in/' + atob(this.encodedLinked) + '/';
                this.gitHub = 'https://github.com/' + atob(this.encodedGit);
            }, 0);
        }
    }

    showMyNumber(): void {
        setTimeout(() => {
            this.myNumber = atob((this.myNumberPartOne + this.myNumberPartTwo));
            this.myNumberVisible = true;
        }, 250);
    }

    ngOnDestroy(): void {

    }
}
