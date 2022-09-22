import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';
import{ActivatedRoute,} from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  productlist:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];
  product:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];
  constructor(public cartservice:CartdataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productlist=this.cartservice.productlist;
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log(productIdFromRoute);
    this.product = this.productlist.filter(product => product.id === productIdFromRoute);
    console.log(this.product);
  }
  addtocart(item:any)
  {
    this.cartservice.addtocart(item);
  }
}
