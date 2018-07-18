import * as jQuery from 'jquery';
import {
	Component,
	ViewEncapsulation,
	ViewChild,
	HostListener,
	AfterViewInit,
	Input,
	ElementRef,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'app-back-top',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./back-top.component.scss'],
	template: `
    <i #backTop class="fa fa-angle-up back-to-top transition" title="Back to Top"></i>
  `
})
export class BackTopComponent implements AfterViewInit {
	@Input() position = 400;
	@Input() showSpeed = 500;
	@Input() moveSpeed = 700;

	@ViewChild('backTop') private _selector: ElementRef;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	ngAfterViewInit() {
		this._onWindowScroll();
	}

	@HostListener('click')
	_onClick(): boolean {
		if (isPlatformBrowser(this.platformId)) {
			jQuery('html, body').animate(
				{ scrollTop: 0 },
				{ duration: this.moveSpeed }
			);
			return false;
		}
	}

	@HostListener('window:scroll')
	_onWindowScroll(): void {
		if (isPlatformBrowser(this.platformId)) {
			const el = this._selector.nativeElement;
			window.scrollY > this.position
				? jQuery(el).fadeIn(this.showSpeed)
				: jQuery(el).fadeOut(this.showSpeed);
		}
	}
}
