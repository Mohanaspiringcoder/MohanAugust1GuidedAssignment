import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private httpClient : HttpClient) { }

  private productURL = "http://localhost:8080/api/products"
 

  
  getAllProducts() : Observable<Product[]>{
    // console.log(this.httpClient.get<getProducts>(this.productURL).pipe(map(response => response._embedded.products)));
    return this.httpClient.get<getProducts>(this.productURL).pipe(map(response => response._embedded.products))
  }



  saveProductDetails(product : Product) : Observable<Product>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.post<Product>(this.productURL,product,httpOptions)
  }





}

interface getProducts{
  _embedded :{
    products : Product[]
  }
}
