import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {
  //for reg fetch data
  dataDisplay:any;
  //for pagination
  public p: number; 

  constructor(private resData: StudentService) { }

  ngOnInit() {
  
  this.resData.getFetch().subscribe(responseData=>{
      //console.log("Response of listing data",responseData)
      this.dataDisplay=responseData;
      console.log("Response of listing data",this.dataDisplay);
      //for pagination 
      this.p = 1;
    })
  }

  //delete
   deleteStudent(user:any){
   console.log('delete data of present onlick button', user); 
   this.resData.deleteRecord(user.s_id).subscribe(responseData=>{
    console.log("STUDENT LIST RESPONSEDATA",responseData)
    this.dataDisplay = this.dataDisplay.filter(u => u !== user);
  })
  }

  //add 

  
}
