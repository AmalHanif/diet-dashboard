import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsComponent } from './charts/charts.component';
import { TodayComponent } from './today/today.component';
import { FoodListComponent } from './foodList/foodList.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChartsComponent,
    TodayComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgChartsModule,
    // StoreDevtoolsModule.instrument({
    //   logOnly:environment.production
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
