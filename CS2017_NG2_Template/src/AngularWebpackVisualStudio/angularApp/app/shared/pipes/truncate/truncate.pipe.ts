import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	// tslint:disable-next-line:pipe-naming
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
	transform(value: string, args?: any): string {
		const limit = args > 0 ? parseInt(args, 10) : 10;
		return value.length > limit ? value.substring(0, limit) + '...' : value;
	}
}
