import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  addressdetail = new FormGroup({
    name:new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z .]*')])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    address:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    zip:new FormControl('',Validators.required),
    telephone:new FormControl('',Validators.required)
  });
   
  deliveryinfo:{
    name:string,
    email:string,
    address:string,
    city:string,
    country:string,
    zip:string,
    telephone:number,
  }[]=[]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  savedetail(){
    console.log(this.addressdetail);
    if(this.addressdetail.valid)
    {
      this.deliveryinfo.push(this.addressdetail.value);
      this.addressdetail.reset();
    }
    this.router.navigate(['payment']);
  }
  
  get name(){
    return this.addressdetail.get('name');
  }
  get email(){
    return this.addressdetail.get('email');
  }
  get address():any{
    return this.addressdetail.get('address');
  }
  get city():any{
    return this.addressdetail.get('city');
  }
  get country():any{
    return this.addressdetail.get('country');
  }
  get zip():any{
    return this.addressdetail.get('zip');
  }
  get telephone():any{
    return this.addressdetail.get('telephone');
  }
}
