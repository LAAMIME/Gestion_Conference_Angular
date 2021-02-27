import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {
  task:any;
  constructor(private authenticationService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveTasks(task) {
      this.authenticationService.saveTask(task)
      .subscribe(response => {
        this.task = response;
        this.router.navigateByUrl('/appRoles');
      },error => {
        console.log("KIFACH" + error)
      });
  }
}
