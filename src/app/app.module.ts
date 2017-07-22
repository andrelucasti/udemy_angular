import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { FormComponent } from './form/form.component';
import { FormInsertUserComponent } from './form/form-insert-user/form-insert-user.component';
import { FormEditUserComponent } from './form/form-edit-user/form-edit-user.component';
import { FormGetUserComponent } from './form/form-get-user/form-get-user.component';

import { AppService } from "app/services/app.service";
import { UserService } from "app/services/user.service";
import { FormService } from "app/services/form.service";
import { ModalUsuarioDeleteComponent } from './home/modal-usuario-delete/modal-usuario-delete.component';
import { ModalScreeningDateComponent } from './form/modal-screening-date/modal-screening-date.component';
import { ModalAddScreeningDateComponent } from './form/modal-screening-date/modal-add-screening-date/modal-add-screening-date.component';
import { LoginComponent } from './login/login.component';
import { InputContainerComponent } from './form/input-container/input-container.component';
import { ModalViewUserComponent } from './form/modal-view-user/modal-view-user.component';
import { ErrorComponent } from "app/error/error.component";
import { ErrorServerComponent } from "app/error/error-server/error-server.component";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,
    FormInsertUserComponent,
    FormEditUserComponent,
    FormGetUserComponent,
    ModalUsuarioDeleteComponent,
    ModalScreeningDateComponent,
    ModalAddScreeningDateComponent,
    LoginComponent,
    InputContainerComponent,
    ModalViewUserComponent,
    ErrorComponent,
    ErrorServerComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [AppService, UserService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
