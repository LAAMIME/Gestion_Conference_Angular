import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';
import {HomeService} from '../../../services/home.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: any;
  constructor(private authenticationService:AuthentificationService,
              private homeService:HomeService,private router:Router) { }

  ngOnInit(): void {
    this.authenticationService.getRoles()
      .subscribe(
        data => {
          console.log(data);
          this.roles = data;
        },
        error => {
          this.authenticationService.logout();
          this.router.navigateByUrl("/login");
      });
  }

}
