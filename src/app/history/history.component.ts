import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
	history: any;
	constructor(private itemshistory : HistoryService) {
		this.history = this.itemshistory.getHistory();  
	}

	ngOnInit() {
		this.history = this.history.sort(
	  		function (a, b) {
			  if (a.dateOrder > b.dateOrder) {
			    return 1;
			  }
			  if (a.dateOrder < b.dateOrder) {
			    return -1;
			  }
			  return 0;
			}
		)
}

}
