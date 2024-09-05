import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BorderBox1Component } from 'app-shared'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        BorderBox1Component,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'web';
}
