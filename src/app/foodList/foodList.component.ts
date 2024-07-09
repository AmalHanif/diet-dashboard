
import { Component, EventEmitter, Input, Output, OnInit,ViewChildren,ElementRef,QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodsItem } from '../model/foodsItem.model';
import foodData  from '../../assets/data.json'
@Component({
  selector: 'app-foodList',
  templateUrl: './foodList.component.html',
  styleUrls: ['./foodList.component.css']
})

export class FoodListComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  @Input() foods: ReadonlyArray<FoodsItem> = [];
  
  @Output() selectedListToday = new EventEmitter<FoodsItem>();
  foodItems$: Observable<Array<FoodsItem>>;
  foodList: Array<FoodsItem> = foodData.data ;
  selectedList: any = [];
  showSuccess:any;
  selectedfoodList:any=[];
  showFail:any;
  constructor( ) { 
    this.showSuccess=false;
    this.showFail=false;
  }
  ngOnChanges() {
    console.log(this.selectedList) 

    
  }
  ngOnInit():void {

  }

  selectItem(e: any, food: any) {
    if (e.target.checked === true) {
      this.selectedfoodList.push(food)
    } else {
      this.selectedfoodList.forEach((element: any) => {
        if (element.id == food.id) {
          var index = this.selectedfoodList.indexOf(element)
          this.selectedfoodList.splice(index, 1)
        }
      });
    }
  }

  AddtoTodayList() {
    if(this.selectedfoodList.length>0){
      this.selectedList=this.selectedfoodList;
      this.showSuccess=true;
      var passData = this.selectedList
      this.selectedListToday.emit(passData);
      this.uncheckAll();
      setTimeout(() => {
        this.showSuccess=false;
      }, 5000);

      this.selectedfoodList=[];
    }
    else{
      this.showFail=true;
      setTimeout(() => {
        this.showFail=false;
      }, 3000);
    }
    
  }

  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
  
}
