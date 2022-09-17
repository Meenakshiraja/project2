import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentdetail = new FormGroup({
    cardnumber:new FormControl('',Validators.required),
    nameoncard:new FormControl('',Validators.required),
    expirydate:new FormControl('',Validators.required),
    pin:new FormControl('',Validators.required),
  });
   
  deliveryinfo:{
    cardnumber:number,
    name:string,
    expirydate:Date,
    pin:number,
  }[]=[]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  savedetail(){
    console.log(this.paymentdetail);
    if(this.paymentdetail.valid)
    {
      this.deliveryinfo.push(this.paymentdetail.value);
      this.paymentdetail.reset();
    }
    this.router.navigate(['ordersummary']);
  }

  get cardnumber():any{
    return this.paymentdetail.get('cardnumber');
  }
  get nameoncard():any{
    return this.paymentdetail.get('nameoncard');
  }
  get expirydate():any{
    return this.paymentdetail.get('expirydate');
  }
  get pin():any{
    return this.paymentdetail.get('pin');
  }
  get telephone():any{
    return this.paymentdetail.get('telephone');
  }
}
