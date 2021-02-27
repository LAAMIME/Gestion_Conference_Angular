import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ConferenceLayoutComponent } from './layouts/conference-layout/conference-layout.component';
import {HomeService} from '../services/home.service';
import {AuthentificationService} from '../services/authentification.service';
import { RolesComponent } from './pages/roles/roles.component';
import { NewRoleComponent } from './pages/new-role/new-role.component';
import { ConferenceComponent } from './pages/conference/conference.component';
import { EditConferenceComponent } from './pages/conference/edit-conference/edit-conference.component';
//import { AddConferenceComponent } from './pages/conference/add-conference/add-conference.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ConferenceLayoutComponent,
    // EditConferenceComponent,
    // AddConferenceComponent,
  ],
  providers: [HomeService,AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
