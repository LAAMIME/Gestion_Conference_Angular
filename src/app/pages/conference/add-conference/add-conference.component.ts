import { Component, OnInit } from '@angular/core';
import {ConferenceComponent} from '../conference.component';
import {Conference} from '../../../../model/model.conference';
import {HomeService} from '../../../../services/home.service';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../../services/authentification.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../../model/model.user';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent implements OnInit {
  ListeTheme:any= null;
  ListeAudience:any= null;
  ListeUsers:any= null;
  ListeCommites:Array<User>=[];
  constructor(public homeService: HomeService, private router: Router,
              public authenticationService: AuthentificationService,
              private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.homeService.getThemes()
      .subscribe(resp=>{
        this.ListeTheme=resp;
        console.log(this.ListeTheme);
      },error => {
        console.log("Pas des Themes"+error);
      })
    this.homeService.getAudiences()
      .subscribe(resp=>{
        this.ListeAudience=resp;
        console.log(this.ListeAudience);
      },error => {
        console.log("Pas des Audiences"+error);
      })
    this.homeService.getUsers()
      .subscribe(resp=>{
        this.ListeUsers=resp;
        console.log(this.ListeUsers);
      },error => {
        console.log("Pas des Users"+error);
      })
  }

  onSaveConference(conference:Conference) {
    conference.list=this.ListeCommites;
    console.log(conference.idAudience);
    console.log(this.ListeCommites);
    //let obj = {'conference':conference, 'list':this.ListeCommites}
    console.log(conference);
    /*this.homeService.addConference(conference)
      .subscribe(
        resp => {
          console.log('addConf nadia');
          console.log(resp);
          this.router.navigateByUrl('/home');
        },
        error => {
          console.log(error);
          console.log('addConf manadiach');
        }
      );*/
  }
  addUser(e) {
    console.log(e.target.value);
    this.ListeCommites.push(e.target.value);
    console.log(this.ListeCommites);
  }
}
