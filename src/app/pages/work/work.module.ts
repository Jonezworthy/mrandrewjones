import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [WorkComponent],
    imports: [
        CommonModule,
        WorkRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        SharedModule
    ],
    providers: []
})
export class WorkModule { }
