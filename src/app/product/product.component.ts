import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  categories=["Laptops","Mobile","Cameras"];
  products:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];
  constructor(public cartservice:CartdataService,private router:Router) { }

  ngOnInit(): void {
    this.products=this.cartservice.productlist;
  }

  categoryfil(category:any){
    this.products=this.cartservice.productlist.filter((item:any) => item.category === category);
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
