import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    }

    yearsOfService: number = 0;
    // monthsOfService: number = 0;
    startedAt: string = '2022-08-01';
    yearInMilliseconds: number = (1000 * 60 * 60 * 24 * 365);
    // monthInMilliseconds: number = ((1000 * 60 * 60 * 24 * 365) / 12)

    iamOriginal: string[] = [
        'an app developer',
        'a software developer',
        'a web developer',
        'full stack',
        'a graphic designer',
        'on a six figure salary',
        'a security consultant',
        'a dev ops expert',
        'an infrastructure architect',
        'a project manager',
        'a team lead',
        'a database administrator',
        'an automation specialist',
        'a front end developer',
        'a back end developer',
        'a creative consultant',
        'a technical consultant',
        'a line manager',
        'a mentor'
    ];
    iam: string[] = [];
    secondsUntilIamChange = 15;
    iamChangeInterval: any;

    ngOnInit(): void {
        this.yearsOfService = Math.floor(((new Date().valueOf() - new Date(this.startedAt).valueOf()) / this.yearInMilliseconds));
        // this.monthsOfService = Math.floor(((new Date().valueOf() - new Date(this.startedAt).valueOf()) / this.monthInMilliseconds));

        this.generateIam();

        if (isPlatformBrowser(this.platformId)) {
            this.iamChangeInterval = setInterval(() => {
                this.secondsUntilIamChange = this.secondsUntilIamChange - 1;
                if (this.secondsUntilIamChange <= 0) {
                    this.generateIam();
                    this.secondsUntilIamChange = 15;
                }
            }, 1000);
        }
    }

    generateIam(): void {
        this.iam = this.iamOriginal.sort(() => Math.random() - 0.5);
        if (isPlatformBrowser(this.platformId)) {
            if (window.screen.availWidth <= 600) {
                this.iam = this.iam.slice(0, 3);
                if (window.screen.availWidth <= 500)
                    this.iam = this.iam.slice(0, 2);
                if (window.screen.availWidth <= 400)
                    this.iam = this.iam.slice(0, 1);
            } else {
                let amount = parseInt((window.screen.availWidth / 120).toFixed(0));
                if (amount > 10)
                    amount = 10;
                this.iam = this.iam.slice(0, amount);
            }
        }

    }


    ngOnDestroy(): void {

    }
}
