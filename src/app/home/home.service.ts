import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

	constructor() { }
	private products :any = [
		{
			'data':{
				id: 143,
				name: 'Ролл «Филадельфия» от Тануки',
				price: '178.00',
				image: 'https://eda.ua/images/142462-405-336-filadelfiya.jpg',
				ingredients : 'зеленый лук, лосось, кунжут, авокадо, огурец, сыр мягкий',
				dataStatus: true
			}, 
		},
		{
			'data':{
				id: 120,
				name: 'Нигири «Сякэ» от Тануки',
				price: '26.00',
				image: 'https://eda.ua/images/142533-405-336-sushi_syake1.jpg',
				ingredients : 'лосось',
				dataStatus: true
			}, 
		},
		{
			'data':{
				id: 111,
				name: 'Лапша «Бифу яки соба» от Тануки',
				price: '104.00',
				image: 'https://eda.ua/images/142482-405-336-bifu_yaki_soba.jpg',
				ingredients : 'овощи, говядина, гречневая лапша',
				dataStatus: true
			}, 
		},
		{
			'data':{
				id: 197,
				name: 'Ролл «Куро еру» от Тануки',
				price: '88.00',
				image: 'https://eda.ua/images/142641-405-336-kuro_eru.jpg',
				ingredients : 'киви, банан, миндальный орех, клубника, ананас, сырный крем',
				dataStatus: true
			}, 
		},
		{
			'data':{
				id: 188,
				name: 'Салат «Хияши-вакамэ» от Тануки',
				price: '96.00',
				image: 'https://eda.ua/images/142593-405-336-hiashi_1164.jpg',
				ingredients : 'ореховый соус, водоросли чука',
				dataStatus: true
			}, 
		},
		{
			'data':{
				id: 144,
				name: 'Ролл «Сякэ» от Тануки',
				price: '62.00',
				image: 'https://eda.ua/images/142465-405-336-syake_roll.jpg',
				ingredients : 'лосось',
				dataStatus: true
			}, 
		},
	]
	getData(){
		return this.products;
	}
}
