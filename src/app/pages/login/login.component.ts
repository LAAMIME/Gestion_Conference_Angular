import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from '../../../model/model.user';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  mode:number=0;

  constructor(private router:Router,
              private authenticationService:AuthentificationService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onLogin(user){
    this.authenticationService.login(user).subscribe(
      resp => {
        let jwt = resp.headers.get("Authorization");
        this.authenticationService.saveToken(jwt);
        this.router.navigateByUrl('/appRoles');
      },
      err => {
        this.mode = 1;
      }
    );
  }

}
