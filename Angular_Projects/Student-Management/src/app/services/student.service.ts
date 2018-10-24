import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  getAll_register(user:Student) {
    console.log("inserting the data",user)
    return this.http.post('http://localhost:3000/register',user);
  }
  getFetch(){
    console.log("fetching the data")
    return this.http.get('http://localhost:3000/registerFetch');
  }

  deleteRecord(id:number){
    console.log("delete record onclick id",id)
    return this.http.delete('http://localhost:3000/deleteRecord/'+id);
  }
}
