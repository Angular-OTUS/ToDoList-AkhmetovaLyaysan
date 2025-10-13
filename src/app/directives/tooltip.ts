import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('span');
      this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipText));
      this.renderer.addClass(this.tooltipElement, 'tooltip');
      this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
      this.setPosition();
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }

  private setPosition() {
    if (this.tooltipElement) {
      const hostPos = this.el.nativeElement.getBoundingClientRect();
      const tooltipPos = this.tooltipElement.getBoundingClientRect();
      const top = hostPos.top - tooltipPos.height - 5;
      const left = hostPos.left + (hostPos.width / 2) + (tooltipPos.width / 2);

      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  }
}
