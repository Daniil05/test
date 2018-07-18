import { Injectable } from '@angular/core';

@Injectable()
export class BasketService {

	constructor() { }

	private basket :any = [];
	getBasket(){
		return this.basket;
	}
	
}
