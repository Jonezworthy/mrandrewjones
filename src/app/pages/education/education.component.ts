import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
    constructor(private router: Router) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
