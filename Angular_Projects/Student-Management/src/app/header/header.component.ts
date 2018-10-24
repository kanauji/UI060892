import { Component, OnInit } from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../model/student";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
