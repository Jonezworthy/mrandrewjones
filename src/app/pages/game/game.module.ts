import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [GameComponent],
    imports: [
        CommonModule,
        GameRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        HttpClientModule,

    ],
    providers: []
})
export class GameModule { }
