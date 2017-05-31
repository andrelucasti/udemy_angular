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
import { UsuariosService } from "app/services/usuarios.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,
    FormInsertUserComponent,
    FormEditUserComponent,
    FormGetUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
