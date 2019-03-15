import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
  submitted:boolean = false;

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.pattern(/^[\w-]+@([\w-]+\.)+[\w-]+$/)),
    prefix: new FormControl('+91'),
    PhoneNo: new FormControl('',[Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('',[Validators.maxLength(6),Validators.minLength(6),Validators.pattern('[0-9]+')])
    })
  })

  get fcontrol(){
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted=true;
    
    if (this.profileForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)')
  console.log(this.profileForm.value);
  
  }

}
