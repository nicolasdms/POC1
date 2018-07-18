import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	// tslint:disable-next-line:pipe-naming
	name: 'MailSearch'
})
export class MailSearchPipe implements PipeTransform {
	transform(value: any, args?: any): Array<any> {
		const searchText = new RegExp(args, 'ig');
		if (value) {
			return value.filter((mail: any) => {
				if (mail.sender || mail.subject) {
					if (
						mail.sender.search(searchText) !== -1 ||
						mail.subject.search(searchText) !== -1
					) {
						return true;
					}
				}
			});
		}
	}
}
