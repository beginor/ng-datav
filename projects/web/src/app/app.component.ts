import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgDataVModule } from 'app-shared';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NgDataVModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'web';

}
