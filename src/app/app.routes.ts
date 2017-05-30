import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FormInsertUserComponent} from './form/form-insert-user/form-insert-user.component';
import {FormEditUserComponent} from './form/form-edit-user/form-edit-user.component'
import {FormGetUserComponent} from './form/form-get-user/form-get-user.component'


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new', component: FormInsertUserComponent},
    {path: 'edit', component: FormEditUserComponent},
    {path: 'query', component: FormGetUserComponent}
]