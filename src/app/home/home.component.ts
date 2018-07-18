import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { BasketService } from '../basket/basket.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	items: any;
	basket: any;

	constructor(
		private itemsProduct : HomeService,
		private itemsbasket : BasketService){
	 	this.items = this.itemsProduct.getData();
	 	this.basket = this.itemsbasket.getBasket();
	}

	ngOnInit() {

	}

	addToBasket(id){

  		if (this.basket.length>=1) {
  			let done= false;
  			for (var i = 0; i < this.basket.length; i++) {
  				if (this.basket[i].data.id == id) {
  					done = true;
  				}
  			}
  			if (!done) {
				this.addDataToArr(id) 
			}
  		}
  		else{
  			this.addDataToArr(id) 
  		}
  	};
  	addDataToArr(id) {
		for (var j = 0; j < this.items.length; j++) {
			if (this.items[j].data.id == id) {
				this.items[j].data.dataStatus = !this.items[j].data.dataStatus;
				this.basket.push(
					{
						'data':{
							id: this.items[j].data.id,
							name: this.items[j].data.name,
							price: this.items[j].data.price,
							image: this.items[j].data.image,
							ingredients: this.items[j].data.ingredients
						}
					}
				);
			}
		}
	}
  		



  	sort(sortBy){
  		if (sortBy == 'name') {
  			this.items = this.items.sort(
		  		function (a, b) {
				  if (a.data.name > b.data.name) {
				    return 1;
				  }
				  if (a.data.name < b.data.name) {
				    return -1;
				  }
				  return 0;
				}
			)
  		}
	  	if (sortBy == 'price') {
	  		this.items = this.items.sort(
		  		function (a, b) {
				  if (parseInt(a.data.price) > parseInt(b.data.price)) {
				    return 1;
				  }
				  if (parseInt(a.data.price) < parseInt(b.data.price)) {
				    return -1;
				  }
				  return 0;
				}
			)
	  	}
  	}
}
