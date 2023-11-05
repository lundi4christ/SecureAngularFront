import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ToptitleComponent } from './toptitle/toptitle.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavnextComponent } from './sidenavnext/sidenavnext.component';
import { DatatableviewComponent } from './datatableview/datatableview.component';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelboxComponent } from './panelbox/panelbox.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { DformsComponent } from './dforms/dforms.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ToptitleComponent,
    SidenavComponent,
    SidenavnextComponent,
    DatatableviewComponent,
    PanelboxComponent,
    FormsComponent,
    DformsComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
