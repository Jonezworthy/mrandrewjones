import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';

import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        LogoComponent,
    ],
    imports: [MatTooltipModule,
        CommonModule],
    exports: [
        LogoComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
