import { Component, signal, input, OnInit, inject, OnDestroy, OutputRefSubscription } from '@angular/core';

import { AutoSizeDirective, Size } from '../../directives/auto-size.directive';

@Component({
    selector: 'dv-border-box-2',
    standalone: true,
    imports: [],
    templateUrl: './border-box-2.component.html',
    styleUrl: './border-box-2.component.css',
    hostDirectives: [AutoSizeDirective]
})
export class BorderBox2Component implements OnInit, OnDestroy {

    public colors = input<string[]>(['#4fd2dd', '#235fa7']);
    public backgroundColor = input<string>('transparent');

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

    protected backgroundPoints(width: number, height: number): string  {
        return `7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}`;
    }

    protected border1Points(width: number, height: number): string{
        return `2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`;
    }

    protected border2Points(width: number, height: number): string {
        return `6, 6 ${width - 6} ,6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`;
    }

}
