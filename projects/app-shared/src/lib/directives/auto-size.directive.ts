import { Directive, OnInit, output, ElementRef, OnDestroy } from '@angular/core';

@Directive({
    selector: '[dvAutoSize]',
    standalone: true
})
export class AutoSizeDirective implements OnInit, OnDestroy {

    public sizeChanged = output<Size>();

    private resizeObserver = new ResizeObserver(entries => {
        const entry = entries[0];
        const rect = entry.contentRect;
        this.sizeChanged.emit({ width: rect.width, height: rect.height });
    });

    constructor(
        private hostRef: ElementRef<HTMLElement>
    ) {}

    public ngOnInit(): void {
        const host = this.hostRef.nativeElement;
        const rect = host.getBoundingClientRect();
        this.sizeChanged.emit({
            width: rect.width,
            height: rect.height,
        });
        this.resizeObserver.observe(host);
    }

    public ngOnDestroy(): void {
        this.resizeObserver.disconnect();
    }

}

export interface Size {
    width: number;
    height: number;
}
