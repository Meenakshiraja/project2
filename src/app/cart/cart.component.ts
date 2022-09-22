import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];
  constructor(public cartservice:CartdataService, private router:Router) { }

  ngOnInit(): void {
    this.cart=this.cartservice.cart;
  }

  checout()
  {
    this.router.navigate(['bill']);
  }
  
  delete(item:any){
    this.cartservice.delete(item);
  }
}
