import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { HomeService } from '../home/home.service';
import { HistoryService } from '../history/history.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
	basket: any;
	items: any;
	history: any;
	totalPrice:any = 0;
	price:any=0;
	orderReady:boolean;
	date:any;

	constructor(
		private itemshome : HomeService,
		private itemshistory : HistoryService,
		private itemsbasket : BasketService
	) { 
		this.basket = this.itemsbasket.getBasket(); 
		this.items = this.itemshome.getData(); 
		this.history = this.itemshistory.getHistory(); 
	}

	basketchange(){
		this.totalPrice = 0;
		if (this.basket.length>0) {
			this.orderReady = true;
		}
		else{
			this.orderReady = false;
		}
		for (var totalData = 0; totalData < this.basket.length; totalData++) {
			this.price = +this.basket[totalData].data.price;
			this.totalPrice = this.totalPrice + this.price;
		}
	}
	ngOnInit() {
		this.basketchange()

	}

	deleteItem(id){
		for (let i = 0; i < this.basket.length; i++) {
		  	if (this.basket[i].data.id == id) {
		  		this.basket.splice(i, 1);
		  	}
		}
		for (var j = 0; j < this.items.length; j++) {
			if (this.items[j].data.id == id) {
				this.items[j].data.dataStatus = !this.items[j].data.dataStatus;
			}
		}
		this.basketchange()
	}

	getOrder(){
		for (var j = 0; j < this.items.length; j++) {
			this.items[j].data.dataStatus = true;
		}
		this.date = new Date();
		var dataArray = Object.assign([], this.basket);
		console.log()
		this.history.push(
			{
				dataOrder: dataArray ,
				totalPrice: this.totalPrice,
				dateOrder: this.date
			}
		)
		this.totalPrice=0;
		this.basket.length = 0;
		console.log(this.history)

	}
	
}
