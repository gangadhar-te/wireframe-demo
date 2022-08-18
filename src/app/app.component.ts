import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allItems: any;
  searchText;
  tempItems: any;
  fromDate;
  toDate;
  dates = ['Today','1 Week','1 Month','3 Months','6 Months','All']

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getAllItems().subscribe((res) => {
      console.log(res);
      this.allItems = res;
      this.tempItems = this.allItems;
    });
  }

  searchFields() {
    console.log(this.fromDate);
    console.log(this.toDate);

    if(this.searchText || (this.fromDate && this.toDate)) {
    this.tempItems = this.allItems.filter((value) => {
      console.log(value.date);

      if ((value.date>=this.fromDate && value.date<=this.toDate) ||
           value.purchasingPartner.toLowerCase().includes(this.searchText.toLowerCase())) {
        return true;
      }
    });
   }
   console.log(this.tempItems);


  }
}
