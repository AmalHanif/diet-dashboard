import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FoodsItem } from '../model/foodsItem.model';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  @Input() selectedList: any = [];
  @Output() fat = new EventEmitter<Number>();
  @Output() protein = new EventEmitter<Number>();
  @Output() carbohydrate = new EventEmitter<Number>();

  @Output() selecttoRemove = new EventEmitter<FoodsItem>();

  private removeFromToday: any = [];
  todayFoodList: any = [];

  totalFat: any = 0;
  totalProtein: any = 0;
  totalCarbohydrate: any = 0;


  constructor() {
  }

  ngOnChanges() {
    this.todayFoodList = this.selectedList
    this.selectedList?.forEach((element: any) => {
      this.totalFat += element.fat;
      this.totalProtein += element.protein;
      this.totalCarbohydrate += element.carbohydrate;
      // this.selectFromToday.push(element)
    })
    this.fat.emit(this.totalFat);
    this.protein.emit(this.totalProtein);
    this.carbohydrate.emit(this.totalCarbohydrate);
  }

  ngOnInit(): void {

  }


  selectItem(e: any, food: any) {

    if (e.target.checked === true) {
      this.removeFromToday.push(food)
    } else {
      this.removeFromToday.forEach((element: any) => {
        if (element.id === food.id) {
          var index = this.removeFromToday.indexOf(element)
          if (index > -1) {
            this.removeFromToday.splice(index, 1);
          }
        }
      });
    }
   
  }


  RemoveFromTodayList() {

    this.removeFromToday.forEach((removeItems: any) => {
      this.todayFoodList.forEach((fdata: any) => {
        if (fdata.id === removeItems.id) {
          var index = this.todayFoodList.indexOf(fdata)
          if (index > -1) {
            this.todayFoodList.splice(index, 1)
          }
          this.totalFat -= removeItems.fat;
          this.totalProtein -= removeItems.protein;
          this.totalCarbohydrate -= removeItems.carbohydrate;
        }
      });

    });

    // this.selectedList =  this.todayFoodList;
    var passData = this.removeFromToday
    this.selecttoRemove.emit(passData)

    this.fat.emit(this.totalFat);
    this.protein.emit(this.totalProtein);
    this.carbohydrate.emit(this.totalCarbohydrate);
  }

}
