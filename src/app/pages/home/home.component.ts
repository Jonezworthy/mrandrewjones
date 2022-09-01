import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor() {

    }

    // yearsOfService: number = 0;
    monthsOfService: number = 0;
    startedAt: string = '2022-08-01';
    // yearInMilliseconds: number = (1000 * 60 * 60 * 24 * 365);
    monthInMilliseconds: number = ((1000 * 60 * 60 * 24 * 365) / 12)

    ngOnInit(): void {
        // this.yearsOfService = Math.floor(((new Date().valueOf() - new Date(this.startedAt).valueOf()) / this.yearInMilliseconds));
        this.monthsOfService = Math.floor(((new Date().valueOf() - new Date(this.startedAt).valueOf()) / this.monthInMilliseconds));

    }

    ngOnDestroy(): void {

    }
}
