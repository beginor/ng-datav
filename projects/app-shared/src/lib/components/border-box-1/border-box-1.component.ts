import { Component, input, signal, OnInit, inject, OnDestroy, OutputRefSubscription } from '@angular/core';

import { AutoSizeDirective, Size } from '../../directives/auto-size.directive';

@Component({
    selector: 'dv-border-box-1',
    standalone: true,
    imports: [],
    templateUrl: './border-box-1.component.html',
    styleUrl: './border-box-1.component.css',
    hostDirectives: [AutoSizeDirective],
})
export class BorderBox1Component implements OnInit, OnDestroy {

    public colors = input<string[]>(['#4fd2dd', '#235fa7']);
    public backgroundColor = input<string>('transparent');

    protected border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

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

    protected borderPoints(width: number, height: number): string {
        return [
            `10, 27`,
            `10, ${height - 27}`,
            `13, ${height - 24}`,
            `13, ${height - 21}`,
            `24, ${height - 11}`,
            `38, ${height - 11}`,
            `41, ${height - 8}`,
            `73, ${height - 8}`,
            `75, ${height - 10}`,
            `81, ${height - 10}`,
            `85, ${height - 6}`,
            `${width - 85}, ${height - 6}`,
            `${width - 81}, ${height - 10}`,
            `${width - 75}, ${height - 10}`,
            `${width - 73}, ${height - 8}`,
            `${width - 41}, ${height - 8}`,
            `${width - 38}, ${height - 11}`,
            `${width - 24}, ${height - 11}`,
            `${width - 13}, ${height - 21}`,
            `${width - 13}, ${height - 24}`,
            `${width - 10}, ${height - 27}`,
            `${width - 10}, 27`,
            `${width - 13}, 25`,
            `${width - 13}, 21`,
            `${width - 24}, 11`,
            `${width - 38}, 11`,
            `${width - 41}, 8`,
            `${width - 73}, 8`,
            `${width - 75}, 10`,
            `${width - 81}, 10`,
            `${width - 85}, 6`,
            `85, 6`,
            `81, 10`,
            `75, 10`,
            `73, 8`,
            `41, 8`,
            `38, 11`,
            `24, 11`,
            `13, 21`,
            `13, 24`
        ].join(' ');
    }
}
