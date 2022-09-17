import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from './cartdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = true;
  title = 'project2';
  cart:{id:number,title:string,price:number,category:string,image:string,quantity:number}[]=[];
  totalitemnumber:number=0;

  constructor(public cartdataservice:CartdataService,private router:Router)
  {}
  ngOnInit(): void {
    this.cart=this.cartdataservice.cart;
    this.totalitemnumber=this.cartdataservice.totalitemnumber;
  }
  show(){
    this.router.navigate(['cart']);
  }
}

