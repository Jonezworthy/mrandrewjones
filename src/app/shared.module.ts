import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LogoBlurbComponent } from './components/logo-blurb/logo-blurb.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        LogoComponent,
        LogoBlurbComponent,
    ],
    imports: [
        MatTooltipModule,
        MatDialogModule,
        MatCardModule,
        CommonModule
    ],
    exports: [
        LogoComponent,
        LogoBlurbComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
