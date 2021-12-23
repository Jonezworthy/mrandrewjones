import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    
    loading: Boolean = true;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.loading = false;    
    }


    ngOnDestroy(): void {
        
    }

}
