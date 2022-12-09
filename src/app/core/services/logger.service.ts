import { Injectable } from '@angular/core';

const styles = {
	BOLD_RED_TEXT_WHITE_BG:
		'background-color: white; color: red; padding: 12px; font-weight: bold',
	BOLD_BLUE_TEXT_WHITE_BG:
		'background-color: white; color: blue; padding: 12px; font-weight: bold',
	BOLD_GREEN_TEXT_WHITE_BG:
		'background-color: white; color: green; padding: 12px; font-weight: bold',
};

@Injectable()
export class LoggerService {
	sendLog(message: string, type: string, style: string): void {
		console[type](`%c${message}`, styles[style]);
	}
}
