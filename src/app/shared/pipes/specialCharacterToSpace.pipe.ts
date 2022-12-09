import { Pipe, PipeTransform } from '@angular/core';

import replaceSpecialCharToSpace from '../utils/replaceSpecialCharToSpace';

@Pipe({
	name: 'specialCharacterToSpacePipe',
})
export class SpecialCharacterToSpacePipe implements PipeTransform {
	transform(oldText: string, character: string): string {
		return replaceSpecialCharToSpace(oldText, character);
	}
}
