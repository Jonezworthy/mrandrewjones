import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [TechnologiesComponent],
    imports: [
        CommonModule,
        TechnologiesRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule
    ],
    providers: []
})
export class TechnologiesModule { }
