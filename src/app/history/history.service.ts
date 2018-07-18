import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {

	constructor() { }

	private history :any = [];
	getHistory(){
		return this.history;
	}
}
