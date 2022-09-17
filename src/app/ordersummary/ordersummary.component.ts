import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  cart:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];

  constructor(public cartservice:CartdataService, private router:Router) { }

  ngOnInit(): void {
    this.cart=this.cartservice.cart;
  }

  placeorder()
  {
    this.router.navigate(['thanks']);
  }
  
}
