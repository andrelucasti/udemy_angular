import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FormInsertUserComponent} from './form-insert-user/form-insert-user.component';
import {FormQueryUserComponent} from './form-query-user/form-query-user.component';

export const ROUTES: Routes = [
    {path:'', component:HomeComponent},
    {path:'new', component:FormInsertUserComponent},
    {path:'query', component:FormQueryUserComponent},
]