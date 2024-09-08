import { Component, signal, input, OnInit, inject, OnDestroy, OutputRefSubscription } from '@angular/core';

import { AutoSizeDirective, Size } from '../../directives/auto-size.directive';


@Component({
    selector: 'dv-border-box-4',
    standalone: true,
    imports: [],
    templateUrl: './border-box-4.component.html',
    styleUrl: './border-box-4.component.css',
    hostDirectives: [AutoSizeDirective]
})
export class BorderBox4Component implements OnInit, OnDestroy {

    public colors = input<string[]>(['#4fd2dd', '#235fa7']);
    public backgroundColor = input<string>('transparent');
    public reverse = input<boolean>(false);

    protected width = signal(0);
    protected height = signal(0);

    private autoSize = inject(AutoSizeDirective, { self: true });
    private autoSize$?: OutputRefSubscription;

    public ngOnInit() {
        this.autoSize$ = this.autoSize.sizeChanged.subscribe(
            size => { this.onSizeChanged(size); }
        );
    }

    public ngOnDestroy(): void {
        this.autoSize$?.unsubscribe();
    }

    private onSizeChanged({ width, height }: Size) {
        this.width.set(width);
        this.height.set(height);
    }

    protected backgroundPoints(width: number, height: number): string {
        return `${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24 16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}`;
    }

    protected line1Points(width: number, height: number): string {
        return `145, ${height - 5} 40, ${height - 5} 10, ${height - 35} 10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`
    }

    protected line2Points(height: number): string {
        return `245, ${height - 1} 36, ${height - 1} 14, ${height - 23} 14, ${height - 100}`;
    }

    protected line3Points(height: number): string {
        return `7, ${height - 40} 7, ${height - 75}`;
    }

    protected line9Points(width: number): string {
        return `200, 17 ${width - 10}, 17`;
    }

    protected line10Points(width: number): string {
        return `385, 17 ${width - 10}, 17`;
    }

}
