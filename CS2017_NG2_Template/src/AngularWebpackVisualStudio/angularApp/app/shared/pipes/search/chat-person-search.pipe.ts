import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:pipe-naming
@Pipe({ name: 'ChatPersonSearchPipe' })
export class ChatPersonSearchPipe implements PipeTransform {
	transform(value: any, args?: any): Array<any> {
		const searchText = new RegExp(args, 'ig');
		if (value) {
			return value.filter((message: any) => {
				if (message.author) {
					return message.author.search(searchText) !== -1;
				}
			});
		}
	}
}
