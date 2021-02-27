import { Routes } from '@angular/router';

import {HomeComponent} from '../../pages/home/home.component';
import {NewConferenceComponent} from '../../pages/new-conference/new-conference.component';
import {RolesComponent} from '../../pages/roles/roles.component';
import {NewRoleComponent} from '../../pages/new-role/new-role.component';
import {AddConferenceComponent} from '../../pages/conference/add-conference/add-conference.component';
import {ConferenceComponent} from '../../pages/conference/conference.component';
import {EditConferenceComponent} from '../../pages/conference/edit-conference/edit-conference.component';

export const ConferenceLayoutRoutes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'conference',  component: ConferenceComponent },
    { path: 'addConference',  component: AddConferenceComponent },
    { path: 'newRole',  component: NewRoleComponent },
    { path: 'appRoles',  component: RolesComponent },
    { path : 'newConference/:url', component : NewConferenceComponent},
    { path : 'editConference/:id', component : EditConferenceComponent}
];
