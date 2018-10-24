import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;

  constructor(private fb:FormBuilder, private service: StudentService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })

  }
  onSubmit(){
    console.log(JSON.stringify(this.loginForm.value));
   }
}
