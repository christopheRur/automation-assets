import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginForm = new FormGroup({

username: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',Validators.required)

})

  constructor() {

  }

  ngOnInit(): void {
  }

 public login():void {
   if(this.loginForm.invalid)return;

   alert('Calling backend to login')
    }

    public signUp():void {
      if(this.loginForm.invalid)return;

      alert('Calling backend to sign up!')
       }

}
