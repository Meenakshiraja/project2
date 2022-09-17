import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  order:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];

  constructor(public cartservice:CartdataService) { }

  ngOnInit(): void {
    this.cartservice.afterorder();
    console.log(this.cartservice.i-1);
    this.order=this.cartservice.order.filter((item:any) => item.id === this.cartservice.i-1);
  }

}
