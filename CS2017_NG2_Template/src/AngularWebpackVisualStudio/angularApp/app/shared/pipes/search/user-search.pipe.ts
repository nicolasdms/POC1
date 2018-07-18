import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:pipe-naming
@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
	transform(value: any, args?: any): Array<any> {
		const searchText = new RegExp(args, 'ig');
		if (value) {
			return value.filter((user: any) => {
				if (user.profile.name) {
					return user.profile.name.search(searchText) !== -1;
				} else {
					return user.username.search(searchText) !== -1;
				}
			});
		}
	}
}
