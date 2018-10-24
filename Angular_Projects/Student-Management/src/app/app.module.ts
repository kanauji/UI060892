import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule}  from './routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {StudentListingComponent} from './components/admin/student-listing/student-listing.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NotFoundComponent } from './components/error-handle/not-found/not-found.component';
import { AddStudentComponent } from './components/admin/add-student/add-student.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    StudentListingComponent,
    NotFoundComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
