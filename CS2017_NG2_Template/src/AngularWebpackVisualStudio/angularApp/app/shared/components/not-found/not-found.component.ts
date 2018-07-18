import {
	Component,
	OnInit,
	AfterViewInit,
	ViewEncapsulation,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit, AfterViewInit {
	router: Router;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		router: Router
	) {
		this.router = router;
	}

	searchResult(): void {
		this.router.navigate(['/home']);
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			// document.getElementById('preloader').classList.add('hide');
		}
	}

	ngOnInit() {}
}
