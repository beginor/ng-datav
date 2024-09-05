import { NgModule } from '@angular/core';

import { AutoSizeDirective } from './directives/auto-size.directive';
import { BorderBox1Component } from './components/border-box-1/border-box-1.component';
import { BorderBox2Component } from './components/border-box-2/border-box-2.component';

@NgModule({
    imports: [
        AutoSizeDirective,
        BorderBox1Component,
        BorderBox2Component,
    ],
    exports: [
        AutoSizeDirective,
        BorderBox1Component,
        BorderBox2Component,
    ],
})
export class NgDataVModule { }
