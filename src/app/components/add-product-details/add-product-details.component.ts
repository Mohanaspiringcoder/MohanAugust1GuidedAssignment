import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductManagementService } from 'src/app/services/product-management.service';

@Component({
  selector: 'app-add-product-details',
  templateUrl: './add-product-details.component.html',
  styleUrls: ['./add-product-details.component.css']
})
export class AddProductDetailsComponent implements OnInit {
  product : Product = new Product(0,"","","",0,"",false,0,new Date,new Date,0)
  constructor(private service : ProductManagementService,
    private route : Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    this.service.saveProductDetails(this.product).subscribe(()=>{
      this.route.navigateByUrl("/moveToMerchant")
    })
  }

}
