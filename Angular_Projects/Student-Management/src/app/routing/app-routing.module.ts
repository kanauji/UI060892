import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {StudentListingComponent} from '../components/admin/student-listing/student-listing.component';
import { NotFoundComponent } from '../components/error-handle/not-found/not-found.component';
import {AddStudentComponent}  from '../components/admin/add-student/add-student.component';
const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent },
{path: 'admin/student-listing', component: StudentListingComponent},
{path: 'admin/add-student', component: AddStudentComponent},
 //otherwise redirect to login if error found
 { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

