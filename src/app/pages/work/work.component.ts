import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
    constructor(private router: Router) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
