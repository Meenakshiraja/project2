import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  categories=["Laptops","Accessories","Cameras"];

  constructor(public cartservice:CartdataService,private router:Router) { }

  ngOnInit(): void {
  }
  addtocart(item:any)
  {
    this.cartservice.addtocart(item);
  }
  show(id:number)
  {
    this.router.navigate(["productview",id]);
  }
}
