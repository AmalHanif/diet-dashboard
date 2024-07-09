import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FoodsItem } from './model/foodsItem.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diet-Dashboard';
  foodsData: any;
  TodayList:Observable<Array<FoodsItem>>;
  foodItems$:Observable<Array<FoodsItem>>;
  foodSel$:any;
  fat:any=0;
  protein:any=0;
  carbohydrate:any=0;

  constructor( ) {
    
  }

  ngOnInit():void {
  }

  addListToToday(newItem: any) {

    this.TodayList = newItem;
  }


  removeListFromToday(newItem: any) {


    // this.TodayList.forEach((element: any) => {
    //   newItem.forEach((row: any) => {

    //     if (element.id == row.id) {
    //       var index = this.TodayList.indexOf(row)
    //       this.TodayList.splice(index, 1)
    //     }
    //   });

    // });
    // this.TodayList = newItem;
  }



  totalFat(newItem: any) {
    this.fat = newItem;
  }
  totalprotein(newItem: any) {
    this.protein = newItem;
  }
  totalcarbohydrate(newItem: any) {
    this.carbohydrate= newItem;
  }
}
