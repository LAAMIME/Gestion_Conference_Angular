import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConferenceLayoutRoutes } from './conference-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from '../../pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {NewConferenceComponent} from '../../pages/new-conference/new-conference.component';
import {RolesComponent} from '../../pages/roles/roles.component';
import {NewRoleComponent} from '../../pages/new-role/new-role.component';
import {AddConferenceComponent} from '../../pages/conference/add-conference/add-conference.component';
import {ConferenceComponent} from '../../pages/conference/conference.component';
import {EditConferenceComponent} from '../../pages/conference/edit-conference/edit-conference.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConferenceLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    HomeComponent,
    NewConferenceComponent,
    RolesComponent,
    AddConferenceComponent,
    EditConferenceComponent,
    ConferenceComponent,
    NewRoleComponent
  ]
})
export class ConferenceLayoutModule { }
