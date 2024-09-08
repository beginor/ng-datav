import { NgModule } from '@angular/core';

import { AutoSizeDirective } from './directives/auto-size.directive';
import { BorderBox1Component } from './components/border-box-1/border-box-1.component';
import { BorderBox2Component } from './components/border-box-2/border-box-2.component';
import { BorderBox3Component } from './components/border-box-3/border-box-3.component';
import { BorderBox4Component } from './components/border-box-4/border-box-4.component';

@NgModule({
    imports: [
        AutoSizeDirective,
        BorderBox1Component,
        BorderBox2Component,
        BorderBox3Component,
        BorderBox4Component,
    ],
    exports: [
        AutoSizeDirective,
        BorderBox1Component,
        BorderBox2Component,
        BorderBox3Component,
        BorderBox4Component,
    ],
})
export class NgDataVModule { }
