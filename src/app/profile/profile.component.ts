import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerdetail = new FormGroup({
    name:new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z .]*')])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmpassword:new FormControl('',Validators.required)
  });
   
  profile:{
    name:string,
    email:string,
    passworddata:string,
    confirmpassworddata:string
  }[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  onPasswordChange()
  {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  
  savedetail(){
    console.log(this.customerdetail);
    if(this.customerdetail.valid)
    {
      alert("Submitted Successfully");
      this.profile.push(this.customerdetail.value);
      this.customerdetail.reset();
    }
  }
  
  get name(){
    return this.customerdetail.get('name');
  }
  get email(){
    return this.customerdetail.get('email');
  }
  get password():any{
    return this.customerdetail.get('password');
  }
  get confirm_password():any{
    return this.customerdetail.get('confirmpassword');
  }
}
