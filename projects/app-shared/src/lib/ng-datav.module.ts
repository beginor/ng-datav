import { NgModule } from '@angular/core';

import { AutoSizeDirective } from './directives/auto-size.directive';
import { BorderBox1Component } from './components/border-box-1/border-box-1.component';

@NgModule({
    imports: [
        AutoSizeDirective,
        BorderBox1Component,
    ],
    exports: [
        AutoSizeDirective,
        BorderBox1Component,
    ],
})
export class NgDataVModule { }
