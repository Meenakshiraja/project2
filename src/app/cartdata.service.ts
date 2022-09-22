import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  i=151;
  index=0;
  productlist=[
    {
      id:1,
      title:"Fire-Boltt Call Bluetooth Calling Smartwatch with SpO2 & 1.7”",
      price:3999,
      image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61BSmqNVYPL._SL1500_.jpg",
      image1:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61fztnPzSfL._SL1500_.jpg",
      image2:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61opjtBWP7L._SL1500_.jpg",
      category:"Smartwatch",
      quantity:1
    },
    {
      id:2,
      title:"Lenovo IdeaPad Slim 1 Intel Celeron 11.6''(29.46cm) HD Thin & Light Laptop (4GB/256GB)",
      price:21288,
      image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41OhhQHHupL.jpg",
      image1:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/613nYLT1ZwL._SL1500_.jpg",
      image2:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41Z6bdVL4AL._SL1500_.jpg",
      category:"Laptops",
      quantity:1
    },
    {
      id:3,
      title:"Samsung Galaxy F23 5G (Forest Green, 6GB, 128GB Storage)",
      price:18200,
      image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/714XFt3bc9L._SL1500_.jpg",
      image1:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51kU7CFaTsL._SL1500_.jpg",
      image2:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/416ZHoqyzCL._SL1500_.jpg",
      category:"Mobile",
      quantity:1
    },
    {
      id:4,
      title:"SanDisk Ultra CZ48 16GB USB 3.0 Pen Drive",
      price:400,
      image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51y1RaYldLL._SL1121_.jpg",
      image1:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/512iJJoAlYL._SL1088_.jpg",
      image2:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71+KbdGzLLL._SL1500_.jpg",
      category:"Pendrive",
      quantity:1
    },
    {
      id:5,
      title:"American Tourister 32 Ltrs Blue Casual Backpack",
      price:1299,
      image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91gstcLE6EL._SL1500_.jpg",
      image1:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91jHmMw58aL._SL1500_.jpg",
      image2:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91c5-8AWYWL._SL1500_.jpg",
      category:"Bags",
      quantity:1
    },
    {
      id:6,
      title:"CP Plus 1080P Full HD Smart WiFi IP Camera ",
      price:1999,
      image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41zGMOmnVAL._SL1080_.jpg",
      image1:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51zISV19yBL._SL1080_.jpg",
      image2:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51k10vvut3L._SL1080_.jpg",
      category:"Cameras",
      quantity:1
    }
  ];

  cart:{id:number,title:string,price:number,image:string,image1:string,image2:string,category:string,quantity:number}[]=[];
  order:{id:number,title:string,category:string,image:string,image1:string,image2:string,price:number,quantity:number}[]=[];
  totalitemnumber:number=0;
  totalprice:number=0;

  addtocart(event:any){
    if (this.cart.length==0)
    {
      this.cart.push(event);
      alert("Your product has been added to cart");
    }
    else{
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == event.id) {
          alert('This product is already in cart. Quantity is increased');
          this.cart[i].quantity++;
      }
      else {
        this.cart.push(event);
        alert("Your product has been added to cart");
      } 
    }}
    this.totalitemnumber=this.cart.length;
    this.gettotalprice();
  }
  
  gettotalprice()
  {
    this.totalprice=0;
    for(let item of this.cart){
      console.log(item.quantity);
      this.totalprice+=item.quantity*item.price;
    }
  }
  delete(i:any){
    if(confirm("Are you sure to delete this product?")){
    const items = this.cart.filter((item:any) => item.id === i.id);
    const index = this.cart.indexOf(items[0])
    if (index > -1) {
        this.cart.splice(index, 1);
    }
    this.totalitemnumber=this.cart.length;
    this.gettotalprice();
  }
  }

  afterorder()
  {
    this.cart.forEach(product=>product.id=this.i);
    this.cart.forEach(product=>this.order.push(product));
    this.i++;
    this.index++;
    this.cart=[];
    this.totalitemnumber=0;
    console.log(this.order);
  }
  constructor() { }
}
