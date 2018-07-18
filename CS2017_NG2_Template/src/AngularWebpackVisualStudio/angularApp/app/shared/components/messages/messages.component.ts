import * as jQuery from 'jquery';
import {
	Component,
	OnInit,
	ViewEncapsulation,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MessagesService } from './messages.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
	public messages: Array<Object>;
	public files: Array<Object>;
	public meetings: Array<Object>;
	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private messagesService: MessagesService
	) {
		this.messages = this.messagesService.getMessages();
		this.files = this.messagesService.getFiles();
		this.meetings = this.messagesService.getMeetings();
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			jQuery('#messagesTabs').on('click', '.nav-item a', function() {
				setTimeout(() =>
					jQuery(this)
						.closest('.dropdown')
						.addClass('show')
				);
			});
		}
	}
}
