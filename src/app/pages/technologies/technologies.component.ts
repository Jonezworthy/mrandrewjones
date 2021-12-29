import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit, OnDestroy {
    constructor(private router: Router) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
