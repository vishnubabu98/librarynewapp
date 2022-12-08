import { NgModule } from '@angular/core';
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
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
