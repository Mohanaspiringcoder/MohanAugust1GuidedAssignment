import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductManagementService } from 'src/app/services/product-management.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
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

}
