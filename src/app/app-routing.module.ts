import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelboxComponent} from './panelbox/panelbox.component';
import {FormsComponent} from './forms/forms.component';
import {DatatableviewComponent} from './datatableview/datatableview.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
      {path: '', component: PanelboxComponent, data: {title: 'Dashboard'}},
      {path: 'forms', component: FormsComponent, data: {title: 'Signup'}},
      {path: 'users', component: DatatableviewComponent, data: {title: 'User Details'}}
    ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
