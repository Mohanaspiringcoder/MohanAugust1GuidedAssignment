import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductManagementService } from 'src/app/services/product-management.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService : ProductManagementService,
              private route :Router) { }

  ngOnInit(): void {
    this.getAllProductDetails();
  }

getAllProductDetails(){
  this.productService.getAllProducts().subscribe(data =>{
    console.log(data)
    this.productList = data
  })
}

moveToAddProductDetails(){
  this.route.navigateByUrl("/moveToAddProductDetails")
}

}
