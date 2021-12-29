import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [PortfolioComponent],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule
    ],
    providers: []
})
export class PortfolioModule { }
