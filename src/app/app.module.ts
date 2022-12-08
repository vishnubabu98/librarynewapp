import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userreg",
    component:UserRegComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"bookentry",
    component:BookEntryComponent
  },
  {
    path:"viewbook",
    component:ViewBookComponent
  },
  {
    path:"searchbook",
    component:SearchBookComponent
  },
  {
    path:"issuebook",
    component:IssueBookComponent
  },
  {
    path:"editbook",
    component:EditBookComponent
  },
  {
    path:"deletebook",
    component:DeleteBookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserLoginComponent,
    UserRegComponent,
    BookEntryComponent,
    EditBookComponent,
    DeleteBookComponent,
    SearchBookComponent,
    IssueBookComponent,
    ViewBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
