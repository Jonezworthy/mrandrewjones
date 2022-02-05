import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icon } from 'src/app/interfaces/icon';

@Component({
    selector: 'app-logo-blurb',
    templateUrl: './logo-blurb.component.html',
    styleUrls: ['../logo/logo.component.scss']
})
export class LogoBlurbComponent implements OnInit {
    selected: Icon;

    experienceIconIndex: { [key: string]: string } = { current: 'fad fa-briefcase', previous: 'fad fa-history', hobby: 'fad fa-futbol' };
    experienceWordingIndex: { [key: string]: string } = { current: 'This is a technology I use with my current employer', previous: 'This is a technology I used with a former employer', hobby: 'This is a technology I use in hobby projects or freelance clients' };

    constructor(@Inject(MAT_DIALOG_DATA) public data: { icon: Icon, dialog: MatDialog }) {
        this.selected = this.data.icon;
    }

    ngOnInit(): void {

    }

    close(): void {
        this.data.dialog.closeAll();
    }
}
