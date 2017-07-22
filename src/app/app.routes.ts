import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormInsertUserComponent } from './form/form-insert-user/form-insert-user.component';
import { FormEditUserComponent } from './form/form-edit-user/form-edit-user.component'
import { FormGetUserComponent } from './form/form-get-user/form-get-user.component'
import { LoginComponent } from "app/login/login.component";
import { ErrorComponent } from "app/error/error.component";
import { ErrorServerComponent } from "app/error/error-server/error-server.component";


export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'errorServer', component: ErrorServerComponent},
    {path: '', component: HomeComponent},
    {path: 'new', component: FormInsertUserComponent},
    {path: 'edit/:id/:idState', component: FormEditUserComponent},
    {path: 'user', component: FormGetUserComponent},
    {path: 'user/:id/:idState', component: FormGetUserComponent}
]