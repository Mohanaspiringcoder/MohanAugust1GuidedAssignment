import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { AddProductDetailsComponent } from './components/add-product-details/add-product-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const route : Routes = [
  {path : '',component : HomePageComponent}, 
  {path :'moveToBuyer',component :BuyerComponent },
  {path : 'moveToMerchant',component : MerchantComponent},
  {path : 'moveToAddProductDetails',component :AddProductDetailsComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MerchantComponent,
    BuyerComponent,
    AddProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
