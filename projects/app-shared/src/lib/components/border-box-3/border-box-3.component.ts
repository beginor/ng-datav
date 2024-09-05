import { Component, signal, input, OnInit, inject, OnDestroy, OutputRefSubscription, computed } from '@angular/core';

import { AutoSizeDirective, Size } from '../../directives/auto-size.directive';

@Component({
    selector: 'dv-border-box-3',
    standalone: true,
    imports: [],
    templateUrl: './border-box-3.component.html',
    styleUrl: './border-box-3.component.css',
    hostDirectives: [AutoSizeDirective]
})
export class BorderBox3Component implements OnInit, OnDestroy {

    public colors = input<string[]>(['#4fd2dd', '#235fa7']);
    public backgroundColor = input<string>('transparent');

    protected width = signal(0);
    protected height = signal(0);

    protected backgroundPoints = computed(() => {
        const width = this.width();
        const height = this.height();
        return `23, 23 ${width - 24}, 23 ${width - 24}, ${height - 24} 23, ${height - 24}`;
    });
    protected line1Points = computed(() => {
        const width = this.width();
        const height = this.height();
        return `4, 4 ${width - 22} ,4 ${width - 22}, ${height - 22} 4, ${height - 22} 4, 4`;
    });
    protected line2Points = computed(() => {
        const width = this.width();
        const height = this.height();
        return `10, 10 ${width - 16}, 10 ${width - 16}, ${height - 16} 10, ${height - 16} 10, 10`;
    });
    protected line3Points = computed(() => {
        const width = this.width();
        const height = this.height();
        return `16, 16 ${width - 10}, 16 ${width - 10}, ${height - 10} 16, ${height - 10} 16, 16`;
    });
    protected line4Points = computed(() => {
        const width = this.width();
        const height = this.height();
        return `22, 22 ${width - 4}, 22 ${width - 4}, ${height - 4} 22, ${height - 4} 22, 22`;
    });

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

}
