import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ StudentService } from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private fb:FormBuilder,
  private service : StudentService,
  private routes: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      enrollId: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm; }

 onSubmit(){
 console.log(JSON.stringify(this.registerForm.value));
  this.service.getAll_register(this.registerForm.value).subscribe(data=>{
    console.log("Response",data)
    //onclick redirect to login page
  this.routes.navigate(['/login']);
  })
 }
}
