import { Component, signal, input, OnInit, inject, OnDestroy, OutputRefSubscription } from '@angular/core';

import { AutoSizeDirective, Size } from '../../directives/auto-size.directive';

@Component({
    selector: 'dv-border-box-5',
    standalone: true,
    imports: [],
    templateUrl: './border-box-5.component.html',
    styleUrl: './border-box-5.component.css',
    hostDirectives: [AutoSizeDirective]
})
export class BorderBox5Component implements OnInit, OnDestroy {

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
        return `10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}`;
    }

    protected line1Points(width: number, height: number): string {
        return `8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100} ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`;
    }

    protected line2Points(width: number, height: number): string {
        return `3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60} ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`;
    }

    protected line3Points(width: number): string {
        return `50, 13 ${width - 35}, 13`;
    }

    protected line4Points(width: number): string {
        return `15, 20 ${width - 35}, 20`;
    }

    protected line5Points(width: number, height: number): string {
        return `15, ${height - 20} ${width - 110}, ${height - 20}`;
    }

    protected line6Points(width: number, height: number): string {
        return `15, ${height - 13} ${width - 110}, ${height - 13}`;
    }

}
