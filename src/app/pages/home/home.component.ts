import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(private router: Router) { }

    yearsOfService: number = 0;
    startedAt: string = '2017-10-15';
    yearInMilliseconds: number = (1000 * 60 * 60 * 24 * 365);

    ngOnInit(): void {
        this.yearsOfService = parseInt(((new Date().valueOf() - new Date(this.startedAt).valueOf()) / this.yearInMilliseconds).toFixed(0));
        console.log(this.yearsOfService);
    }

    ngOnDestroy(): void {

    }
}
